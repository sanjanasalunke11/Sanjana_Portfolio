import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Check if touch device or reduced motion
    if (window.matchMedia('(pointer: coarse)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsTouchDevice(true);
      return;
    }

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const isClickable = 
          target.tagName === 'BUTTON' || 
          target.tagName === 'A' || 
          target.closest('button') || 
          target.closest('a') ||
          target.getAttribute('role') === 'button';
        setIsPointer(!!isClickable);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  // Smooth lag for trailing glow
  useEffect(() => {
    if (isTouchDevice) return;

    let animId: number;
    const follow = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.18,
        y: prev.y + (position.y - prev.y) * 0.18,
      }));
      animId = requestAnimationFrame(follow);
    };

    animId = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(animId);
  }, [position, isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <>
      {/* Outer Glow Follower */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(${trailingPos.x - (isPointer ? 24 : 16)}px, ${trailingPos.y - (isPointer ? 24 : 16)}px, 0)`,
          width: isPointer ? 48 : 32,
          height: isPointer ? 48 : 32,
          border: '1.5px solid rgba(168, 85, 247, 0.5)',
          backgroundColor: isPointer ? 'rgba(168, 85, 247, 0.15)' : 'rgba(121, 41, 219, 0.08)',
          boxShadow: '0 0 16px rgba(168, 85, 247, 0.4)',
        }}
      />

      {/* Center Pinpoint */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-violet-400"
        style={{
          transform: `translate3d(${position.x - 3}px, ${position.y - 3}px, 0)`,
          width: 6,
          height: 6,
          boxShadow: '0 0 8px #D8B4FE',
        }}
      />
    </>
  );
};
