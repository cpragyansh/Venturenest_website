import { useEffect, useMemo, useRef, useCallback, useState } from 'react';
import { useGesture } from '@use-gesture/react';
import './DomeGallery.css';

const DEFAULT_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1755331039789-7e5680e26e8f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Abstract art'
  },
  {
    src: 'https://images.unsplash.com/photo-1755569309049-98410b94f66d?q=80&w=772&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Modern sculpture'
  }
];

const DEFAULTS = {
  maxVerticalRotationDeg: 45,
  dragSensitivity: 20,
  enlargeTransitionMs: 300,
  segments: 42 // Increased for tighter fit
};

const clamp = (v, min, max) => Math.min(Math.max(v, min), max);
const normalizeAngle = d => ((d % 360) + 360) % 360;
const wrapAngleSigned = deg => {
  const a = (((deg + 180) % 360) + 360) % 360;
  return a - 180;
};

function buildItems(pool, seg) {
  const items = [];
  const rows = 14; // Increased rows
  const cols = seg;
  const totalSlots = rows * cols;
  
  if (pool.length === 0) return [];

  const normalizedImages = pool.map(image => {
    if (typeof image === 'string') return { src: image, alt: '' };
    return { src: image.src || image.imageUrl || image.img || '', alt: image.alt || image.photoName || '' };
  });

  const usedImages = Array.from({ length: totalSlots }, (_, i) => normalizedImages[i % normalizedImages.length]);

  let idx = 0;
  for (let r = 0; r < rows; r++) {
    const lat = -75 + (r * 150) / (rows - 1);
    for (let c = 0; c < cols; c++) {
      const lon = (c * 360) / cols;
      items.push({
        x: lon,
        y: lat,
        sizeX: 2.1, // Increased size
        sizeY: 2.1,
        src: usedImages[idx].src,
        alt: usedImages[idx].alt,
        original: pool[idx % pool.length]
      });
      idx++;
    }
  }

  return items;
}

