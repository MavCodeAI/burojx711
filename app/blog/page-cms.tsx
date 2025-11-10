'use client';

/**
 * CMS-Ready Blog Listing Page
 * This version uses the CMS abstraction layer
 * Easy to switch between local data and external CMS
 */

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Tag, Search } from 'lucide-react';
import { getAllPosts, getAllCategories, type BlogPost } from '@/lib/cms';

export default function BlogCMS() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<string[]>(['All']);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  // Load posts and categories
  useEffect(() => {
    async function loadData() {
      try {
        const [allPosts, allCategories] = await Promise.all([
          getAllPosts(),
          getAllCategories(),
        ]);
        
        setPosts(allPosts);
        setCategories(['All', ...allCategories]);
      } catch (error) {
        console.error('Error loading blog data:', error);
      } finally {
        setLoading(false);
      }
    }
    
    loadData();
  }, []);

  // Filter posts
  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const featuredPost = filteredPosts[0];
  const regularPosts = filteredPosts.slice(1);

  if (loading) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Loading blog posts...</p>
        </div>
      </div>
    );
  }

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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 md:mb-8 text-gradient leading-[1.1] tracking-tight">
            Our Blog
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Insights, tutorials, and stories about web development, design, and digital innovation.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto mb-8"
        >
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 md:py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
            />
          </div>
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

        {/* Results Count */}
        {searchQuery && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-400 mb-8"
          >
            Found {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
          </motion.p>
        )}

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <p className="text-xl text-gray-400 mb-4">No articles found</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-all"
            >
              Clear Filters
            </button>
          </motion.div>
        )}

        {/* Featured Post */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-12 md:mb-16"
          >
            <Link href={`/blog/${featuredPost.slug}`}>
              <div className="glass-effect rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 group hover:bg-white/5 transition-all cursor-pointer">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-white">
                    Featured
                  </span>
                  <span className="px-3 py-1 glass-effect rounded-full text-xs font-medium text-gray-400">
                    {featuredPost.category}
                  </span>
                </div>
                
                {/* Featured Image Placeholder */}
                <div className="w-full h-64 md:h-96 mb-6 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all">
                  <span className="text-6xl md:text-8xl font-bold text-white/20">
                    {featuredPost.title.charAt(0)}
                  </span>
                </div>

                <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white group-hover:text-gradient transition-all">
                  {featuredPost.title}
                </h2>
                <p className="text-base md:text-lg text-gray-400 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-2">
                    <Calendar size={16} />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock size={16} />
                    {featuredPost.readTime}
                  </span>
                  <span>By {featuredPost.author}</span>
                </div>

                <div className="mt-6 flex items-center gap-2 text-white group-hover:gap-4 transition-all">
                  <span className="font-medium">Read More</span>
                  <ArrowRight size={20} />
                </div>
              </div>
            </Link>
          </motion.div>
        )}

        {/* Blog Grid */}
        {regularPosts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {regularPosts.map((post, index) => (
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
        )}

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
