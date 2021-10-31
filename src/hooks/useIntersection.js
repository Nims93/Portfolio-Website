import { useEffect, useState } from 'react';

export const useIntersection = (element, rootMarin) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMarin }
    );

    element && observer.observe(element);

    return () => observer.unobserve(element);
  }, []);

  return isVisible;
};
