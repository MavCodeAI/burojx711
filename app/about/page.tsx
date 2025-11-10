'use client';

import { motion } from 'framer-motion';

export default function About() {
  const stats = [
    { value: '100+', label: 'Projects Delivered' },
    { value: '50+', label: 'Happy Clients' },
    { value: '15+', label: 'Countries Served' },
  ];

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-20"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-display font-bold mb-6 md:mb-8 text-gradient leading-[1.1] tracking-tight">
            Where Vision Meets Execution
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 leading-relaxed max-w-4xl">
            We&apos;re a collective of award-winning designers, developers, and strategists who transform ambitious ideas into exceptional digital experiences. Every project is an opportunity to push boundaries and redefine what&apos;s possible.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-effect rounded-2xl md:rounded-3xl p-6 md:p-12 mb-12 md:mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 md:mb-6 text-white/90">Our Philosophy</h2>
          <p className="text-base md:text-xl text-gray-400 leading-relaxed">
            Excellence isn&apos;t just a goal—it&apos;s our standard. We combine strategic thinking, technical mastery, and creative innovation to deliver digital products that don&apos;t just meet expectations, they exceed them. Every pixel, every interaction, every line of code is crafted with intention.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="glass-effect rounded-xl md:rounded-2xl p-6 md:p-8 text-center"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2 text-gradient">{stat.value}</div>
              <div className="text-gray-400 text-base md:text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-12"
        >
          <div>
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 md:mb-6 text-white/90">Our Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {[
                {
                  title: 'Premium Web Development',
                  description: 'Enterprise-grade applications built with cutting-edge technologies. Scalable, secure, and lightning-fast.',
                },
                {
                  title: 'Brand & Digital Strategy',
                  description: 'Strategic consulting to position your brand for digital success. From concept to execution.',
                },
                {
                  title: 'UI/UX Excellence',
                  description: 'Award-winning interfaces that blend stunning aesthetics with intuitive user experiences.',
                },
                {
                  title: 'Performance Engineering',
                  description: 'Obsessive optimization for speed, accessibility, and flawless cross-platform experiences.',
                },
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="glass-effect rounded-xl md:rounded-2xl p-6 md:p-8"
                >
                  <h4 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-white/90">{service.title}</h4>
                  <p className="text-sm md:text-base text-gray-400 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 md:mb-6 text-white/90">Why Choose Burojx</h3>
            <div className="glass-effect rounded-2xl md:rounded-3xl p-6 md:p-12">
              <p className="text-base md:text-xl text-gray-400 leading-relaxed mb-4 md:mb-6">
                We&apos;re not just another agency. We&apos;re your strategic partner in digital transformation. Our team brings together decades of combined experience, working with startups to Fortune 500 companies, delivering solutions that drive real business results.
              </p>
              <p className="text-base md:text-xl text-gray-400 leading-relaxed">
                From initial strategy to final deployment and beyond, we&apos;re committed to your success. We don&apos;t just deliver projects—we build lasting partnerships and create digital experiences that stand the test of time.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px]" />
      </div>
    </div>
  );
}
