import React, { useState, useEffect, useRef } from 'react';

const InViewRenderer = ({ children, rootMargin = '200px', minHeight = '50px' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, we don't need to observe anymore (freezeOnceVisible)
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        rootMargin,
        threshold: 0,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [rootMargin]);

  return (
    <div 
      ref={ref} 
      style={{ 
        minHeight: isVisible ? 'auto' : minHeight,
        contain: 'content',
        willChange: isVisible ? 'auto' : 'transform, opacity'
      }}
    >
      {isVisible ? children : null}
    </div>
  );
};

export default InViewRenderer;
