import { RefObject, useEffect, useState } from 'react';

const useIntersector = (ref: RefObject<Element>, options?: IntersectionObserverInit) => {
  const [isIntersected, setIntersection] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => setIntersection(e.intersectionRatio < 1), { ...options });

    if (!ref.current) {
      return;
    }

    observer.observe(ref.current);
    // eslint-disable-next-line consistent-return
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersected;
};

export default useIntersector;
