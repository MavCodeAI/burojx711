'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl md:text-8xl font-display font-bold text-gradient mb-6">
            500
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Something went wrong
          </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            We apologize for the inconvenience. Please try again later.
          </p>
          <button
            onClick={reset}
            className="px-8 py-3 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-200 transition-all hover:scale-105 active:scale-95"
          >
            Try again
          </button>
        </motion.div>
      </div>
    </div>
  );
}
