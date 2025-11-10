// Centralized blog data - CMS Ready
export interface Author {
  name: string;
  bio: string;
  avatar?: string;
  role: string;
  social?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image?: string;
  slug: string;
  content: string;
  featured?: boolean;
  published?: boolean;
  views?: number;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
  };
}

// Authors database
export const authors: Record<string, Author> = {
  'Darwesh': {
    name: 'Darwesh',
    role: 'Full-Stack Developer',
    bio: 'Full-stack developer and technical writer passionate about building scalable web applications and sharing knowledge with the community. Specialized in React, Next.js, and Node.js.',
    social: {
      github: 'https://github.com/darwesh',
      linkedin: 'https://linkedin.com/in/darwesh',
      twitter: 'https://twitter.com/darwesh'
    }
  },
  'Zubair Zair': {
    name: 'Zubair Zair',
    role: 'UI/UX Designer',
    bio: 'UI/UX designer focused on creating beautiful, intuitive interfaces that users love. Advocate for accessible and inclusive design with 5+ years of experience.',
    social: {
      linkedin: 'https://linkedin.com/in/zubair',
      twitter: 'https://twitter.com/zubair'
    }
  }
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Building Modern Web Applications with Next.js 13',
    excerpt: 'Explore the latest features of Next.js 13 and learn how to build high-performance web applications with the new App Router.',
    author: 'Darwesh',
    date: 'November 5, 2024',
    readTime: '8 min read',
    category: 'Development',
    tags: ['Next.js', 'React', 'Web Development'],
    image: '/blog/nextjs.jpg',
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
    excerpt: 'Discover the principles of great UI/UX design and how to create interfaces that users love. From wireframes to final designs.',
    author: 'Zubair Zair',
    date: 'November 1, 2024',
    readTime: '6 min read',
    category: 'Design',
    tags: ['UI/UX', 'Design', 'User Experience'],
    image: '/blog/uiux.jpg',
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
    excerpt: 'Learn how to optimize your website for maximum performance. From image optimization to code splitting and lazy loading.',
    author: 'Darwesh',
    date: 'October 28, 2024',
    readTime: '10 min read',
    category: 'Performance',
    tags: ['Performance', 'Optimization', 'Web Development'],
    image: '/blog/performance.jpg',
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

## JavaScript Optimization

### Code Splitting
Split your code into smaller chunks for faster initial loads.

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
Set appropriate cache headers for static assets.

### Service Workers
Implement offline functionality and intelligent caching strategies.

## Network Optimization

1. **HTTP/2 or HTTP/3**: Enable on your server
2. **Compression**: Enable Gzip or Brotli
3. **CDN**: Use Content Delivery Networks
4. **Reduce Requests**: Combine files when possible
5. **DNS Prefetch**: Resolve domains early

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

## Conclusion

Web performance optimization is an ongoing process. Regularly audit your site, set performance budgets, and continuously monitor metrics. Remember: every millisecond counts!

Start with the biggest impact items (images, JavaScript) and work your way through the optimizations. Your users—and your business—will thank you.
    `
  }
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  if (category === 'All') return blogPosts;
  return blogPosts.filter(post => post.category === category);
}

export function getRelatedPosts(currentPostId: number, category: string, limit: number = 2): BlogPost[] {
  return blogPosts
    .filter(post => post.id !== currentPostId && post.category === category)
    .slice(0, limit);
}
