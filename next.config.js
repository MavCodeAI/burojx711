/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable dynamic rendering for Vercel
  output: undefined,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { 
    unoptimized: true,
    domains: ['github.com', 'vercel.com'],
  },
  // Performance optimizations
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  // Vercel optimizations
  poweredByHeader: false,
  compress: true,
  // Build optimizations
  generateEtags: false,
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
