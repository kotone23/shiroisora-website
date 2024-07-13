"use client";
import React, { useState, useEffect } from 'react';

const ScrollDownArrows = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showArrowsTimeout = setTimeout(() => {
      setIsVisible(true);
    }, 1500); // 1.5秒後に表示開始
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(showArrowsTimeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2">
      <div className="flex flex-col items-center space-y-0">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className="w-3 h-3 border-b-2 border-r-2 border-slate-900 transform rotate-45 animate-pulse rounded-br-sm"
            style={{
              animationDelay: `${index * 0.5}s`,
              animationDuration: '2s',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollDownArrows;