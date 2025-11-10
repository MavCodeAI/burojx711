'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Newsletter from '@/components/ui/Newsletter';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      name: 'GitHub', 
      url: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      )
    },
    { 
      name: 'Twitter', 
      url: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      )
    },
    { 
      name: 'LinkedIn', 
      url: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      )
    },
    { 
      name: 'Dribbble', 
      url: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd" />
        </svg>
      )
    },
  ];

  const services = [
    'Web Development',
    'UI/UX Design',
    'Brand Strategy',
    'Digital Marketing'
  ];

  return (
    <footer className="relative border-t border-white/10 bg-gradient-to-b from-black to-black/95">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-20">
        {/* Newsletter Section */}
        <div className="mb-16 md:mb-20">
          <Newsletter />
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 mb-12 md:mb-16">
          {/* Brand section */}
          <div className="lg:col-span-5 sm:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-white to-gray-400 rounded-lg flex items-center justify-center">
                <span className="text-black text-lg font-bold">B</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white">Burojx</h3>
            </div>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 max-w-md">
              Transforming ambitious visions into exceptional digital experiences. We craft premium web solutions that drive real business results.
            </p>
            
            {/* Social links with icons */}
            <div className="flex gap-3 md:gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 md:w-10 md:h-10 glass-effect rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all hover:scale-110 border border-white/5 hover:border-white/20 active:scale-95"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold mb-6 text-white uppercase tracking-wider">
              Navigation
            </h4>
            <div className="flex flex-col gap-3">
              {['Home', 'About', 'Projects', 'Team', 'Blog', 'Contact'].map((item) => (
                <Link
                  key={item}
                  href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-white text-sm transition-colors group flex items-center gap-2"
                >
                  <span className="w-0 group-hover:w-4 h-px bg-gradient-to-r from-white to-transparent transition-all duration-300" />
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold mb-6 text-white uppercase tracking-wider">
              Services
            </h4>
            <div className="flex flex-col gap-3">
              {services.map((service) => (
                <span
                  key={service}
                  className="text-gray-400 text-sm"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold mb-6 text-white uppercase tracking-wider">
              Start a Project
            </h4>
            <p className="text-gray-400 text-sm mb-6">
              Ready to bring your vision to life? Let&apos;s create something extraordinary together.
            </p>
            <Link href="/contact">
              <button className="w-full px-6 py-3 bg-white text-black text-sm font-semibold rounded-lg hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
                <span>Get in Touch</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-gray-500 text-sm">
              © {currentYear} Burojx. All rights reserved. Crafted with precision.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link href="#" className="text-gray-500 hover:text-gray-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-500 hover:text-gray-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-white/2 rounded-full blur-[120px]" />
      </div>
    </footer>
  );
};

export default Footer;
