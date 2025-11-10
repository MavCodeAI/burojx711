'use client';

import { motion } from 'framer-motion';

const IntroSection = () => {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-black via-black/95 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium heading with badge */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-effect-light rounded-full border border-white/10 mb-6">
            <span className="text-xs md:text-sm text-gray-300 font-medium uppercase tracking-wider">Our Approach</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 leading-[1.1] tracking-tight">
            <span className="block text-white">We Don&apos;t Just Build</span>
            <span className="block text-gradient">We Create Experiences</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Every project is a partnership. We combine strategic thinking, technical excellence, 
            and creative innovation to deliver solutions that drive real results.
          </p>
        </motion.div>

        {/* Premium feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              icon: (
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
              title: 'Performance First',
              description: 'Lightning-fast load times, optimized code, and seamless interactions across all devices.',
              metric: '< 2s',
              metricLabel: 'Load Time'
            },
            {
              icon: (
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              ),
              title: 'Design Excellence',
              description: 'Award-winning interfaces that blend stunning aesthetics with intuitive user experiences.',
              metric: '100%',
              metricLabel: 'Pixel Perfect'
            },
            {
              icon: (
                <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              ),
              title: 'Future-Ready',
              description: 'Cutting-edge technologies and scalable architectures built to grow with your business.',
              metric: '10x',
              metricLabel: 'Scalability'
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="glass-effect rounded-2xl p-8 h-full border border-white/5 hover:border-white/10 transition-all hover:scale-105">
                {/* Icon & Metric */}
                <div className="flex items-start justify-between mb-6">
                  <div className="text-white/80 group-hover:text-gradient transition-colors">{item.icon}</div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gradient">{item.metric}</div>
                    <div className="text-xs text-gray-500 uppercase tracking-wider">{item.metricLabel}</div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-display font-bold mb-3 text-white group-hover:text-gradient transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                  {item.description}
                </p>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20 glass-effect-light rounded-2xl p-8 border border-white/10"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '98%', label: 'Client Satisfaction' },
              { value: '150+', label: 'Projects Completed' },
              { value: '24/7', label: 'Support Available' },
              { value: '5★', label: 'Average Rating' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default IntroSection;
