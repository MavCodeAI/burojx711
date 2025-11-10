'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setScrolled(latest > 50);
    });
  }, [scrollY]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Team', path: '/team' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
          scrolled
            ? 'bg-black/90 backdrop-blur-xl border-b border-white/5 shadow-lg'
            : 'bg-black/20 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Premium Logo */}
            <Link href="/" onClick={handleNavClick}>
              <div className="relative z-50 group">
                <div className="text-2xl font-display font-bold tracking-tight flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-white to-gray-400 rounded-lg flex items-center justify-center">
                    <span className="text-black text-sm font-bold">B</span>
                  </div>
                  <span className="text-white group-hover:text-gradient transition-all">Burojx</span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation - Premium */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <div className={`relative px-4 py-2 rounded-lg transition-all ${
                    pathname === item.path 
                      ? 'bg-white/10' 
                      : 'hover:bg-white/5'
                  }`}>
                    <span
                      className={`text-sm font-medium transition-colors ${
                        pathname === item.path
                          ? 'text-white'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {item.name}
                    </span>
                  </div>
                </Link>
              ))}
            </nav>

            {/* Premium CTA Button */}
            <div className="hidden md:flex items-center gap-3">
              <Link href="/contact">
                <button className="px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-gray-100 transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center gap-2">
                  <span>Let&apos;s Talk</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden relative z-50 p-2 text-white active:scale-95 transition-transform"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[90] md:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/95 backdrop-blur-xl"
              onClick={() => setMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="absolute right-0 top-0 h-full w-full sm:w-80 bg-black/90 backdrop-blur-xl border-l border-white/10"
            >
              <div className="flex flex-col h-full pt-32 px-8">
                <nav className="flex flex-col gap-8">
                  {navItems.map((item, index) => (
                    <Link key={item.path} href={item.path} onClick={handleNavClick}>
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                        className="relative group"
                      >
                        <span
                          className={`text-3xl font-bold transition-colors ${
                            pathname === item.path
                              ? 'text-gradient'
                              : 'text-gray-400 hover:text-white'
                          }`}
                        >
                          {item.name}
                        </span>
                        {pathname === item.path && (
                          <motion.div
                            layoutId="activeMobileNav"
                            className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full"
                          />
                        )}
                      </motion.div>
                    </Link>
                  ))}
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className="mt-12"
                >
                  <Link href="/contact" onClick={handleNavClick}>
                    <button className="w-full px-8 py-4 bg-white text-black text-lg font-medium rounded-full hover:bg-gray-200 transition-colors">
                      Get in Touch
                    </button>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  className="mt-auto mb-8 text-center text-gray-500 text-sm"
                >
                  <p>© 2024 Burojx</p>
                  <p className="mt-2">Crafted with purpose</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
