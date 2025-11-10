'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl md:text-8xl font-display font-bold text-gradient mb-6">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link href="/">
            <button className="px-8 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-200 transition-all hover:scale-105 active:scale-95">
              Back to Home
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
