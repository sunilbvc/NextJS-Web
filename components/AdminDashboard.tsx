'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Plus, Edit, Trash2, Eye, EyeOff, Save, X, Calendar, User, Tag, Upload, Image as ImageIcon } from 'lucide-react'

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

interface BlogCategory {
  id?: string;
  name: string;
  slug: string;
  description?: string;
  color?: string;
  createdAt: Date;
}

export default function AdminDashboard() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<BlogCategory[]>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    featuredImage: '',
    category: '',
    tags: '',
    status: 'draft' as 'draft' | 'published'
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    loadPosts();
    loadCategories();
  }, []);

  const loadPosts = async () => {
    try {
      const { getBlogPosts } = await import('../lib/firebase');
      const result = await getBlogPosts(50);
      if (result.success) {
        setPosts(result.posts || []);
      }
    } catch (error) {
      console.error('Failed to load posts:', error);
    }
  };

  const loadCategories = async () => {
    try {
      console.log('Loading categories...');
      const { getBlogCategories } = await import('../lib/firebase');
      const result = await getBlogCategories();
      console.log('Categories result:', result);
      if (result.success) {
        setCategories(result.categories || []);
        console.log('Categories loaded:', result.categories);
      } else {
        console.error('Failed to load categories:', result.error);
        // Add fallback categories if loading fails
        setCategories([
          { id: '1', name: 'Digital Marketing', slug: 'digital-marketing', description: 'Marketing strategies', color: '#EC4899', createdAt: new Date() },
          { id: '2', name: 'Web Development', slug: 'web-development', description: 'Development services', color: '#8B5CF6', createdAt: new Date() },
          { id: '3', name: 'Social Media', slug: 'social-media', description: 'Social media management', color: '#06B6D4', createdAt: new Date() }
        ]);
      }
    } catch (error) {
      console.error('Failed to load categories:', error);
      // Add fallback categories if loading fails
      setCategories([
        { id: '1', name: 'Digital Marketing', slug: 'digital-marketing', description: 'Marketing strategies', color: '#EC4899', createdAt: new Date() },
        { id: '2', name: 'Web Development', slug: 'web-development', description: 'Development services', color: '#8B5CF6', createdAt: new Date() },
        { id: '3', name: 'Social Media', slug: 'social-media', description: 'Social media management', color: '#06B6D4', createdAt: new Date() }
      ]);
    }
  };

  const handleImageUpload = (file: File) => {
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file (JPEG, PNG, GIF, etc.)');
        return;
      }
      
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB');
        return;
      }

      setImageFile(file);
      
      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleImageUpload(files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const removeImage = () => {
    setImageFile(null);
    setImagePreview('');
    setFormData({ ...formData, featuredImage: '' });
  };

  const uploadImageToFirebase = async (file: File): Promise<string> => {
    try {
      const { uploadImage } = await import('../lib/firebase');
      const timestamp = Date.now();
      const fileName = `${timestamp}_${file.name}`;
      const path = `blog-images/${fileName}`;
      
      const downloadURL = await uploadImage(file, path);
      return downloadURL;
    } catch (error) {
      throw new Error('Failed to upload image');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      console.log('Starting form submission...');
      setIsUploading(true);
      let imageUrl = formData.featuredImage;

      // Upload image if a new file is selected
      if (imageFile) {
        console.log('Uploading image...', imageFile.name);
        try {
          imageUrl = await uploadImageToFirebase(imageFile);
          console.log('Image uploaded successfully:', imageUrl);
        } catch (uploadError) {
          console.error('Image upload failed:', uploadError);
          alert('Failed to upload image. Please try again.');
          setIsUploading(false);
          return;
        }
      }

      console.log('Creating blog post...');
      const { createBlogPost } = await import('../lib/firebase');
      
      const postData = {
        ...formData,
        featuredImage: imageUrl,
        slug: formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        authorId: 'admin-1',
        authorName: 'Admin',
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        readTime: Math.ceil(formData.content.split(' ').length / 200),
        publishedAt: formData.status === 'published' ? new Date() : undefined
      };

      console.log('Post data:', postData);
      const result = await createBlogPost(postData);
      console.log('Create result:', result);
      
      if (result.success) {
        console.log('Post created successfully!');
        setIsCreating(false);
        setFormData({
          title: '',
          excerpt: '',
          content: '',
          featuredImage: '',
          category: '',
          tags: '',
          status: 'draft'
        });
        setImageFile(null);
        setImagePreview('');
        loadPosts();
        alert('Blog post created successfully!');
      } else {
        console.error('Failed to create post:', result.error);
        alert('Failed to create blog post: ' + result.error);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('An error occurred: ' + (error instanceof Error ? error.message : 'Unknown error'));
    } finally {
      console.log('Setting isUploading to false');
      setIsUploading(false);
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!editingPost?.id) return;
    
    try {
      console.log('Starting post update...');
      setIsUploading(true);
      let imageUrl = formData.featuredImage;

      // Upload image if a new file is selected
      if (imageFile) {
        console.log('Uploading new image...', imageFile.name);
        try {
          imageUrl = await uploadImageToFirebase(imageFile);
          console.log('New image uploaded successfully:', imageUrl);
        } catch (uploadError) {
          console.error('Image upload failed:', uploadError);
          alert('Failed to upload image. Please try again.');
          setIsUploading(false);
          return;
        }
      }

      console.log('Updating blog post...');
      const { updateBlogPost } = await import('../lib/firebase');
      
      const updates = {
        ...formData,
        featuredImage: imageUrl,
        slug: formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        readTime: Math.ceil(formData.content.split(' ').length / 200),
        publishedAt: formData.status === 'published' ? new Date() : undefined
      };

      console.log('Update data:', updates);
      const result = await updateBlogPost(editingPost.id, updates);
      console.log('Update result:', result);
      
      if (result.success) {
        console.log('Post updated successfully!');
        setEditingPost(null);
        setFormData({
          title: '',
          excerpt: '',
          content: '',
          featuredImage: '',
          category: '',
          tags: '',
          status: 'draft'
        });
        setImageFile(null);
        setImagePreview('');
        loadPosts();
        alert('Blog post updated successfully!');
      } else {
        console.error('Failed to update post:', result.error);
        alert('Failed to update blog post: ' + result.error);
      }
    } catch (error) {
      console.error('Update error:', error);
      alert('An error occurred: ' + (error instanceof Error ? error.message : 'Unknown error'));
    } finally {
      console.log('Setting isUploading to false');
      setIsUploading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;
    
    try {
      const { deleteBlogPost } = await import('../lib/firebase');
      const result = await deleteBlogPost(id);
      
      if (result.success) {
        loadPosts();
      }
    } catch (error) {
      console.error('Failed to delete post:', error);
    }
  };

  const startEditing = (post: BlogPost) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      featuredImage: post.featuredImage || '',
      category: post.category,
      tags: post.tags.join(', '),
      status: post.status
    });
    setImagePreview(post.featuredImage || '');
    setImageFile(null);
  };

  const cancelEditing = () => {
    setEditingPost(null);
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      featuredImage: '',
      category: '',
      tags: '',
      status: 'draft'
    });
    setImageFile(null);
    setImagePreview('');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Blog Dashboard</h1>
          <button
            onClick={() => setIsCreating(true)}
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-300"
          >
            <Plus className="w-5 h-5" />
            New Post
          </button>
        </div>

        {/* Debug Info */}
        <div className="bg-gray-800 rounded-lg p-4 mb-6">
          <h3 className="text-sm font-semibold text-gray-300 mb-2">Debug Info:</h3>
          <div className="text-xs text-gray-400">
            <p>Categories loaded: {categories.length}</p>
            <p>Category names: {categories.map(cat => cat.name).join(', ')}</p>
            <p className="mt-2">
              <button
                onClick={() => {
                  // Test creating a post without image
                  const testData = {
                    title: 'Test Post ' + Date.now(),
                    excerpt: 'This is a test post to verify the system works',
                    content: 'This is the content of our test post. It should work without any issues.',
                    featuredImage: '',
                    category: categories[0]?.name || 'Digital Marketing',
                    tags: 'test, blog, system',
                    status: 'published' as 'draft' | 'published'
                  };
                  setFormData(testData);
                  setIsCreating(true);
                }}
                className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-xs"
              >
                Test Create Post (No Image)
              </button>
            </p>
          </div>
        </div>

        {/* Create/Edit Form */}
        {(isCreating || editingPost) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-800 rounded-lg p-6 mb-8"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">
                {editingPost ? 'Edit Post' : 'Create New Post'}
              </h2>
              <button
                onClick={editingPost ? cancelEditing : () => setIsCreating(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={editingPost ? handleUpdate : handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Post Title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                />
              </div>

              <textarea
                placeholder="Excerpt (short description)"
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />

              {/* Image Upload Section */}
              <div className="space-y-4">
                <label className="block text-sm font-medium text-gray-300">Featured Image</label>
                
                {imagePreview ? (
                  <div className="relative">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-48 object-cover rounded-lg border border-gray-600"
                    />
                    <button
                      type="button"
                      onClick={removeImage}
                      className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition-colors duration-300"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div
                    className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center hover:border-pink-500 transition-colors duration-300 cursor-pointer"
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={(e) => e.target.files?.[0] && handleImageUpload(e.target.files[0])}
                      className="hidden"
                    />
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-300 mb-2">
                      <span className="text-pink-400 font-medium">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-gray-400 text-sm">PNG, JPG, GIF up to 5MB</p>
                  </div>
                )}
              </div>

              <textarea
                placeholder="Content (full blog post)"
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                rows={10}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                >
                  <option value="">Select Category</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.name}>
                      {cat.name}
                    </option>
                  ))}
                </select>

                <input
                  type="text"
                  placeholder="Tags (comma separated)"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  className="px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                />

                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value as 'draft' | 'published' })}
                  className="px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </div>

              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={editingPost ? cancelEditing : () => setIsCreating(false)}
                  className="px-6 py-3 bg-gray-600 hover:bg-gray-500 rounded-lg transition-colors duration-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isUploading}
                  className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 rounded-lg flex items-center gap-2 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isUploading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      {editingPost ? 'Updating...' : 'Creating...'}
                    </>
                  ) : (
                    <>
                      <Save className="w-5 h-5" />
                      {editingPost ? 'Update Post' : 'Create Post'}
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Posts List */}
        <div className="bg-gray-800 rounded-lg overflow-hidden">
          <div className="p-6 border-b border-gray-700">
            <h2 className="text-xl font-semibold">All Posts ({posts.length})</h2>
          </div>
          
          <div className="divide-y divide-gray-700">
            {posts.map((post) => (
              <div key={post.id} className="p-6 hover:bg-gray-750 transition-colors duration-300">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        post.status === 'published' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {post.status === 'published' ? <Eye className="w-3 h-3 inline mr-1" /> : <EyeOff className="w-3 h-3 inline mr-1" />}
                        {post.status}
                      </span>
                      <span className="text-gray-400 text-sm flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {(() => {
                          try {
                            if (post.createdAt && typeof post.createdAt === 'object' && 'toDate' in post.createdAt) {
                              return (post.createdAt as any).toDate().toLocaleDateString();
                            } else if (post.createdAt instanceof Date) {
                              return post.createdAt.toLocaleDateString();
                            } else {
                              return new Date().toLocaleDateString();
                            }
                          } catch {
                            return new Date().toLocaleDateString();
                          }
                        })()}
                      </span>
                      <span className="text-gray-400 text-sm flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.authorName}
                      </span>
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                    <p className="text-gray-300 text-sm mb-3">{post.excerpt}</p>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-1">
                        <Tag className="w-3 h-3" />
                        {post.category}
                      </span>
                      <span>• {post.readTime} min read</span>
                      <span>• {post.views} views</span>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 ml-4">
                    <button
                      onClick={() => startEditing(post)}
                      className="p-2 text-blue-400 hover:text-blue-300 hover:bg-blue-400/10 rounded-lg transition-colors duration-300"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(post.id!)}
                      className="p-2 text-red-400 hover:text-red-300 hover:bg-red-400/10 rounded-lg transition-colors duration-300"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 