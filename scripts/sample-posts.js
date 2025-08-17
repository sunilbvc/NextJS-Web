// Sample blog posts for testing
// Run this in your browser console on the admin page

const createSamplePosts = async () => {
  try {
    const { createBlogPost } = await import('../lib/firebase');
    
    const samplePosts = [
      {
        title: "10 Social Media Marketing Strategies That Actually Work in 2024",
        excerpt: "Discover the most effective social media marketing strategies that are driving real results for businesses this year.",
        content: `Social media marketing has evolved significantly over the past few years. With algorithm changes, new platforms emerging, and user behavior shifting, it's crucial to stay updated with the latest strategies.

Here are 10 proven social media marketing strategies that are working in 2024:

1. **Video-First Content Strategy**
   - Short-form videos (TikTok, Instagram Reels, YouTube Shorts)
   - Live streaming for real-time engagement
   - Behind-the-scenes content

2. **Authentic Storytelling**
   - Share real customer success stories
   - Show your company culture
   - Be transparent about challenges and solutions

3. **Community Building**
   - Create Facebook Groups around your niche
   - Host Twitter Spaces and Instagram Lives
   - Engage in meaningful conversations

4. **User-Generated Content**
   - Encourage customers to share their experiences
   - Run hashtag campaigns
   - Feature customer testimonials

5. **Influencer Partnerships**
   - Micro-influencers for better engagement
   - Long-term partnerships over one-off posts
   - Authentic collaborations

6. **Social Commerce Integration**
   - Instagram Shopping features
   - Facebook Shop integration
   - Pinterest Buyable Pins

7. **Data-Driven Content**
   - Use analytics to understand what works
   - A/B test different content types
   - Optimize posting times

8. **Interactive Content**
   - Polls and questions
   - Quizzes and games
   - Interactive stories

9. **Cross-Platform Consistency**
   - Maintain brand voice across platforms
   - Adapt content for each platform's strengths
   - Use consistent visual branding

10. **Social Listening and Engagement**
    - Monitor brand mentions
    - Respond to comments and messages quickly
    - Engage with industry conversations

Remember, the key to successful social media marketing is consistency, authenticity, and providing real value to your audience. Focus on building relationships rather than just selling products.`,
        category: "Social Media",
        tags: ["social media", "marketing", "strategy", "2024", "engagement"],
        status: "published"
      },
      {
        title: "The Complete Guide to Building a High-Converting Website",
        excerpt: "Learn the essential elements and best practices for creating websites that convert visitors into customers.",
        content: `Your website is often the first impression potential customers have of your business. In today's digital world, having a high-converting website is crucial for business success.

## Key Elements of a High-Converting Website

### 1. **Clear Value Proposition**
- Immediately communicate what you do and why it matters
- Use compelling headlines that address customer pain points
- Include social proof and trust signals

### 2. **User Experience (UX) Design**
- Intuitive navigation and clear information architecture
- Fast loading times (under 3 seconds)
- Mobile-first responsive design
- Easy-to-find contact information

### 3. **Compelling Content**
- Benefit-focused copywriting
- Clear calls-to-action (CTAs)
- Engaging visuals and videos
- Customer testimonials and case studies

### 4. **Conversion Optimization**
- A/B testing different elements
- Optimized forms with minimal fields
- Trust badges and security indicators
- Clear pricing and service information

### 5. **Technical SEO**
- Fast loading speed
- Mobile optimization
- Secure HTTPS connection
- Optimized meta tags and descriptions

## Best Practices for Implementation

- **Start with mobile design** - Mobile traffic continues to grow
- **Focus on page speed** - Every second counts for conversion rates
- **Use data to make decisions** - Implement analytics and heat mapping
- **Test everything** - Never assume what works best
- **Keep it simple** - Remove distractions and focus on conversion goals

Remember, a high-converting website is not just about design—it's about understanding your customers and creating an experience that guides them toward taking action.`,
        category: "Web Development",
        tags: ["web development", "conversion", "UX", "design", "optimization"],
        status: "published"
      },
      {
        title: "SEO Fundamentals: How to Rank Higher in Search Results",
        excerpt: "Master the basics of Search Engine Optimization to improve your website's visibility and drive organic traffic.",
        content: `Search Engine Optimization (SEO) is the foundation of digital marketing success. Understanding and implementing SEO fundamentals can significantly improve your website's visibility and drive organic traffic.

## Core SEO Elements

### 1. **On-Page SEO**
- **Title Tags**: Include primary keywords and make them compelling
- **Meta Descriptions**: Write engaging descriptions that encourage clicks
- **Header Tags**: Use H1, H2, H3 tags to structure content
- **Keyword Optimization**: Naturally integrate keywords throughout content
- **Internal Linking**: Connect related pages within your site

### 2. **Technical SEO**
- **Page Speed**: Optimize images, use caching, minimize code
- **Mobile Optimization**: Ensure responsive design and mobile-friendly layout
- **Site Structure**: Create logical URL structure and navigation
- **XML Sitemaps**: Help search engines discover all your pages
- **Schema Markup**: Add structured data for rich snippets

### 3. **Content Quality**
- **Original Content**: Create unique, valuable content for your audience
- **Regular Updates**: Publish fresh content consistently
- **Keyword Research**: Target relevant, low-competition keywords
- **Content Length**: Aim for comprehensive, in-depth content
- **User Intent**: Match content to what users are searching for

### 4. **Off-Page SEO**
- **Backlinks**: Earn quality links from reputable websites
- **Social Signals**: Engage on social media platforms
- **Local SEO**: Optimize for local search results
- **Brand Mentions**: Build brand awareness and credibility

## Implementation Strategy

1. **Start with keyword research** - Understand what your audience searches for
2. **Optimize existing content** - Improve current pages before creating new ones
3. **Focus on user experience** - Search engines prioritize user satisfaction
4. **Monitor and measure** - Use tools like Google Analytics and Search Console
5. **Be patient** - SEO results take time to materialize

Remember, SEO is a long-term strategy that requires consistent effort and adaptation to algorithm changes. Focus on providing value to your users, and the rankings will follow.`,
        category: "SEO",
        tags: ["SEO", "search engines", "optimization", "keywords", "ranking"],
        status: "published"
      }
    ];

    for (const post of samplePosts) {
      const result = await createBlogPost({
        ...post,
        authorId: 'admin-1',
        authorName: 'Devnest Digital Team'
      });
      
      if (result.success) {
        console.log(`✅ Created post: ${post.title}`);
      } else {
        console.log(`❌ Failed to create post: ${post.title}`);
      }
    }
    
    console.log('🎉 Sample blog posts created successfully!');
  } catch (error) {
    console.error('Failed to create sample posts:', error);
  }
};

// Run this function in your browser console
createSamplePosts();
