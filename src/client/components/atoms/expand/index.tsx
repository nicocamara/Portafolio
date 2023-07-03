import { ReactNode, useLayoutEffect, useRef, useState } from 'react';
import './style.scss';

type ExpandMenuProps = {
  isOpen: boolean;
  children: ReactNode;
};

const TransitionTime = 300;

const ExpandMenu = ({ isOpen, children }: ExpandMenuProps) => {
  const [containerHeight, setContainerHeight] = useState<number>();
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const height = containerRef.current?.scrollHeight;
    if (height) {
      setContainerHeight(height);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="expand"
      style={{
        maxHeight: isOpen ? containerHeight : 0,
        transition: `max-height ${TransitionTime}ms ease-in-out`,
      }}
    >
      {children}
    </div>
  );
};

export default ExpandMenu;
