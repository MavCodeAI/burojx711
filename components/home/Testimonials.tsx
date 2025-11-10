'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: 'Ayesha Khan',
      role: 'CEO, TechVision Inc',
      company: 'Fortune 500 Company',
      image: 'AK',
      content: 'Working with Burojx was transformative for our business. They didn&apos;t just redesign our website—they reimagined our entire digital strategy. The team took time to understand our users, our goals, and our challenges. The result? A platform that not only looks stunning but actually converts. Our bounce rate dropped by 60%, and we saw a 340% increase in qualified leads within the first quarter. Their post-launch support has been exceptional too.',
      rating: 5,
      metric: '+340% Conversion'
    },
    {
      name: 'Hassan Ahmed',
      role: 'Founder, StartupHub',
      company: 'Y Combinator W23',
      image: 'HA',
      content: 'As a startup, we needed a partner who could move fast without compromising quality. Burojx delivered beyond our expectations. They built our entire platform in 6 weeks—something our previous agency quoted 4 months for. The performance optimization was incredible; our page load times went from 4.5s to under 1s. This directly impacted our user retention, which jumped from 35% to 78%. Best decision we made for our Series A pitch.',
      rating: 5,
      metric: '$50K+ Saved'
    },
    {
      name: 'Fatima Malik',
      role: 'Marketing Director, GrowthCo',
      company: 'Series B Startup',
      image: 'FM',
      content: 'I&apos;ve worked with over a dozen agencies in my career, and Burojx stands out. What impressed me most was their strategic thinking—they challenged our assumptions and pushed us to think bigger. The website they created isn&apos;t just beautiful; it&apos;s a conversion machine. Our cost per acquisition dropped by 45%, and our customer lifetime value increased by 2.3x. The ROI was evident within the first month, and it keeps getting better.',
      rating: 5,
      metric: '10x ROI'
    },
    {
      name: 'Ali Raza',
      role: 'CTO, CloudScale',
      company: 'Enterprise SaaS',
      image: 'AR',
      content: 'As a technical person, I&apos;m hard to impress. Burojx impressed me. Their code quality is production-grade—clean, well-documented, and following best practices. They implemented a complex authentication system, real-time data synchronization, and a custom admin dashboard, all while maintaining 99.9% uptime. Their DevOps expertise saved us months of work. They&apos;re not just designers or developers; they&apos;re true engineering partners.',
      rating: 5,
      metric: '99.9% Uptime'
    },
    {
      name: 'Zainab Hussain',
      role: 'VP of Product, FinTech Solutions',
      company: 'Series C Fintech',
      image: 'ZH',
      content: 'Security and compliance are critical in fintech, and Burojx handled it flawlessly. They implemented bank-level security, passed our rigorous security audits, and achieved SOC 2 compliance on the first try. But what really set them apart was their user experience design—they made complex financial workflows feel simple and intuitive. Our user satisfaction scores went from 3.2 to 4.8 stars. Worth every penny.',
      rating: 5,
      metric: 'SOC 2 Certified'
    },
    {
      name: 'Usman Tariq',
      role: 'Founder & CEO, EduLearn',
      company: 'EdTech Platform',
      image: 'UT',
      content: 'We needed a learning platform that could scale to millions of users. Burojx built us exactly that. They architected a system that handles 50,000+ concurrent users without breaking a sweat. The video streaming optimization they implemented reduced our CDN costs by 65%. More importantly, student engagement increased by 180% thanks to the intuitive interface. They turned our vision into reality and then some.',
      rating: 5,
      metric: '180% Engagement'
    },
    {
      name: 'Sana Iqbal',
      role: 'Creative Director, BrandCraft',
      company: 'Design Agency',
      image: 'SI',
      content: 'As a design agency ourselves, we have high standards. Burojx exceeded them. They took our brand guidelines and elevated them into a digital experience that feels premium and polished. The attention to micro-interactions, typography, and spacing is impeccable. Our clients constantly ask who built our site. The best part? They delivered on time and on budget, which is rare in this industry. Absolute professionals.',
      rating: 5,
      metric: '100% On-Time'
    },
    {
      name: 'Imran Shah',
      role: 'Operations Director, LogiFlow',
      company: 'Supply Chain Tech',
      image: 'IS',
      content: 'We had a legacy system that was holding us back. Burojx migrated us to a modern tech stack without any downtime—a feat our internal team said was impossible. They built custom integrations with our ERP, WMS, and TMS systems. The new dashboard gives us real-time visibility across our entire supply chain. Our operational efficiency improved by 40%, and we&apos;re processing 3x more orders with the same team size. Game-changing work.',
      rating: 5,
      metric: '+40% Efficiency'
    }
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-effect-light rounded-full border border-white/10 mb-6">
            <span className="text-xs md:text-sm text-gray-300 font-medium uppercase tracking-wider">Client Success</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 text-gradient leading-[1.1] tracking-tight">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our clients say about working with us.
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-effect rounded-3xl p-8 md:p-12 border border-white/10 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Avatar & Info */}
            <div className="flex items-start gap-4 lg:flex-col lg:items-center lg:text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-white to-gray-400 rounded-2xl flex items-center justify-center flex-shrink-0">
                <span className="text-black text-2xl font-bold">{testimonials[activeIndex].image}</span>
              </div>
              <div className="lg:mt-4">
                <h4 className="text-lg font-bold text-white mb-1">{testimonials[activeIndex].name}</h4>
                <p className="text-sm text-gray-400 mb-1">{testimonials[activeIndex].role}</p>
                <p className="text-xs text-gray-500">{testimonials[activeIndex].company}</p>
                <div className="flex gap-1 mt-3 lg:justify-center">
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="mb-6">
                <svg className="w-12 h-12 text-white/10 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-xl md:text-2xl text-white leading-relaxed mb-6">
                  {testimonials[activeIndex].content}
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 glass-effect-light rounded-lg border border-white/10">
                  <span className="text-sm font-bold text-gradient">{testimonials[activeIndex].metric}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`transition-all ${
                index === activeIndex
                  ? 'w-12 h-3 bg-gradient-to-r from-white to-gray-400'
                  : 'w-3 h-3 bg-white/20 hover:bg-white/40'
              } rounded-full`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '500+', label: 'Happy Clients' },
            { value: '98%', label: 'Satisfaction Rate' },
            { value: '4.9/5', label: 'Average Rating' },
            { value: '100%', label: 'Project Success' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-white/2 rounded-full blur-[120px]" />
      </div>
    </section>
  );
};

export default Testimonials;
