import { useEffect, useRef, useState } from 'react';

/**
 * CustomCursor
 * Cursor sutil e de alta precisão (Dot + Ring) com interpolação fluida (lerp).
 */
export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const coords = useRef({
    currentX: -100,
    currentY: -100,
    targetX: -100,
    targetY: -100,
  });

  useEffect(() => {
    // Desativa se o dispositivo for touch ou preferir menos movimento
    if (window.matchMedia('(pointer: coarse)').matches || 
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const onMouseMove = (e) => {
      coords.current.targetX = e.clientX;
      coords.current.targetY = e.clientY;
      if (!isVisible) setIsVisible(true);

      // Posiciona o ponto central imediatamente
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);

    // Loop de interpolação fluida para o anel externo
    let rafId;
    const render = () => {
      const c = coords.current;
      c.currentX += (c.targetX - c.currentX) * 0.15;
      c.currentY += (c.targetY - c.currentY) * 0.15;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${c.currentX}px, ${c.currentY}px, 0)`;
      }

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <div 
        ref={dotRef} 
        className="pop-cursor-dot" 
        style={{ willChange: 'transform' }} 
      />
      <div 
        ref={ringRef} 
        className="pop-cursor-ring" 
        style={{ willChange: 'transform' }} 
      />
    </>
  );
}