export default function DomeGallery({
  images = DEFAULT_IMAGES,
  onImageClick,
  fit = 0.6,
  minRadius = 600,
  maxRadius = Infinity,
  overlayBlurColor = '#060010',
  maxVerticalRotationDeg = 45,
  dragSensitivity = 15,
  dragDampening = 2,
  segments = 36,
  grayscale = false,
  imageBorderRadius = '24px'
}) {
  const rootRef = useRef(null);
  const mainRef = useRef(null);
  const sphereRef = useRef(null);
  const rotationRef = useRef({ x: 0, y: 0 });
  const startRotRef = useRef({ x: 0, y: 0 });
  const startPosRef = useRef({ x: 0, y: 0 });
  const draggingRef = useRef(false);
  const movedRef = useRef(false);
  const inertiaRAF = useRef(null);
  const lastDragEndAt = useRef(0);
  const [zoom, setZoom] = useState(2.0); // Initial zoom set to 'Zoomed In' as requested

  const items = useMemo(() => buildItems(images, segments), [images, segments]);

  const applyTransform = useCallback((xDeg, yDeg) => {
    const el = sphereRef.current;
    if (el) {
      // Formula: (Distance Multiplier) - (Zoom)
      // If zoom is 2.2, multiplier is 0.3 (Very close)
      // If zoom is 0.5, multiplier is 2.0 (Further back)
      el.style.transform = `translateZ(calc(var(--radius) * -1 * (2.5 - var(--zoom, 1)))) rotateX(${xDeg}deg) rotateY(${yDeg}deg)`;
    }
  }, []);

  const stopInertia = useCallback(() => {
    if (inertiaRAF.current) {
      cancelAnimationFrame(inertiaRAF.current);
      inertiaRAF.current = null;
    }
  }, []);

  const startInertia = useCallback(
    (vx, vy) => {
      let vX = clamp(vx, -1.5, 1.5) * 80;
      let vY = clamp(vy, -1.5, 1.5) * 80;
      const friction = 0.95;
      
      const step = () => {
        vX *= friction;
        vY *= friction;
        if (Math.abs(vX) < 0.01 && Math.abs(vY) < 0.01) {
          inertiaRAF.current = null;
          return;
        }
        const nextX = wrapAngleSigned(rotationRef.current.x - vY / 100);
        const nextY = wrapAngleSigned(rotationRef.current.y + vX / 100);
        rotationRef.current = { x: nextX, y: nextY };
        applyTransform(nextX, nextY);
        inertiaRAF.current = requestAnimationFrame(step);
      };
      stopInertia();
      inertiaRAF.current = requestAnimationFrame(step);
    },
    [maxVerticalRotationDeg, stopInertia, applyTransform]
  );

  useGesture(
    {
      onDragStart: ({ event }) => {
        stopInertia();
        draggingRef.current = true;
        movedRef.current = false;
        startRotRef.current = { ...rotationRef.current };
        startPosRef.current = { x: event.clientX, y: event.clientY };
      },
      onDrag: ({ event, last, velocity, direction, movement }) => {
        if (!draggingRef.current) return;
        const dxTotal = event.clientX - startPosRef.current.x;
        const dyTotal = event.clientY - startPosRef.current.y;
        
        if (!movedRef.current && (dxTotal * dxTotal + dyTotal * dyTotal > 10)) {
          movedRef.current = true;
        }

        const nextX = wrapAngleSigned(startRotRef.current.x - dyTotal / dragSensitivity);
        const nextY = wrapAngleSigned(startRotRef.current.y + dxTotal / dragSensitivity);
        
        rotationRef.current = { x: nextX, y: nextY };
        applyTransform(nextX, nextY);

        if (last) {
          draggingRef.current = false;
          let [vx, vy] = velocity;
          const [dx, dy] = direction;
          startInertia(vx * dx, vy * dy);
          if (movedRef.current) lastDragEndAt.current = performance.now();
        }
      },
      onWheel: ({ delta: [, dy] }) => {
        setZoom(prev => clamp(prev - dy * 0.001, 0.5, 2.2));
      },
      onPinch: ({ offset: [d] }) => {
        // Pinch distance is typically large, we want to map it to our 0.5 - 2.2 range
        // Scaling movement to zoom values
        setZoom(clamp(1 + d / 200, 0.5, 2.2));
      }
    },
    { target: mainRef, eventOptions: { passive: false } }
  );

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    
    const updateRadius = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const radius = clamp(Math.min(w, h) * fit, minRadius, maxRadius);
      root.style.setProperty('--radius', `${radius}px`);
    };

    window.addEventListener('resize', updateRadius);
    updateRadius();
    applyTransform(rotationRef.current.x, rotationRef.current.y);
    
    return () => window.removeEventListener('resize', updateRadius);
  }, [fit, minRadius, maxRadius, applyTransform]);

  useEffect(() => {
    rootRef.current?.style.setProperty('--zoom', zoom);
  }, [zoom]);

  const handleTileClick = (item) => {
    if (movedRef.current || performance.now() - lastDragEndAt.current < 100) return;
    if (onImageClick) {
      // Normalize object for the parent's ModalContent (expects imageUrl and photoName)
      const exportItem = (typeof item.original === 'object' && item.original !== null) 
        ? { ...item.original } 
        : { imageUrl: item.src, photoName: item.alt };
      
      if (!exportItem.imageUrl) exportItem.imageUrl = item.src;
      if (!exportItem.photoName) exportItem.photoName = item.alt;
      
      onImageClick(exportItem);
    }
  };

  return (
    <div
      ref={rootRef}
      className="sphere-root"
      style={{
        ['--overlay-blur-color']: overlayBlurColor,
        ['--tile-radius']: imageBorderRadius,
        ['--image-filter']: grayscale ? 'grayscale(1)' : 'none'
      }}
    >
      <main ref={mainRef} className="sphere-main">
        <div className="stage">
          <div ref={sphereRef} className="sphere">
            {items.map((it, i) => (
              <div
                key={i}
                className="item"
                style={{
                  ['--offset-x']: it.x,
                  ['--offset-y']: it.y,
                  ['--item-size-x']: it.sizeX,
                  ['--item-size-y']: it.sizeY
                }}
              >
                <div
                  className="item__image"
                  role="button"
                  tabIndex={0}
                  onClick={() => handleTileClick(it)}
                >
                  <img src={it.src} draggable={false} alt={it.alt} />
                  <div className="item-overlay" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="overlay" />
        <div className="overlay overlay--blur" />
        <div className="edge-fade edge-fade--top" />
        <div className="edge-fade edge-fade--bottom" />
        
        <div className="sphere-controls">
           <div className="zoom-controls">
              <button 
                className="zoom-btn" 
                onClick={() => setZoom(prev => clamp(prev + 0.2, 0.5, 2.2))}
                title="Zoom In"
              >
                +
              </button>
              <div className="zoom-indicator">
                <div className="zoom-bar">
                  <div className="zoom-fill" style={{ width: `${((zoom - 0.5) / 1.7) * 100}%` }} />
                </div>
              </div>
              <button 
                className="zoom-btn" 
                onClick={() => setZoom(prev => clamp(prev - 0.2, 0.5, 2.2))}
                title="Zoom Out"
              >
                -
              </button>
           </div>
        </div>
      </main>
    </div>
  );
}
