import { useState, useRef } from 'react';

export default function useScreenObserver() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [isOnScreen, setIsOnScreen] = useState(false);

  const refCallback = (node: HTMLElement | null) => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    if (node) {
      observerRef.current = new IntersectionObserver(([entry]) => {
        setIsOnScreen(entry.isIntersecting);
      });
      observerRef.current.observe(node);
    }
  };

  return { isOnScreen, refCallback };
}
