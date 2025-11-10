'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What makes Burojx different from other agencies?',
      answer: 'We combine strategic thinking with technical excellence. Unlike typical agencies, we focus on measurable results—not just pretty designs. Our clients see an average 300% increase in conversions within 6 months. We use cutting-edge technologies and proven methodologies to deliver solutions that actually drive business growth.'
    },
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on scope and complexity. A standard website takes 4-6 weeks, while complex web applications can take 3-6 months. We work in agile sprints, delivering value incrementally so you see progress every week. Rush projects are available with our premium service tier.'
    },
    {
      question: 'What is your pricing structure?',
      answer: 'We offer flexible pricing models: fixed-price projects starting at $15K, monthly retainers from $5K, and hourly consulting at $200/hour. Every project includes strategy, design, development, testing, and 30 days of post-launch support. We provide detailed proposals with transparent pricing—no hidden fees.'
    },
    {
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Absolutely! All projects include 30 days of free support post-launch. After that, we offer maintenance packages starting at $500/month covering updates, security patches, performance monitoring, and priority support. We also provide training so your team can manage day-to-day content updates.'
    },
    {
      question: 'Can you work with our existing tech stack?',
      answer: 'Yes! We&apos;re technology-agnostic and work with various stacks including React, Next.js, Vue, Angular, Node.js, Python, and more. We can integrate with your existing systems, APIs, and databases. If needed, we&apos;ll recommend the best technology for your specific requirements and budget.'
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'We&apos;ve delivered successful projects across SaaS, e-commerce, fintech, healthcare, education, and enterprise sectors. Our diverse experience means we bring best practices from multiple industries to your project. Whether you&apos;re a startup or Fortune 500, we have the expertise to deliver exceptional results.'
    }
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-black via-black/95 to-black">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-effect-light rounded-full border border-white/10 mb-6">
            <span className="text-xs md:text-sm text-gray-300 font-medium uppercase tracking-wider">FAQ</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6 text-gradient leading-[1.1] tracking-tight">
            Got Questions? We&apos;ve Got Answers
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about working with us. Can&apos;t find what you&apos;re looking for? 
            <a href="/contact" className="text-white hover:text-gradient transition-colors ml-1">Get in touch</a>.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl border border-white/5 hover:border-white/10 transition-colors overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 md:px-8 py-6 flex items-start justify-between gap-4 text-left group"
              >
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-semibold text-white group-hover:text-gradient transition-colors">
                    {faq.question}
                  </h3>
                </div>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 w-6 h-6 flex items-center justify-center"
                >
                  <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-6 text-gray-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-6">Still have questions?</p>
          <a href="/contact">
            <button className="px-8 py-3 bg-white text-black text-sm font-semibold rounded-full hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-2">
              <span>Schedule a Free Consultation</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </a>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
};

export default FAQ;
