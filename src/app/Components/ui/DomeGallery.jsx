import React, { useRef, useEffect, useState, useMemo } from 'react';
import './DomeGallery.css';

const DomeGallery = ({
  images = [],
  fit = 0.85,
  minRadius = 600,
  segments = 22,
  dragDampening = 4,
  onImageClick // Added optional prop
}) => {
  const rootRef = useRef(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Determine grid dimensions based on image count and segments
  // We assume 'segments' is the number of columns (horizontal segments)
  const columns = segments;
  const rows = Math.ceil(images.length / columns);
  
  // Adjust segments-y to fit rows, or keep it proportional? 
  // Let's set segments-y to a value that makes the items roughly square or fits the sphere.
  // The CSS uses --rot-x = (360 / segments-y).
  // If we want a full sphere, segments-y should cover 360 (or 180?).
  // Usually sphere mapping is 360 horizontal, 180 vertical.
  // But let's stick to the CSS logic: rot-x = 360/segments-y.
  // If we use 22 segments for X, and we have, say, 100 images -> 5 rows.
  // We can just use the row count as segments-y if we want them to wrap "fully" or distribute them.
  // Let's try setting segments-y to roughly match the aspect ratio or just 'rows' + padding.
  // Actually, if we want a "dome" or "sphere" look, we might want fixed 360/180 distribution.
  // But let's assume the CSS handles it if update segments-y.
  // Let's use 'rows' * 2 to give some space or just 'segments' again to make it a generic sphere grid?
  // Let's assume segments-y = segments (square grid on sphere) for now, 
  // but if we have too many images they might overlap or spiral.
  // Better approach: segments-y should be enough to hold the rows.
  // If we want to wrap around the sphere once, segments-y should be close to segments/2 (for 180 deg vs 360 deg).
  
  const segmentsY = Math.max(rows, Math.floor(segments / 2)) + 2; // Ensure enough rows

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const dx = e.clientX - dragStart.x;
    const dy = e.clientY - dragStart.y;
    
    setRotation(prev => ({
      x: prev.x - dy / dragDampening,
      y: prev.y + dx / dragDampening
    }));
    
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp);
    return () => window.removeEventListener('mouseup', handleMouseUp);
  }, []);

  return (
    <div 
      className="sphere-root" 
      ref={rootRef}
      style={{
        '--segments-x': columns,
        '--segments-y': segmentsY,
        '--radius': `${minRadius}px`,
        '--rot-x-delta': `${rotation.x}deg`,
        '--rot-y-delta': `${rotation.y}deg`,
        cursor: isDragging ? 'grabbing' : 'grab'
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
    >
      <main className="sphere-main">
        <div className="stage">
          <div className="sphere">
            {images.map((img, i) => {
              // Calculate grid position
              // We want to center them properly?
              // The CSS uses --offset-x and --offset-y.
              // Center is when offset is 0?
              // The CSS: rot-y * (offset-x + (item-size-x - 1)/2)
              // This implies offset-x is an index.
              
              const col = i % columns;
              const row = Math.floor(i / columns);
              
              // Center the grid
              const offsetX = col - (columns / 2);
              const offsetY = row - (rows / 2);

              return (
                <div 
                  key={img.id || i} 
                  className="item"
                  style={{
                    '--offset-x': offsetX,
                    '--offset-y': offsetY,
                    '--item-size-x': 1,
                    '--item-size-y': 1
                  }}
                >
                  <div 
                    className="item__image"
                    onClick={() => onImageClick && onImageClick(img)}
                  >
                    <img src={img.img || img.url || img} alt="" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      
      {/* Optional Gradient Edges from CSS */}
      <div className="edge-fade edge-fade--top" />
      <div className="edge-fade edge-fade--bottom" />
    </div>
  );
};

export default DomeGallery;
