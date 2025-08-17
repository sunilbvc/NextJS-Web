// Setup script for blog system
// Run this in your browser console on the admin page

const setupBlogCategories = async () => {
  try {
    const { createBlogCategory } = await import('../lib/firebase');
    
    const categories = [
      { name: 'Digital Marketing', slug: 'digital-marketing', description: 'Social media, SEO, and online advertising strategies', color: '#EC4899' },
      { name: 'Web Development', slug: 'web-development', description: 'Frontend, backend, and full-stack development', color: '#8B5CF6' },
      { name: 'Social Media', slug: 'social-media', description: 'Platform strategies and content creation', color: '#06B6D4' },
      { name: 'SEO', slug: 'seo', description: 'Search engine optimization techniques', color: '#10B981' },
      { name: 'Business Growth', slug: 'business-growth', description: 'Tips for scaling your business online', color: '#F59E0B' }
    ];

    for (const category of categories) {
      const result = await createBlogCategory(category);
      if (result.success) {
        console.log(`✅ Created category: ${category.name}`);
      } else {
        console.log(`❌ Failed to create category: ${category.name}`);
      }
    }
    
    console.log('🎉 Blog categories setup complete!');
  } catch (error) {
    console.error('Setup failed:', error);
  }
};

// Run this function in your browser console
setupBlogCategories();
