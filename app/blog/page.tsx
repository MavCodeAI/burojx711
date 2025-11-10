'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const blogPosts = [
    {
      id: 1,
      title: 'Building Modern Web Applications with Next.js 13',
      excerpt: 'Explore the latest features of Next.js 13 and learn how to build high-performance web applications with the new App Router.',
      author: 'Darwesh',
      date: 'November 5, 2024',
      readTime: '8 min read',
      category: 'Development',
      tags: ['Next.js', 'React', 'Web Development'],
      image: '/blog/nextjs.jpg', // Placeholder
      slug: 'building-modern-web-apps-nextjs-13'
    },
    {
      id: 2,
      title: 'The Art of UI/UX Design: Creating Intuitive Interfaces',
      excerpt: 'Discover the principles of great UI/UX design and how to create interfaces that users love. From wireframes to final designs.',
      author: 'Zubair Zair',
      date: 'November 1, 2024',
      readTime: '6 min read',
      category: 'Design',
      tags: ['UI/UX', 'Design', 'User Experience'],
      image: '/blog/uiux.jpg', // Placeholder
      slug: 'art-of-uiux-design'
    },
    {
      id: 3,
      title: 'Optimizing Web Performance: Tips and Best Practices',
      excerpt: 'Learn how to optimize your website for maximum performance. From image optimization to code splitting and lazy loading.',
      author: 'Darwesh',
      date: 'October 28, 2024',
      readTime: '10 min read',
      category: 'Performance',
      tags: ['Performance', 'Optimization', 'Web Development'],
      image: '/blog/performance.jpg', // Placeholder
      slug: 'optimizing-web-performance'
    },
    {
      id: 4,
      title: 'Design Systems: Building Consistent Brand Experiences',
      excerpt: 'How to create and maintain a design system that ensures consistency across all your digital products and platforms.',
      author: 'Zubair Zair',
      date: 'October 25, 2024',
      readTime: '7 min read',
      category: 'Design',
      tags: ['Design Systems', 'Branding', 'UI Components'],
      image: '/blog/design-systems.jpg', // Placeholder
      slug: 'design-systems-brand-consistency'
    },
    {
      id: 5,
      title: 'TypeScript Best Practices for Large-Scale Applications',
      excerpt: 'Essential TypeScript patterns and practices for building maintainable and scalable enterprise applications.',
      author: 'Darwesh',
      date: 'October 20, 2024',
      readTime: '9 min read',
      category: 'Development',
      tags: ['TypeScript', 'Best Practices', 'Enterprise'],
      image: '/blog/typescript.jpg', // Placeholder
      slug: 'typescript-best-practices'
    },
    {
      id: 6,
      title: 'Animation in Web Design: When and How to Use It',
      excerpt: 'A comprehensive guide to using animations effectively in web design without compromising performance or user experience.',
      author: 'Zubair Zair',
      date: 'October 15, 2024',
      readTime: '5 min read',
      category: 'Design',
      tags: ['Animation', 'Motion Design', 'Web Design'],
      image: '/blog/animation.jpg', // Placeholder
      slug: 'animation-in-web-design'
    },
    {
      id: 7,
      title: 'Mastering React Server Components in Next.js 14',
      excerpt: 'Deep dive into React Server Components and how they revolutionize data fetching, reduce bundle sizes, and improve performance.',
      author: 'Darwesh',
      date: 'October 10, 2024',
      readTime: '12 min read',
      category: 'Development',
      tags: ['React', 'Next.js', 'Server Components'],
      image: '/blog/rsc.jpg',
      slug: 'mastering-react-server-components'
    },
    {
      id: 8,
      title: 'Color Theory for Digital Designers: A Complete Guide',
      excerpt: 'Understanding color psychology, creating harmonious palettes, and applying color theory principles to create stunning digital experiences.',
      author: 'Zubair Zair',
      date: 'October 5, 2024',
      readTime: '8 min read',
      category: 'Design',
      tags: ['Color Theory', 'Design Principles', 'Visual Design'],
      image: '/blog/color-theory.jpg',
      slug: 'color-theory-digital-designers'
    },
    {
      id: 9,
      title: 'Building Scalable APIs with Node.js and Express',
      excerpt: 'Learn how to architect and build production-ready RESTful APIs with proper error handling, authentication, and rate limiting.',
      author: 'Darwesh',
      date: 'September 30, 2024',
      readTime: '11 min read',
      category: 'Development',
      tags: ['Node.js', 'API', 'Backend Development'],
      image: '/blog/nodejs-api.jpg',
      slug: 'building-scalable-apis-nodejs'
    },
    {
      id: 10,
      title: 'Responsive Design Patterns: Mobile-First Approach',
      excerpt: 'Master modern responsive design patterns and learn why mobile-first development is crucial for today\'s web applications.',
      author: 'Zubair Zair',
      date: 'September 25, 2024',
      readTime: '7 min read',
      category: 'Design',
      tags: ['Responsive Design', 'Mobile-First', 'CSS'],
      image: '/blog/responsive.jpg',
      slug: 'responsive-design-mobile-first'
    },
    {
      id: 11,
      title: 'State Management in React: Redux vs Zustand vs Context',
      excerpt: 'Compare popular state management solutions and learn when to use each one for optimal application architecture.',
      author: 'Darwesh',
      date: 'September 20, 2024',
      readTime: '10 min read',
      category: 'Development',
      tags: ['React', 'State Management', 'Redux', 'Zustand'],
      image: '/blog/state-management.jpg',
      slug: 'state-management-react-comparison'
    },
    {
      id: 12,
      title: 'Micro-interactions: The Secret to Delightful UX',
      excerpt: 'Explore how subtle animations and micro-interactions can dramatically improve user engagement and satisfaction.',
      author: 'Zubair Zair',
      date: 'September 15, 2024',
      readTime: '6 min read',
      category: 'Design',
      tags: ['Micro-interactions', 'UX', 'Animation'],
      image: '/blog/microinteractions.jpg',
      slug: 'microinteractions-delightful-ux'
    },
    {
      id: 13,
      title: 'GraphQL vs REST: Choosing the Right API Architecture',
      excerpt: 'An in-depth comparison of GraphQL and REST APIs, their pros and cons, and how to decide which one fits your project.',
      author: 'Darwesh',
      date: 'September 10, 2024',
      readTime: '9 min read',
      category: 'Development',
      tags: ['GraphQL', 'REST', 'API Design'],
      image: '/blog/graphql-rest.jpg',
      slug: 'graphql-vs-rest-api-architecture'
    },
    {
      id: 14,
      title: 'Typography in Web Design: Beyond Just Fonts',
      excerpt: 'Master the art of typography with advanced techniques for hierarchy, spacing, and creating readable, beautiful text layouts.',
      author: 'Zubair Zair',
      date: 'September 5, 2024',
      readTime: '8 min read',
      category: 'Design',
      tags: ['Typography', 'Web Design', 'Visual Hierarchy'],
      image: '/blog/typography.jpg',
      slug: 'typography-web-design-guide'
    },
    {
      id: 15,
      title: 'Docker and Kubernetes: Containerization for Modern Apps',
      excerpt: 'Learn how to containerize your applications with Docker and orchestrate them at scale using Kubernetes.',
      author: 'Darwesh',
      date: 'August 30, 2024',
      readTime: '13 min read',
      category: 'Development',
      tags: ['Docker', 'Kubernetes', 'DevOps'],
      image: '/blog/docker-k8s.jpg',
      slug: 'docker-kubernetes-containerization'
    },
    {
      id: 16,
      title: 'Accessibility First: Designing for Everyone',
      excerpt: 'Why accessibility matters and how to implement WCAG guidelines to create inclusive digital experiences for all users.',
      author: 'Zubair Zair',
      date: 'August 25, 2024',
      readTime: '7 min read',
      category: 'Design',
      tags: ['Accessibility', 'WCAG', 'Inclusive Design'],
      image: '/blog/accessibility.jpg',
      slug: 'accessibility-first-inclusive-design'
    },
    {
      id: 17,
      title: 'Serverless Architecture: Building with AWS Lambda',
      excerpt: 'Explore serverless computing and learn how to build cost-effective, scalable applications using AWS Lambda and API Gateway.',
      author: 'Darwesh',
      date: 'August 20, 2024',
      readTime: '11 min read',
      category: 'Development',
      tags: ['Serverless', 'AWS', 'Cloud Computing'],
      image: '/blog/serverless.jpg',
      slug: 'serverless-architecture-aws-lambda'
    },
    {
      id: 18,
      title: 'Dark Mode Design: Best Practices and Implementation',
      excerpt: 'Complete guide to designing and implementing dark mode that looks great and reduces eye strain for your users.',
      author: 'Zubair Zair',
      date: 'August 15, 2024',
      readTime: '6 min read',
      category: 'Design',
      tags: ['Dark Mode', 'UI Design', 'Theme Switching'],
      image: '/blog/dark-mode.jpg',
      slug: 'dark-mode-design-best-practices'
    }
  ];

  const categories = ['All', 'Development', 'Design', 'Performance'];
  
  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16 text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-display font-bold mb-6 md:mb-8 text-gradient leading-[1.1] tracking-tight">
            Our Blog
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Insights, tutorials, and stories about web development, design, and digital innovation.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12 md:mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all hover:scale-105 active:scale-95 ${
                category === selectedCategory
                  ? 'bg-white text-black'
                  : 'glass-effect text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12 md:mb-16"
        >
          <Link href={`/blog/${blogPosts[0].slug}`}>
            <div className="glass-effect rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 group hover:bg-white/5 transition-all cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-white">
                  Featured
                </span>
                <span className="px-3 py-1 glass-effect rounded-full text-xs font-medium text-gray-400">
                  {blogPosts[0].category}
                </span>
              </div>
              
              {/* Featured Image Placeholder */}
              <div className="w-full h-64 md:h-96 mb-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all">
                <span className="text-6xl md:text-8xl font-bold text-white/20">
                  {blogPosts[0].title.charAt(0)}
                </span>
              </div>

              <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white group-hover:text-gradient transition-all">
                {blogPosts[0].title}
              </h2>
              <p className="text-base md:text-lg text-gray-400 mb-6 leading-relaxed">
                {blogPosts[0].excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <Calendar size={16} />
                  {blogPosts[0].date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={16} />
                  {blogPosts[0].readTime}
                </span>
                <span>By {blogPosts[0].author}</span>
              </div>

              <div className="mt-6 flex items-center gap-2 text-white group-hover:gap-4 transition-all">
                <span className="font-medium">Read More</span>
                <ArrowRight size={20} />
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredPosts.slice(1).map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="glass-effect rounded-xl md:rounded-2xl p-5 md:p-6 h-full group hover:bg-white/5 transition-all cursor-pointer">
                  {/* Image Placeholder */}
                  <div className="w-full h-48 mb-4 rounded-lg bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all">
                    <span className="text-4xl font-bold text-white/20">
                      {post.title.charAt(0)}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 glass-effect rounded-full text-xs font-medium text-gray-400">
                      {post.category}
                    </span>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold mb-3 text-white group-hover:text-gradient transition-all line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-400 mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="flex items-center gap-1 text-xs text-gray-500"
                      >
                        <Tag size={12} />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 pt-4 border-t border-white/5">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 md:mt-20 glass-effect rounded-2xl md:rounded-3xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Stay Updated
          </h2>
          <p className="text-base md:text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest articles, tutorials, and insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
            />
            <button className="px-8 py-3 bg-white text-black font-medium rounded-lg hover:bg-gray-200 transition-all hover:scale-105 active:scale-95">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px]" />
      </div>
    </div>
  );
}
