// Optimized animation variants for better performance
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' }
};

export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.4 }
};

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Reduced motion for accessibility and performance
export const getReducedMotion = () => {
  if (typeof window !== 'undefined') {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
  return false;
};

// Optimized transition settings
export const transition = {
  fast: { duration: 0.2, ease: 'easeOut' },
  normal: { duration: 0.4, ease: 'easeOut' },
  slow: { duration: 0.6, ease: 'easeOut' }
};
