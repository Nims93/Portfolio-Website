import { useEffect, useState } from 'react';

export const useIntersection = (element, rootMarin) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const callback = ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(entry.isIntersecting);
        observer.unobserve(element.current);
      }
    };

    const observer = new IntersectionObserver(callback, { rootMarin });

    element && observer.observe(element.current);
  }, []);

  return isVisible;
};
