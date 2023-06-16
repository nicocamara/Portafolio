import { ReactNode, useEffect, useLayoutEffect, useRef, useState } from 'react';
import './style.scss';

type CollapseProps = {
  isOpen: boolean;
  children: ReactNode;
  onClose?: () => void;
};

const TRANSITION_DURATION_IN_MILLISECONDS = 300;

const Collapse = ({ isOpen, children, onClose }: CollapseProps) => {
  const [containerHeight, setContainerHeight] = useState<number>();
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const height = containerRef.current?.scrollHeight;
    if (height) {
      setContainerHeight(height);
    }
  }, []);

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        onClose?.();
      }, TRANSITION_DURATION_IN_MILLISECONDS);
    }
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className="collapse"
      style={{
        maxHeight: isOpen ? containerHeight : 0,
        transition: `max-height ${TRANSITION_DURATION_IN_MILLISECONDS}ms ease-in-out`,
      }}
    >
      {children}
    </div>
  );
};

export default Collapse;
