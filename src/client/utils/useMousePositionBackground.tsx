import { RefObject, useEffect, useState } from 'react';

type MousePosition = {
  background: string;
};

const useMousePositionBackground = (ref: RefObject<HTMLElement>) => {
  const [mousePos, setMousePos] = useState<MousePosition>({ background: 'transparent' });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        const normalizedX = (x / rect.width) * 100;
        const normalizedY = (y / rect.height) * 100;
        const background = `url(../../public/assets/backgroundPattern.png), radial-gradient(circle at ${normalizedX}% ${normalizedY}%, #f38507, #a30277)`;

        setMousePos({ background });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [ref]);

  return mousePos;
};

export default useMousePositionBackground;
