'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import HeroSection from '@/components/home/HeroSection';
import IntroSection from '@/components/home/IntroSection';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import Testimonials from '@/components/home/Testimonials';
import FAQ from '@/components/home/FAQ';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <div ref={containerRef} className="relative">
      <HeroSection />
      <IntroSection />
      <FeaturedProjects />
      <Testimonials />
      <FAQ />

      {/* Premium CTA Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 md:mb-8 text-gradient leading-[1.1] tracking-tight">
              Let&apos;s Create Something Extraordinary
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed">
              Partner with us to transform your vision into a digital masterpiece. 
              From strategy to execution, we&apos;re here to elevate your brand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <button className="px-10 md:px-12 py-3 md:py-4 bg-white text-black text-base md:text-lg font-medium rounded-full hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
                  Start Your Project
                </button>
              </Link>
              <Link href="/projects">
                <button className="px-10 md:px-12 py-3 md:py-4 glass-effect text-white text-base md:text-lg font-medium rounded-full hover:bg-white/10 transition-all hover:scale-105 active:scale-95">
                  View Our Work
                </button>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] opacity-50" />
        </div>
      </section>
    </div>
  );
}
