'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Share2, Tag, User } from 'lucide-react';
import { useParams } from 'next/navigation';

// Temporary inline data - in production, this would come from a CMS or API
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
    slug: 'building-modern-web-apps-nextjs-13',
    content: `
# Building Modern Web Applications with Next.js 13

Next.js 13 represents a significant leap forward in React-based web development. With the introduction of the App Router, React Server Components, and improved performance optimizations, building modern web applications has never been more efficient.

## The New App Router

The App Router is built on top of React Server Components and introduces a new paradigm for routing in Next.js applications. Unlike the traditional Pages Router, the App Router provides:

- **Nested Layouts**: Create reusable layouts that persist across route changes
- **Server Components by Default**: Reduce JavaScript bundle sizes automatically
- **Streaming**: Progressively render UI from the server
- **Improved Data Fetching**: Simplified patterns with async/await

## Getting Started

To create a new Next.js 13 project with the App Router:

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

## Server Components vs Client Components

One of the most important concepts in Next.js 13 is understanding when to use Server Components versus Client Components.

### Server Components (Default)
- Fetch data on the server
- Access backend resources directly
- Keep sensitive information secure
- Reduce client-side JavaScript

### Client Components
- Add interactivity with event listeners
- Use React hooks (useState, useEffect, etc.)
- Access browser-only APIs
- Use custom hooks

## Data Fetching Patterns

Next.js 13 simplifies data fetching with native async/await support:

\`\`\`typescript
async function getData() {
  const res = await fetch('https://api.example.com/data')
  return res.json()
}

export default async function Page() {
  const data = await getData()
  return <main>{/* Your UI */}</main>
}
\`\`\`

## Performance Optimizations

Next.js 13 includes several performance improvements:

1. **Automatic Image Optimization**: The Image component now includes better defaults
2. **Font Optimization**: Automatic font subsetting and preloading
3. **Improved Code Splitting**: Smaller bundles with better tree-shaking
4. **Turbopack**: The new Rust-based bundler (in beta)

## Best Practices

- Use Server Components by default
- Only mark components as 'use client' when necessary
- Leverage parallel and sequential data fetching
- Implement proper error boundaries
- Use loading.tsx for better UX

## Conclusion

Next.js 13 with the App Router provides a powerful foundation for building modern web applications. By understanding and leveraging these new features, you can create faster, more efficient applications that provide excellent user experiences.

Start experimenting with Next.js 13 today and see how it can transform your development workflow!
    `
  },
  {
    id: 2,
    title: 'The Art of UI/UX Design: Creating Intuitive Interfaces',
    excerpt: 'Discover the principles of great UI/UX design and how to create interfaces that users love.',
    author: 'Zubair Zair',
    date: 'November 1, 2024',
    readTime: '6 min read',
    category: 'Design',
    tags: ['UI/UX', 'Design', 'User Experience'],
    slug: 'art-of-uiux-design',
    content: `
# The Art of UI/UX Design: Creating Intuitive Interfaces

Great design is invisible. When users interact with a well-designed interface, they don't think about the design—they simply accomplish their goals effortlessly. This is the essence of exceptional UI/UX design.

## Understanding the Fundamentals

### User Interface (UI) Design
UI design focuses on the visual elements users interact with:
- Layout and composition
- Color schemes and typography
- Interactive elements and animations
- Visual hierarchy and spacing

### User Experience (UX) Design
UX design encompasses the entire user journey:
- User research and personas
- Information architecture
- User flows and wireframes
- Usability testing and iteration

## Key Principles of Great UI/UX

### 1. Clarity Over Cleverness
Your interface should be immediately understandable. Avoid clever tricks that confuse users. Clear, straightforward design always wins.

### 2. Consistency is King
Maintain consistent patterns throughout your application:
- Button styles and behaviors
- Navigation patterns
- Color usage and meaning
- Typography hierarchy

### 3. Feedback and Response
Users need to know their actions have been registered:
- Loading states for async operations
- Success/error messages
- Hover and active states
- Progress indicators

### 4. Accessibility First
Design for everyone:
- Proper color contrast ratios
- Keyboard navigation support
- Screen reader compatibility
- Clear focus indicators

## The Design Process

### 1. Research Phase
- Understand your users
- Analyze competitors
- Define user personas
- Map user journeys

### 2. Ideation Phase
- Sketch initial concepts
- Create low-fidelity wireframes
- Explore multiple solutions
- Gather team feedback

### 3. Design Phase
- Create high-fidelity mockups
- Establish design system
- Design interactive prototypes
- Conduct usability testing

### 4. Implementation Phase
- Collaborate with developers
- Ensure design consistency
- Test on real devices
- Iterate based on feedback

## Common UI/UX Mistakes to Avoid

1. **Too Many Options**: Paradox of choice overwhelms users
2. **Inconsistent Patterns**: Confuses and frustrates users
3. **Poor Mobile Experience**: Mobile-first is no longer optional
4. **Ignoring Loading States**: Users need feedback during waits
5. **Complex Navigation**: Keep it simple and predictable

## Tools of the Trade

- **Figma**: Collaborative design and prototyping
- **Adobe XD**: UI/UX design and prototyping
- **Sketch**: Vector-based design tool
- **Framer**: Interactive prototyping
- **Maze**: User testing platform

## Measuring Success

Track these metrics to evaluate your design:
- Task completion rate
- Time on task
- Error rate
- User satisfaction scores
- Net Promoter Score (NPS)

## Conclusion

Great UI/UX design is a continuous journey of learning, testing, and iterating. By focusing on user needs, maintaining consistency, and following established principles, you can create interfaces that users love and return to again and again.

Remember: Design is not just how it looks—it's how it works.
    `
  },
  {
    id: 3,
    title: 'Optimizing Web Performance: Tips and Best Practices',
    excerpt: 'Learn how to optimize your website for maximum performance.',
    author: 'Darwesh',
    date: 'October 28, 2024',
    readTime: '10 min read',
    category: 'Performance',
    tags: ['Performance', 'Optimization', 'Web Development'],
    slug: 'optimizing-web-performance',
    content: `
# Optimizing Web Performance: Tips and Best Practices

In today's fast-paced digital world, website performance is crucial. Users expect pages to load in under 3 seconds, and every second of delay can significantly impact conversion rates and user satisfaction.

## Why Performance Matters

- **User Experience**: Faster sites provide better UX
- **SEO Rankings**: Google considers page speed in rankings
- **Conversion Rates**: 1 second delay = 7% reduction in conversions
- **Mobile Users**: Critical for users on slower connections

## Core Web Vitals

Google's Core Web Vitals are essential metrics:

### 1. Largest Contentful Paint (LCP)
Measures loading performance. Should occur within 2.5 seconds.

**Optimization strategies:**
- Optimize images and videos
- Implement lazy loading
- Use CDN for static assets
- Minimize CSS and JavaScript

### 2. First Input Delay (FID)
Measures interactivity. Should be less than 100ms.

**Optimization strategies:**
- Minimize JavaScript execution
- Break up long tasks
- Use web workers for heavy computations
- Implement code splitting

### 3. Cumulative Layout Shift (CLS)
Measures visual stability. Should be less than 0.1.

**Optimization strategies:**
- Set size attributes on images and videos
- Avoid inserting content above existing content
- Use CSS transforms instead of layout-triggering properties

## Image Optimization

Images often account for most of a page's weight.

### Best Practices:
1. **Use modern formats**: WebP, AVIF for better compression
2. **Implement lazy loading**: Load images as needed
3. **Responsive images**: Serve appropriate sizes
4. **Compress images**: Use tools like ImageOptim, Squoosh
5. **Use CDN**: Serve from edge locations

\`\`\`html
<img 
  src="image.webp" 
  alt="Description"
  loading="lazy"
  width="800"
  height="600"
/>
\`\`\`

## JavaScript Optimization

### Code Splitting
Split your code into smaller chunks:

\`\`\`javascript
// Dynamic imports
const module = await import('./heavy-module.js')

// React lazy loading
const HeavyComponent = lazy(() => import('./HeavyComponent'))
\`\`\`

### Tree Shaking
Remove unused code from your bundle:
- Use ES6 modules
- Configure webpack properly
- Analyze bundle with tools like webpack-bundle-analyzer

### Minification
Reduce file sizes by removing unnecessary characters:
- Use Terser for JavaScript
- Use cssnano for CSS
- Enable compression on your server

## CSS Optimization

1. **Critical CSS**: Inline above-the-fold CSS
2. **Remove unused CSS**: Use PurgeCSS or similar tools
3. **Minimize CSS**: Remove whitespace and comments
4. **Avoid @import**: Use link tags instead
5. **Use CSS containment**: Limit style recalculation

## Caching Strategies

### Browser Caching
Set appropriate cache headers:

\`\`\`
Cache-Control: public, max-age=31536000, immutable
\`\`\`

### Service Workers
Implement offline functionality and caching:

\`\`\`javascript
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  )
})
\`\`\`

## Network Optimization

1. **HTTP/2 or HTTP/3**: Enable on your server
2. **Compression**: Enable Gzip or Brotli
3. **CDN**: Use Content Delivery Networks
4. **Reduce Requests**: Combine files when possible
5. **DNS Prefetch**: Resolve domains early

\`\`\`html
<link rel="dns-prefetch" href="//api.example.com">
<link rel="preconnect" href="//cdn.example.com">
\`\`\`

## Performance Monitoring

### Tools:
- **Lighthouse**: Comprehensive audits
- **WebPageTest**: Detailed performance analysis
- **Chrome DevTools**: Real-time debugging
- **GTmetrix**: Performance reports
- **New Relic**: Application monitoring

### Key Metrics to Track:
- Time to First Byte (TTFB)
- First Contentful Paint (FCP)
- Speed Index
- Time to Interactive (TTI)
- Total Blocking Time (TBT)

## Performance Budget

Set and maintain performance budgets:

\`\`\`json
{
  "budget": [
    {
      "resourceSizes": [
        { "resourceType": "script", "budget": 300 },
        { "resourceType": "image", "budget": 500 },
        { "resourceType": "total", "budget": 1000 }
      ]
    }
  ]
}
\`\`\`

## Conclusion

Web performance optimization is an ongoing process. Regularly audit your site, set performance budgets, and continuously monitor metrics. Remember: every millisecond counts!

Start with the biggest impact items (images, JavaScript) and work your way through the optimizations. Your users—and your business—will thank you.
    `
  }
];

