// CMS Integration Layer
// This file provides an abstraction layer for CMS integration
// Currently uses local data, but can be easily switched to Contentful, Sanity, Strapi, etc.

import { blogPosts, authors, type BlogPost, type Author } from './blogData';

// Re-export types for convenience
export type { BlogPost, Author } from './blogData';

// ==========================================
// BLOG POST FUNCTIONS
// ==========================================

/**
 * Get all published blog posts
 * @param limit - Optional limit for number of posts
 * @returns Array of blog posts
 */
export async function getAllPosts(limit?: number): Promise<BlogPost[]> {
  // In production, this would fetch from your CMS
  // Example with Contentful:
  // const entries = await client.getEntries({ content_type: 'blogPost', limit })
  // return entries.items.map(transformPost)
  
  const posts = blogPosts.filter(post => post.published !== false);
  return limit ? posts.slice(0, limit) : posts;
}

/**
 * Get a single blog post by slug
 * @param slug - Post slug
 * @returns Blog post or null
 */
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  // In production:
  // const entry = await client.getEntries({ content_type: 'blogPost', 'fields.slug': slug })
  // return entry.items[0] ? transformPost(entry.items[0]) : null
  
  const post = blogPosts.find(p => p.slug === slug);
  return post || null;
}

/**
 * Get posts by category
 * @param category - Category name
 * @param limit - Optional limit
 * @returns Array of blog posts
 */
export async function getPostsByCategory(
  category: string,
  limit?: number
): Promise<BlogPost[]> {
  const posts = blogPosts.filter(
    post => post.category === category && post.published !== false
  );
  return limit ? posts.slice(0, limit) : posts;
}

/**
 * Get posts by tag
 * @param tag - Tag name
 * @param limit - Optional limit
 * @returns Array of blog posts
 */
export async function getPostsByTag(
  tag: string,
  limit?: number
): Promise<BlogPost[]> {
  const posts = blogPosts.filter(
    post => post.tags.includes(tag) && post.published !== false
  );
  return limit ? posts.slice(0, limit) : posts;
}

/**
 * Get related posts based on category and tags
 * @param currentPostId - Current post ID
 * @param category - Post category
 * @param tags - Post tags
 * @param limit - Number of related posts to return
 * @returns Array of related blog posts
 */
export async function getRelatedPosts(
  currentPostId: number,
  category: string,
  tags: string[],
  limit: number = 3
): Promise<BlogPost[]> {
  const posts = blogPosts
    .filter(post => {
      if (post.id === currentPostId || post.published === false) return false;
      
      // Same category gets priority
      if (post.category === category) return true;
      
      // Or has matching tags
      return post.tags.some(tag => tags.includes(tag));
    })
    .slice(0, limit);
  
  return posts;
}

/**
 * Get featured posts
 * @param limit - Number of featured posts
 * @returns Array of featured blog posts
 */
export async function getFeaturedPosts(limit: number = 3): Promise<BlogPost[]> {
  const posts = blogPosts.filter(
    post => post.featured === true && post.published !== false
  );
  return posts.slice(0, limit);
}

/**
 * Search posts by query
 * @param query - Search query
 * @returns Array of matching blog posts
 */
