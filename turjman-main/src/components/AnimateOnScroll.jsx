import { motion, useReducedMotion } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  once = true,
  amount = 0.2,
  as = 'div',
}) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as] ?? motion.div;

  const offsets = {
    up: { y: 28 },
    down: { y: -28 },
    left: { x: -28 },
    right: { x: 28 },
    none: {},
  };

  const offset = reduceMotion ? {} : offsets[direction] ?? offsets.up;

  return (
    <Component
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: reduceMotion ? 0 : duration, delay: reduceMotion ? 0 : delay, ease }}
    >
      {children}
    </Component>
  );
}

export function FadeInOnLoad({
  children,
  className,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  as = 'div',
}) {
  const reduceMotion = useReducedMotion();
  const Component = motion[as] ?? motion.div;

  const offsets = {
    up: { y: 24 },
    down: { y: -24 },
    left: { x: -24 },
    right: { x: 24 },
    none: {},
  };

  const offset = reduceMotion ? {} : offsets[direction] ?? offsets.up;

  return (
    <Component
      className={className}
      initial={{ opacity: 0, ...offset }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: reduceMotion ? 0 : duration, delay: reduceMotion ? 0 : delay, ease }}
    >
      {children}
    </Component>
  );
}

export function StaggerContainer({ children, className, stagger = 0.12, delay = 0, amount = 0.15 }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: reduceMotion ? 0 : stagger,
            delayChildren: reduceMotion ? 0 : delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className, direction = 'up' }) {
  const reduceMotion = useReducedMotion();

  const offsets = {
    up: { y: 24 },
    down: { y: -24 },
    left: { x: -24 },
    right: { x: 24 },
    none: {},
  };

  const offset = reduceMotion ? {} : offsets[direction] ?? offsets.up;

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, ...offset },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 0.55, ease },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function Float({ children, className }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}
