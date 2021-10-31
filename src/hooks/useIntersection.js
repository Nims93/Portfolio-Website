import { useEffect, useState } from 'react';

export const useIntersection = (element, rootMarin) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        observer.unobserve(element);
      },
      { rootMarin }
    );

    element && observer.observe(element);
  }, []);

  return isVisible;
};
