'use client';

import { useEffect, useState, useRef } from 'react';

const CustomCursor = () => {
  const [isMobile, setIsMobile] = useState(false);
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({ x: 0, y: 0 });
  const requestRef = useRef<number>();

  useEffect(() => {
    // Check if device is mobile/tablet
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    if (isMobile) {
      return () => window.removeEventListener('resize', checkMobile);
    }

    // Fast cursor update using requestAnimationFrame
    const updateMousePosition = (e: MouseEvent) => {
      positionRef.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      const { x, y } = positionRef.current;
      
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${x - 6}px, ${y - 6}px, 0)`;
      }
      
      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.style.transform = `translate3d(${x - 20}px, ${y - 20}px, 0)`;
      }

      requestRef.current = requestAnimationFrame(animate);
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        (target.closest && target.closest('a')) ||
        (target.closest && target.closest('button'));
      
      if (isInteractive) {
        if (cursorDotRef.current) {
          cursorDotRef.current.style.transform = `translate3d(${positionRef.current.x - 6}px, ${positionRef.current.y - 6}px, 0) scale(1.5)`;
        }
        if (cursorOutlineRef.current) {
          cursorOutlineRef.current.style.transform = `translate3d(${positionRef.current.x - 20}px, ${positionRef.current.y - 20}px, 0) scale(1.5)`;
        }
      }
    };

    const handleMouseLeave = () => {
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${positionRef.current.x - 6}px, ${positionRef.current.y - 6}px, 0) scale(1)`;
      }
      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.style.transform = `translate3d(${positionRef.current.x - 20}px, ${positionRef.current.y - 20}px, 0) scale(1)`;
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);
    
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [isMobile]);

  // Don't render cursor on mobile devices
  if (isMobile) {
    return null;
  }

  return (
    <>
      {/* Dot cursor */}
      <div
        ref={cursorDotRef}
        className="custom-cursor fixed w-3 h-3 rounded-full bg-white pointer-events-none z-[9999] hidden md:block will-change-transform"
        style={{ 
          transition: 'transform 0.1s ease-out',
          transform: 'translate3d(-100px, -100px, 0)'
        }}
      />
      {/* Outline cursor */}
      <div
        ref={cursorOutlineRef}
        className="custom-cursor fixed w-10 h-10 rounded-full border border-white/30 pointer-events-none z-[9998] hidden md:block will-change-transform"
        style={{ 
          transition: 'transform 0.15s ease-out',
          transform: 'translate3d(-100px, -100px, 0)'
        }}
      />
    </>
  );
};

export default CustomCursor;
