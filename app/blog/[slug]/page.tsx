'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, User, Clock, Eye, ArrowLeft, Tag, Share2 } from 'lucide-react'
import Link from 'next/link'
import { useParams } from 'next/navigation'

interface BlogPost {
  id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage?: string;
  category: string;
  authorId: string;
  authorName: string;
  tags: string[];
  status: 'draft' | 'published';
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  readTime: number;
  views: number;
}

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (slug) {
      loadBlogPost();
    }
  }, [slug]);

  const loadBlogPost = async () => {
    try {
      const { getBlogPostBySlug, incrementBlogViews } = await import('../../../lib/firebase');
      const result = await getBlogPostBySlug(slug);
      
      if (result.success && result.post) {
        setPost(result.post);
        // Increment view count
        if (result.post.id) {
          await incrementBlogViews(result.post.id);
        }
      } else {
        setError('Blog post not found');
      }
    } catch (error) {
      console.error('Failed to load blog post:', error);
      setError('Failed to load blog post');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-pink-500 mx-auto mb-4"></div>
          <p>Loading blog post...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-gray-400 mb-6">{error || 'The blog post you are looking for does not exist.'}</p>
          <Link
            href="/blog"
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 px-6 py-3 rounded-lg transition-all duration-300"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Back Button */}
      <div className="container-custom pt-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </div>

      {/* Blog Post Content */}
      <article className="py-12">
        <div className="container-custom max-w-4xl">
          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-4 text-sm text-gray-400 mb-4">
              <span className="px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {post.publishedAt?.toDate().toLocaleDateString() || post.createdAt.toDate().toLocaleDateString()}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readTime} min read
              </span>
              <span className="flex items-center gap-1">
                <Eye className="w-3 h-3" />
                {post.views} views
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
              {post.excerpt}
            </p>

            <div className="flex items-center justify-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.authorName}</span>
              </div>
              <button className="flex items-center gap-2 hover:text-pink-400 transition-colors duration-300">
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
          </motion.header>

          {/* Featured Image */}
          {post.featuredImage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg"
              />
            </motion.div>
          )}

          {/* Tags */}
          {post.tags.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2 mb-8"
            >
              <Tag className="w-4 h-4 text-gray-400" />
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-gray-600 transition-colors duration-300"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          )}

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="prose prose-lg prose-invert max-w-none"
          >
            <div className="text-gray-300 leading-relaxed space-y-6">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-16 pt-8 border-t border-gray-700 text-center"
          >
            <p className="text-gray-400 mb-6">
              Thanks for reading! If you found this helpful, please share it with others.
            </p>
            <div className="flex justify-center gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-lg transition-all duration-300">
                Share Article
              </button>
              <Link
                href="/blog"
                className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors duration-300"
              >
                View All Posts
              </Link>
            </div>
          </motion.div>
        </div>
      </article>
    </div>
  )
} 