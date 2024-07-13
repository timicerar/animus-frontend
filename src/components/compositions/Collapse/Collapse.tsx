import { motion, useAnimationControls } from 'framer-motion';
import { PropsWithChildren, useEffect, useRef } from 'react';

type CollapseProps = {
  show: boolean;
  duration?: number;
  className?: string;
} & PropsWithChildren;

const Collapse = ({
  show,
  duration = 0.3,
  className,
  children,
}: CollapseProps) => {
  const controls = useAnimationControls();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (show) {
      controls?.start({ height: ref?.current?.scrollHeight });
    } else {
      controls?.start({ height: 0 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [show]);

  return (
    <motion.div
      className={className}
      ref={ref}
      initial={{ height: 0 }}
      animate={controls}
      transition={{ duration }}
      onAnimationComplete={() => show && controls?.set({ height: 'auto' })}
      style={{ overflow: 'hidden' }}
    >
      {children}
    </motion.div>
  );
};

export default Collapse;
