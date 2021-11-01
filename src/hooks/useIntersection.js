import { useEffect, useState } from 'react';

export const useIntersection = (element, threshold) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const callback = ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(entry.isIntersecting);
        observer.unobserve(element.current);
      }
    };

    const observer = new IntersectionObserver(callback, { threshold });

    element && observer.observe(element.current);
  }, []);

  return isVisible;
};