// Add more blog posts with full content...
// For brevity, I'll add a few more key ones

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Post Not Found</h1>
          <p className="text-gray-400 mb-8">The blog post you&apos;re looking for doesn&apos;t exist.</p>
          <Link href="/blog" className="px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-all inline-block">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-20">
      <article className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Blog</span>
          </Link>
        </motion.div>

        {/* Article Header */}
        <motion.header
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 md:mb-12"
        >
          {/* Category Badge */}
          <div className="flex items-center gap-2 mb-4">
            <span className="px-4 py-1.5 bg-white/10 rounded-full text-sm font-medium text-white">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-white leading-[1.1] tracking-tight">
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 md:gap-6 text-sm md:text-base text-gray-400 mb-6">
            <div className="flex items-center gap-2">
              <User size={18} />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={18} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1.5 px-3 py-1.5 glass-effect rounded-lg text-sm text-gray-400 border border-white/10"
              >
                <Tag size={14} />
                {tag}
              </span>
            ))}
          </div>

          {/* Share Button */}
          <button className="flex items-center gap-2 px-4 py-2 glass-effect rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all border border-white/10">
            <Share2 size={18} />
            <span className="text-sm font-medium">Share Article</span>
          </button>
        </motion.header>

        {/* Featured Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full h-64 md:h-96 mb-12 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/10"
        >
          <span className="text-6xl md:text-8xl font-bold text-white/20">
            {post.title.charAt(0)}
          </span>
        </motion.div>

        {/* Article Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="prose prose-invert prose-lg max-w-none mb-12"
        >
          <div 
            className="article-content text-gray-300 leading-relaxed"
            dangerouslySetInnerHTML={{ 
              __html: post.content
                .split('\n')
                .map(line => {
                  // Convert markdown-style headers
                  if (line.startsWith('# ')) {
                    return `<h1 class="text-3xl md:text-4xl font-bold text-white mb-6 mt-12">${line.slice(2)}</h1>`;
                  }
                  if (line.startsWith('## ')) {
                    return `<h2 class="text-2xl md:text-3xl font-bold text-white mb-4 mt-8">${line.slice(3)}</h2>`;
                  }
                  if (line.startsWith('### ')) {
                    return `<h3 class="text-xl md:text-2xl font-bold text-white mb-3 mt-6">${line.slice(4)}</h3>`;
                  }
                  // Convert code blocks
                  if (line.startsWith('```')) {
                    return '<pre class="bg-white/5 border border-white/10 rounded-lg p-4 my-4 overflow-x-auto"><code class="text-sm text-gray-300">';
                  }
                  if (line === '```') {
                    return '</code></pre>';
                  }
                  // Convert lists
                  if (line.startsWith('- ')) {
                    return `<li class="mb-2">${line.slice(2)}</li>`;
                  }
                  if (line.match(/^\d+\. /)) {
                    return `<li class="mb-2">${line.replace(/^\d+\. /, '')}</li>`;
                  }
                  // Regular paragraphs
                  if (line.trim()) {
                    return `<p class="mb-4">${line}</p>`;
                  }
                  return '';
                })
                .join('\n')
            }}
          />
        </motion.div>

        {/* Author Bio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-effect rounded-2xl p-6 md:p-8 mb-12"
        >
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center flex-shrink-0">
              <span className="text-2xl md:text-3xl font-bold text-white">
                {post.author.charAt(0)}
              </span>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                {post.author}
              </h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                {post.author === 'Darwesh' 
                  ? 'Full-stack developer and technical writer passionate about building scalable web applications and sharing knowledge with the community.'
                  : 'UI/UX designer focused on creating beautiful, intuitive interfaces that users love. Advocate for accessible and inclusive design.'}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Related Posts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts
              .filter(p => p.id !== post.id && p.category === post.category)
              .slice(0, 2)
              .map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                  <div className="glass-effect rounded-xl p-5 hover:bg-white/5 transition-all cursor-pointer group">
                    <div className="w-full h-40 mb-4 rounded-lg bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all">
                      <span className="text-3xl font-bold text-white/20">
                        {relatedPost.title.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white group-hover:text-gradient transition-all mb-2 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-gray-400 line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </motion.div>
      </article>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px]" />
      </div>
    </div>
  );
}
