'use client';
import { useState, useEffect } from 'react';

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [scrollMax, setScrollMax] = useState<number>(0);

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.scrollY);
      setScrollMax(document.documentElement.scrollHeight - window.innerHeight);
    }

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return {
    scrollPosition,
    scrollMax,
  };
}
