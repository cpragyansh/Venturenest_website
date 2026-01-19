import { useEffect, useMemo, useRef, useCallback } from 'react';
import { useGesture } from '@use-gesture/react';
import { motion, useSpring, useMotionValue, useMotionValueEvent } from 'framer-motion';
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
    maxVerticalRotationDeg: 15,
    dragSensitivity: 25,
    enlargeTransitionMs: 600,
    segments: 22 // Reduced for larger tiles
};

const clamp = (v, min, max) => Math.min(Math.max(v, min), max);
const normalizeAngle = d => ((d % 360) + 360) % 360;
const wrapAngleSigned = deg => {
    const a = (((deg + 180) % 360) + 360) % 360;
    return a - 180;
};
const getDataNumber = (el, name, fallback) => {
    const attr = el.dataset[name] ?? el.getAttribute(`data-${name}`);
    const n = attr == null ? NaN : parseFloat(attr);
    return Number.isFinite(n) ? n : fallback;
};

function buildItems(pool, seg) {
    // Balanced grid for larger tiles with extra top/bottom layers
    const xCols = Array.from({ length: seg }, (_, i) => -(seg) + i * 2);
    const evenYs = [-4.5, -2.5, -0.5, 1.5, 3.5];
    const oddYs = [-3.5, -1.5, 0.5, 2.5, 4.5];

    const coords = xCols.flatMap((x, c) => {
        const ys = c % 2 === 0 ? evenYs : oddYs;
        return ys.map(y => ({ x, y, sizeX: 1.8, sizeY: 1.8 }));
    });


    const totalSlots = coords.length;
    if (pool.length === 0) {
        return coords.map(c => ({ ...c, src: '', alt: '' }));
    }

    const normalizedImages = pool.map(image => {
        if (typeof image === 'string') return { src: image, alt: '' };
        return {
            src: image.src || image.imageUrl || '',
            alt: image.alt || image.photoName || 'VentureNest Memory'
        };
    });

    const usedImages = Array.from({ length: totalSlots }, (_, i) => normalizedImages[i % normalizedImages.length]);

    return coords.map((c, i) => ({
        ...c,
        src: usedImages[i].src,
        alt: usedImages[i].alt
    }));
}

function computeItemBaseRotation(offsetX, offsetY, sizeX, sizeY, segments) {
    const unit = 360 / segments / 2;
    const rotateY = unit * (offsetX + (sizeX - 1) / 2);
    const rotateX = unit * (offsetY - (sizeY - 1) / 2);
    return { rotateX, rotateY };
}

export default function DomeGallery({
    images = DEFAULT_IMAGES,
    fit = 0.8,
    fitBasis = 'auto',
    minRadius = 600,
    maxRadius = Infinity,
    padFactor = 0.2,
    overlayBlurColor = '#060010',
    maxVerticalRotationDeg = 25, // Increased for a more spherical feel
    dragSensitivity = DEFAULTS.dragSensitivity,
    enlargeTransitionMs = DEFAULTS.enlargeTransitionMs,
    segments = DEFAULTS.segments,
    dragDampening = 4,
    openedImageWidth = 'min(90vw, 1000px)',
    openedImageHeight = '80vh',
    imageBorderRadius = '20px',
    openedImageBorderRadius = '40px',
    grayscale = false
}) {
    const zoomRaw = useMotionValue(1);
    const zoomSpring = useSpring(zoomRaw, { damping: 35, stiffness: 200, restDelta: 0.001 });

    const rootRef = useRef(null);
    const mainRef = useRef(null);
    const sphereRef = useRef(null);
    const frameRef = useRef(null);
    const viewerRef = useRef(null);
    const scrimRef = useRef(null);
    const focusedElRef = useRef(null);
    const originalTilePositionRef = useRef(null);
    const lastRadiusRef = useRef(600);


    const rotationRef = useRef({ x: 0, y: 0 });
    const startRotRef = useRef({ x: 0, y: 0 });
    const startPosRef = useRef(null);
    const draggingRef = useRef(false);
    const movedRef = useRef(false);
    const inertiaRAF = useRef(null);
    const openingRef = useRef(false);
    const openStartedAtRef = useRef(0);
    const lastDragEndAt = useRef(0);

    // --- Zoom Handling ---
    useEffect(() => {
        const handleWheel = (e) => {
            // Prevent default to stop page scroll when hovering gallery
            if (mainRef.current?.contains(e.target)) {
                e.preventDefault();
                const currentZoom = zoomRaw.get();
                const nextZoom = clamp(currentZoom - e.deltaY * 0.0015, 0.4, 3.0);
                zoomRaw.set(nextZoom);
            }
        };

        window.addEventListener('wheel', handleWheel, { passive: false });
        return () => window.removeEventListener('wheel', handleWheel);
    }, []);

    const hoverAudio = useRef(typeof Audio !== 'undefined' ? new Audio("https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3") : null);
    const clickAudio = useRef(typeof Audio !== 'undefined' ? new Audio("https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3") : null);

    const playSound = (type) => {
        const audio = type === 'hover' ? hoverAudio.current : clickAudio.current;
        if (audio) {
            audio.volume = type === 'hover' ? 0.2 : 0.4;
            audio.currentTime = 0;
            audio.play().catch(() => { });
        }
    };

    const scrollLockedRef = useRef(false);
    const lockScroll = useCallback(() => {
        if (scrollLockedRef.current) return;
        scrollLockedRef.current = true;
        document.body.classList.add('dg-scroll-lock');
    }, []);
    const unlockScroll = useCallback(() => {
        if (!scrollLockedRef.current) return;
        if (rootRef.current?.getAttribute('data-enlarging') === 'true') return;
        scrollLockedRef.current = false;
        document.body.classList.remove('dg-scroll-lock');
    }, []);

    const items = useMemo(() => buildItems(images, segments), [images, segments]);

    const applyTransform = useCallback((xDeg, yDeg) => {
        const el = sphereRef.current;
        if (el) {
            el.style.transform = `translateZ(calc(var(--radius) * -1)) rotateX(${xDeg}deg) rotateY(${yDeg}deg)`;
        }
    }, []);

    const updateCurvature = useCallback((z) => {
        const root = rootRef.current;
        if (!root) return;

        // Dynamically adjust radius based on zoom spring
        const w = root.offsetWidth || window.innerWidth;
        const h = root.offsetHeight || window.innerHeight;
        const minDim = Math.min(w, h);
        const aspect = w / h;
        let basis = aspect >= 1.3 ? w : minDim;

        let radius = basis * fit * z;
        const heightGuard = h * 1.5 * z;
        radius = Math.min(radius, heightGuard);
        radius = clamp(radius, minRadius * 0.4, maxRadius);
        const roundedRadius = Math.round(radius);
        lastRadiusRef.current = roundedRadius;

        root.style.setProperty('--radius', `${roundedRadius}px`);
        // Dynamic perspective for globe effect: lower perspective when zoomed out = stronger curvature feel
        root.style.setProperty('--perspective', `${roundedRadius * 2.5}px`);
        // Increase vignette/overlay blur when zoomed out to emphasize globe shape
        const vignetteStrength = clamp(1 - (z - 0.4), 0.7, 1);
        root.style.setProperty('--vignette-opacity', vignetteStrength);

        applyTransform(rotationRef.current.x, rotationRef.current.y);
    }, [fit, minRadius, maxRadius, applyTransform]);

    useMotionValueEvent(zoomSpring, "change", (latest) => {
        updateCurvature(latest);
    });

    useEffect(() => {
        const root = rootRef.current;
        if (!root) return;
        const ro = new ResizeObserver(() => {
            updateCurvature(zoomSpring.get());
            const w = root.offsetWidth, h = root.offsetHeight;
            const minDim = Math.min(w, h);
            const viewerPad = Math.max(8, Math.round(minDim * padFactor));
            root.style.setProperty('--viewer-pad', `${viewerPad}px`);
            root.style.setProperty('--overlay-blur-color', overlayBlurColor);
            root.style.setProperty('--tile-radius', imageBorderRadius);
            root.style.setProperty('--enlarge-radius', openedImageBorderRadius);
        });
        ro.observe(root);
        return () => ro.disconnect();
    }, [padFactor, overlayBlurColor, imageBorderRadius, openedImageBorderRadius, updateCurvature, zoomSpring]);

    const stopInertia = useCallback(() => {
        if (inertiaRAF.current) {
            cancelAnimationFrame(inertiaRAF.current);
            inertiaRAF.current = null;
        }
    }, []);

    const startInertia = useCallback(
        (vx, vy) => {
            const MAX_V = 2.0;
            let vX = clamp(vx, -MAX_V, MAX_V) * 60;
            let vY = clamp(vy, -MAX_V, MAX_V) * 60;
            const d = clamp(dragDampening ?? 4, 0.1, 10);
            const frictionMul = 0.98 - (0.005 * d);
            const step = () => {
                vX *= frictionMul;
                vY *= frictionMul;
                if (Math.abs(vX) < 0.001 && Math.abs(vY) < 0.001) { inertiaRAF.current = null; return; }
                const nextX = clamp(rotationRef.current.x - vY / 150, -maxVerticalRotationDeg, maxVerticalRotationDeg);
                const nextY = wrapAngleSigned(rotationRef.current.y + vX / 150);
                rotationRef.current = { x: nextX, y: nextY };
                applyTransform(nextX, nextY);
                inertiaRAF.current = requestAnimationFrame(step);
            };
            stopInertia();
            inertiaRAF.current = requestAnimationFrame(step);
        },
        [dragDampening, maxVerticalRotationDeg, stopInertia]
    );

    useGesture(
        {
            onDragStart: ({ event }) => {
                if (focusedElRef.current) return;
                stopInertia();
                const evt = event;
                draggingRef.current = true;
                movedRef.current = false;
                startRotRef.current = { ...rotationRef.current };
                startPosRef.current = { x: evt.clientX, y: evt.clientY };
            },
            onDrag: ({ event, last, velocity = [0, 0], direction = [0, 0], movement }) => {
                if (focusedElRef.current || !draggingRef.current || !startPosRef.current) return;
                const evt = event;
                const dxTotal = evt.clientX - startPosRef.current.x;
                const dyTotal = evt.clientY - startPosRef.current.y;
                if (!movedRef.current) {
                    const dist2 = dxTotal * dxTotal + dyTotal * dyTotal;
                    if (dist2 > 16) movedRef.current = true;
                }
                const nextX = clamp(startRotRef.current.x - dyTotal / dragSensitivity, -maxVerticalRotationDeg, maxVerticalRotationDeg);
                const nextY = wrapAngleSigned(startRotRef.current.y + dxTotal / dragSensitivity);
                rotationRef.current = { x: nextX, y: nextY };
                applyTransform(nextX, nextY);
                if (last) {
                    draggingRef.current = false;
                    let [vMagX, vMagY] = velocity;
                    const [dirX, dirY] = direction;
                    if (movedRef.current) {
                        startInertia(vMagX * dirX, vMagY * dirY);
                        lastDragEndAt.current = performance.now();
                    }
                    movedRef.current = false;
                }
            },
            onPinch: ({ offset: [d] }) => {
                if (focusedElRef.current) return;
                zoomRaw.set(d);
            }
        },
        {
            target: mainRef,
            eventOptions: { passive: true },
            pinch: { scaleBounds: { min: 0.4, max: 3.0 }, from: () => [zoomRaw.get(), 0] }
        }
    );

    const close = useCallback(() => {
        if (performance.now() - openStartedAtRef.current < 400) return;
        const el = focusedElRef.current;
        if (!el) return;
        const parent = el.parentElement;
        const overlay = viewerRef.current?.querySelector('.enlarge');
        if (!overlay) return;

        playSound('click');
        const originalPos = originalTilePositionRef.current;
        const rootRect = rootRef.current.getBoundingClientRect();
        const currentRect = overlay.getBoundingClientRect();

        const animatingOverlay = document.createElement('div');
        animatingOverlay.className = 'enlarge-closing';
        animatingOverlay.style.cssText = `position:fixed;left:${currentRect.left}px;top:${currentRect.top}px;width:${currentRect.width}px;height:${currentRect.height}px;z-index:9999;border-radius: var(--enlarge-radius, 32px);overflow:hidden;transition:all ${enlargeTransitionMs}ms cubic-bezier(0.16, 1, 0.3, 1);`;


        const img = overlay.querySelector('img').cloneNode();
        img.style.cssText = 'width:100%;height:100%;object-fit:cover;';
        animatingOverlay.appendChild(img);

        overlay.remove();
        rootRef.current.appendChild(animatingOverlay);

        requestAnimationFrame(() => {
            animatingOverlay.style.left = originalPos.left + 'px';
            animatingOverlay.style.top = originalPos.top + 'px';
            animatingOverlay.style.width = originalPos.width + 'px';
            animatingOverlay.style.height = originalPos.height + 'px';
            animatingOverlay.style.opacity = '0';
        });

        setTimeout(() => {
            animatingOverlay.remove();
            parent.style.setProperty('--rot-y-delta', '0deg');
            parent.style.setProperty('--rot-x-delta', '0deg');
            el.style.visibility = '';
            focusedElRef.current = null;
            rootRef.current?.removeAttribute('data-enlarging');
            openingRef.current = false;
            unlockScroll();
        }, enlargeTransitionMs);
    }, [enlargeTransitionMs, unlockScroll]);

    const openItemFromElement = useCallback(el => {
        if (openingRef.current) return;
        openingRef.current = true;
        openStartedAtRef.current = performance.now();
        playSound('click');
        lockScroll();

        const parent = el.parentElement;
        focusedElRef.current = el;
        const offsetX = getDataNumber(parent, 'offsetX', 0);
        const offsetY = getDataNumber(parent, 'offsetY', 0);
        const sizeX = getDataNumber(parent, 'sizeX', 2);
        const sizeY = getDataNumber(parent, 'sizeY', 2);
        const parentRot = computeItemBaseRotation(offsetX, offsetY, sizeX, sizeY, segments);

        const parentY = normalizeAngle(parentRot.rotateY);
        const globalY = normalizeAngle(rotationRef.current.y);
        let rotY = -(parentY + globalY) % 360;
        if (rotY < -180) rotY += 360;
        const rotX = -parentRot.rotateX - rotationRef.current.x;

        parent.style.setProperty('--rot-y-delta', `${rotY}deg`);
        parent.style.setProperty('--rot-x-delta', `${rotX}deg`);

        const refDiv = document.createElement('div');
        refDiv.className = 'item__image item__image--reference';
        refDiv.style.visibility = 'hidden';
        parent.appendChild(refDiv);

        const tileR = refDiv.getBoundingClientRect();
        const frameR = frameRef.current.getBoundingClientRect();
        const mainR = mainRef.current.getBoundingClientRect();
        refDiv.remove();

        originalTilePositionRef.current = { left: tileR.left, top: tileR.top, width: tileR.width, height: tileR.height };
        el.style.visibility = 'hidden';

        const overlay = document.createElement('div');
        overlay.className = 'enlarge';
        overlay.style.cssText = `position:absolute;left:${tileR.left}px;top:${tileR.top}px;width:${tileR.width}px;height:${tileR.height}px;z-index:3000;`;


        const img = document.createElement('img');
        img.src = parent.dataset.src;
        overlay.appendChild(img);

        // Add Close Button
        const closeBtn = document.createElement('button');
        closeBtn.innerHTML = '×';
        closeBtn.style.cssText = `position:absolute;top:1rem;right:1rem;width:40px;height:40px;border-radius:50%;background:rgba(255,255,255,0.1);color:white;border:none;font-size:2rem;display:flex;align-items:center;justify-content:center;cursor:pointer;z-index:100;backdrop-filter:blur(5px);transition:transform 0.3s ease;`;
        closeBtn.onclick = (e) => { e.stopPropagation(); close(); };
        closeBtn.onmouseenter = () => closeBtn.style.transform = 'scale(1.1) rotate(90deg)';
        closeBtn.onmouseleave = () => closeBtn.style.transform = 'scale(1) rotate(0deg)';
        overlay.appendChild(closeBtn);

        // Add Premium Caption UI
        const caption = document.createElement('div');
        caption.style.cssText = `position:absolute;bottom:0;left:0;right:0;padding:2rem;background:linear-gradient(to top, rgba(0,0,0,0.8), transparent);color:white;opacity:0;transition:opacity 0.4s 0.2s ease;pointer-events:none;`;
        caption.innerHTML = `<h3 style="margin:0;font-size:1.5rem;font-weight:700;">${el.getAttribute('aria-label') || 'VentureNest Capture'}</h3>`;
        overlay.appendChild(caption);

        viewerRef.current.appendChild(overlay);
        rootRef.current?.setAttribute('data-enlarging', 'true');

        requestAnimationFrame(() => {
            overlay.style.left = frameR.left + 'px';
            overlay.style.top = frameR.top + 'px';
            overlay.style.width = frameR.width + 'px';
            overlay.style.height = frameR.height + 'px';
            caption.style.opacity = '1';
        });
    }, [segments, lockScroll]);

    return (
        <div
            ref={rootRef}
            className="sphere-root"
            style={{
                ['--segments-x']: segments,
                ['--segments-y']: segments,
                ['--overlay-blur-color']: overlayBlurColor,
                ['--tile-radius']: imageBorderRadius,
                ['--enlarge-radius']: openedImageBorderRadius,
                ['--image-filter']: grayscale ? 'grayscale(1)' : 'none'
            }}
        >
            <main ref={mainRef} className="sphere-main">
                <div className="stage">
                    <div ref={sphereRef} className="sphere">
                        {items.map((it, i) => (
                            <div
                                key={`${it.x},${it.y},${i}`}
                                className="item"
                                data-src={it.src}
                                data-offset-x={it.x}
                                data-offset-y={it.y}
                                data-size-x={it.sizeX}
                                data-size-y={it.sizeY}
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
                                    aria-label={it.alt}
                                    onMouseEnter={() => playSound('hover')}
                                    onClick={(e) => {
                                        if (draggingRef.current || movedRef.current || performance.now() - lastDragEndAt.current < 100) return;
                                        openItemFromElement(e.currentTarget);
                                    }}
                                >
                                    <img src={it.src} draggable={false} alt={it.alt} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="overlay" />
                <div className="overlay overlay--blur" />
                <div className="edge-fade edge-fade--top" />
                <div className="edge-fade edge-fade--bottom" />

                <div className="viewer" ref={viewerRef}>
                    <div ref={scrimRef} className="scrim" onClick={close} />
                    <div ref={frameRef} className="frame" />
                </div>
            </main>
        </div>
    );
}
