import { RefObject, useEffect, useState } from 'react';

type MousePosition = {
  shadowX: number;
  shadowY: number;
};

const useMousePosition = (refs: RefObject<HTMLElement>[]) => {
  const [mousePos, setMousePos] = useState<MousePosition[]>([]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const newMousePos = refs.map(ref => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          const x = event.clientX - rect.left;
          const y = event.clientY - rect.top;
          const normalizedX = (x / rect.width) * 10 - 5;
          const normalizedY = (y / rect.height) * 10 - 5;
          const shadowX = Math.max(Math.min(normalizedX, 5), -5) * -1;
          const shadowY = Math.max(Math.min(normalizedY, 5), -5) * -1;
          return { shadowX, shadowY };
        }
        return { shadowX: 0, shadowY: 0 };
      });

      setMousePos(newMousePos);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [refs]);

  return mousePos;
};

export default useMousePosition;
