'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setSubmitStatus('success');
    setIsSubmitting(false);
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => {
      setSubmitStatus('idle');
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com' },
    { name: 'Twitter', url: 'https://twitter.com' },
    { name: 'LinkedIn', url: 'https://linkedin.com' },
    { name: 'Dribbble', url: 'https://dribbble.com' },
  ];

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-20 text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 md:mb-8 text-gradient">
            Let's Build What's Next.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            We collaborate with startups, brands, and creators to shape digital experiences that stand out.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-effect rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-white/90">Send us a message</h2>

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs md:text-sm font-medium text-gray-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-white/5 border border-white/10 rounded-lg text-sm md:text-base text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs md:text-sm font-medium text-gray-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-white/5 border border-white/10 rounded-lg text-sm md:text-base text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs md:text-sm font-medium text-gray-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-3 md:px-4 py-2.5 md:py-3 bg-white/5 border border-white/10 rounded-lg text-sm md:text-base text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors resize-none"
                    placeholder="Tell us about your project"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 md:px-8 py-3 md:py-4 bg-white text-black text-base md:text-lg font-medium rounded-full hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>

                {submitStatus === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-400 text-center"
                  >
                    Message sent successfully! We'll get back to you soon.
                  </motion.p>
                )}
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 md:space-y-8"
          >
            <div className="glass-effect rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-white/90">Get in touch</h3>
              <div className="space-y-3 md:space-y-4">
                <div>
                  <p className="text-gray-500 text-xs md:text-sm mb-1">Email</p>
                  <a
                    href="mailto:hello@burojx.com"
                    className="text-white/80 hover:text-white text-base md:text-lg transition-colors"
                  >
                    hello@burojx.com
                  </a>
                </div>
                <div>
                  <p className="text-gray-500 text-xs md:text-sm mb-1">Location</p>
                  <p className="text-white/80 text-base md:text-lg">Remote / Global</p>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-white/90">Follow us</h3>
              <div className="space-y-3 md:space-y-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4 }}
                    className="block text-white/60 hover:text-white text-base md:text-lg transition-colors"
                  >
                    {social.name}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="glass-effect rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12">
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-white/90">Office hours</h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                Monday - Friday: 9:00 AM - 6:00 PM EST<br />
                We typically respond within 24 hours
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[150px]" />
      </div>
    </div>
  );
}
