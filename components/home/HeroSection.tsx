'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const HeroSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const handleScroll = () => {
    const element = document.getElementById('projects-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20"
    >
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Ultra-premium hero content */}

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold mb-6 md:mb-8 leading-[1.1] tracking-tighter px-4 md:px-0"
        >
          <span className="block text-white">
            We Build
          </span>
          <span className="block">
            <span className="text-gradient glow-text">Digital</span>{' '}
            <span className="text-white">Products</span>
          </span>
          <span className="block text-white/60 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-2 md:mt-4 font-normal">
            That People Love
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
          className="text-base sm:text-lg md:text-xl text-gray-400 mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed px-4 md:px-0"
        >
          Transforming ambitious visions into exceptional digital experiences.
          <br className="hidden sm:block" />
          <span className="text-white/80 font-medium">Strategy • Design • Development</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={handleScroll}
            className="group w-full sm:w-auto px-8 sm:px-10 py-4 bg-white text-black text-base sm:text-lg font-semibold rounded-full hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-2xl hover:shadow-white/20 flex items-center justify-center gap-2 min-h-[48px]"
          >
            <span>View Our Work</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
          <button className="w-full sm:w-auto px-8 sm:px-10 py-4 glass-effect text-white text-base sm:text-lg font-medium rounded-full hover:bg-white/10 transition-all hover:scale-105 active:scale-95 border border-white/20 min-h-[48px]">
            Get in Touch
          </button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-16 md:mt-20 flex flex-wrap justify-center items-center gap-8 md:gap-12 text-sm text-gray-500"
        >
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>Award-Winning Studio</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white font-semibold">100+</span>
            <span>Projects Delivered</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-white font-semibold">15+</span>
            <span>Countries Worldwide</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Optimized background - static instead of animated for better performance */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-white/5 to-transparent rounded-full blur-[100px] opacity-50" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-l from-white/5 to-transparent rounded-full blur-[100px] opacity-50" />
      </div>

      {/* Scroll indicator - simplified animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-px h-16 bg-gradient-to-b from-white/30 to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