export async function searchPosts(query: string): Promise<BlogPost[]> {
  const lowerQuery = query.toLowerCase();
  
  return blogPosts.filter(post => {
    if (post.published === false) return false;
    
    return (
      post.title.toLowerCase().includes(lowerQuery) ||
      post.excerpt.toLowerCase().includes(lowerQuery) ||
      post.content.toLowerCase().includes(lowerQuery) ||
      post.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
  });
}

// ==========================================
// AUTHOR FUNCTIONS
// ==========================================

/**
 * Get author by name
 * @param name - Author name
 * @returns Author or null
 */
export async function getAuthor(name: string): Promise<Author | null> {
  return authors[name] || null;
}

/**
 * Get all authors
 * @returns Array of authors
 */
export async function getAllAuthors(): Promise<Author[]> {
  return Object.values(authors);
}

/**
 * Get posts by author
 * @param authorName - Author name
 * @param limit - Optional limit
 * @returns Array of blog posts
 */
export async function getPostsByAuthor(
  authorName: string,
  limit?: number
): Promise<BlogPost[]> {
  const posts = blogPosts.filter(
    post => post.author === authorName && post.published !== false
  );
  return limit ? posts.slice(0, limit) : posts;
}

// ==========================================
// CATEGORY & TAG FUNCTIONS
// ==========================================

/**
 * Get all unique categories
 * @returns Array of category names
 */
export async function getAllCategories(): Promise<string[]> {
  const categories = new Set(
    blogPosts
      .filter(post => post.published !== false)
      .map(post => post.category)
  );
  return Array.from(categories);
}

/**
 * Get all unique tags
 * @returns Array of tag names
 */
export async function getAllTags(): Promise<string[]> {
  const tags = new Set(
    blogPosts
      .filter(post => post.published !== false)
      .flatMap(post => post.tags)
  );
  return Array.from(tags);
}

/**
 * Get post count by category
 * @returns Object with category counts
 */
export async function getCategoryCounts(): Promise<Record<string, number>> {
  const counts: Record<string, number> = {};
  
  blogPosts
    .filter(post => post.published !== false)
    .forEach(post => {
      counts[post.category] = (counts[post.category] || 0) + 1;
    });
  
  return counts;
}

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

/**
 * Increment post view count
 * @param postId - Post ID
 */
export async function incrementViews(postId: number): Promise<void> {
  // In production, this would update the CMS or database
  const post = blogPosts.find(p => p.id === postId);
  if (post) {
    post.views = (post.views || 0) + 1;
  }
}

/**
 * Get post statistics
 * @returns Object with blog statistics
 */
export async function getBlogStats(): Promise<{
  totalPosts: number;
  totalCategories: number;
  totalTags: number;
  totalAuthors: number;
}> {
  const publishedPosts = blogPosts.filter(post => post.published !== false);
  
  return {
    totalPosts: publishedPosts.length,
    totalCategories: (await getAllCategories()).length,
    totalTags: (await getAllTags()).length,
    totalAuthors: Object.keys(authors).length,
  };
}

// ==========================================
// CMS INTEGRATION EXAMPLES
// ==========================================

/**
 * Example: Contentful Integration
 * Uncomment and configure when ready to use Contentful
 */
/*
import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export async function getAllPostsFromContentful(): Promise<BlogPost[]> {
  const entries = await client.getEntries({
    content_type: 'blogPost',
    order: '-fields.publishDate',
  });
  
  return entries.items.map(transformContentfulPost);
}

function transformContentfulPost(entry: any): BlogPost {
  return {
    id: entry.sys.id,
    title: entry.fields.title,
    excerpt: entry.fields.excerpt,
    author: entry.fields.author.fields.name,
    date: entry.fields.publishDate,
    readTime: entry.fields.readTime,
    category: entry.fields.category,
    tags: entry.fields.tags || [],
    slug: entry.fields.slug,
    content: entry.fields.content,
    featured: entry.fields.featured || false,
    published: entry.fields.published !== false,
  };
}
*/

/**
 * Example: Sanity Integration
 * Uncomment and configure when ready to use Sanity
 */
/*
import { createClient } from '@sanity/client';

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: true,
});

export async function getAllPostsFromSanity(): Promise<BlogPost[]> {
  const query = `*[_type == "post" && published == true] | order(publishedAt desc) {
    _id,
    title,
    excerpt,
    "author": author->name,
    publishedAt,
    readTime,
    "category": category->title,
    "tags": tags[]->title,
    "slug": slug.current,
    content,
    featured
  }`;
  
  const posts = await sanityClient.fetch(query);
  return posts.map(transformSanityPost);
}

function transformSanityPost(post: any): BlogPost {
  return {
    id: post._id,
    title: post.title,
    excerpt: post.excerpt,
    author: post.author,
    date: new Date(post.publishedAt).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    readTime: post.readTime,
    category: post.category,
    tags: post.tags || [],
    slug: post.slug,
    content: post.content,
    featured: post.featured || false,
    published: true,
  };
}
*/

/**
 * Example: Strapi Integration
 * Uncomment and configure when ready to use Strapi
 */
/*
export async function getAllPostsFromStrapi(): Promise<BlogPost[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/posts?populate=*`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
    }
  );
  
  const { data } = await response.json();
  return data.map(transformStrapiPost);
}

function transformStrapiPost(post: any): BlogPost {
  return {
    id: post.id,
    title: post.attributes.title,
    excerpt: post.attributes.excerpt,
    author: post.attributes.author.data.attributes.name,
    date: new Date(post.attributes.publishedAt).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    readTime: post.attributes.readTime,
    category: post.attributes.category.data.attributes.name,
    tags: post.attributes.tags.data.map((t: any) => t.attributes.name),
    slug: post.attributes.slug,
    content: post.attributes.content,
    featured: post.attributes.featured || false,
    published: post.attributes.published !== false,
  };
}
*/
