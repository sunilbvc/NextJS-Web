'use client'

import { motion } from 'framer-motion'
import { ExternalLink, ArrowRight, TrendingUp, Users, Globe } from 'lucide-react'

export default function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      title: 'TechStart E-commerce Platform',
      category: 'Web Development',
      image: '/api/placeholder/400/300',
      description: 'A modern e-commerce platform with advanced features including AI-powered recommendations, seamless checkout, and mobile-first design.',
      results: [
        { metric: 'Conversion Rate', value: '+180%', icon: TrendingUp },
        { metric: 'Mobile Traffic', value: '+250%', icon: Users },
        { metric: 'Global Reach', value: '25+ Countries', icon: Globe }
      ],
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase'],
      link: '#'
    },
    {
      id: 2,
      title: 'FitnessPro Social Media Campaign',
      category: 'Social Media Marketing',
      image: '/api/placeholder/400/300',
      description: 'Comprehensive social media strategy across Instagram, Facebook, and TikTok resulting in massive brand awareness and engagement.',
      results: [
        { metric: 'Follower Growth', value: '+300%', icon: TrendingUp },
        { metric: 'Engagement Rate', value: '+450%', icon: Users },
        { metric: 'Brand Mentions', value: '+200%', icon: Globe }
      ],
      technologies: ['Instagram', 'Facebook', 'TikTok', 'Analytics'],
      link: '#'
    },
    {
      id: 3,
      title: 'RestaurantHub Booking System',
      category: 'Web Development',
      image: '/api/placeholder/400/300',
      description: 'A restaurant management and booking platform with real-time availability, customer reviews, and integrated payment processing.',
      results: [
        { metric: 'Booking Rate', value: '+220%', icon: TrendingUp },
        { metric: 'Customer Satisfaction', value: '4.8/5', icon: Users },
        { metric: 'Revenue Growth', value: '+160%', icon: Globe }
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#'
    },
    {
      id: 4,
      title: 'EduTech Content Marketing',
      category: 'Content Marketing',
      image: '/api/placeholder/400/300',
      description: 'Strategic content marketing campaign targeting educational institutions with thought leadership content and lead generation.',
      results: [
        { metric: 'Lead Generation', value: '+280%', icon: TrendingUp },
        { metric: 'Content Engagement', value: '+320%', icon: Users },
        { metric: 'Brand Authority', value: '+190%', icon: Globe }
      ],
      technologies: ['SEO', 'Content Strategy', 'LinkedIn', 'Email Marketing'],
      link: '#'
    },
    {
      id: 5,
      title: 'GreenEnergy Mobile App',
      category: 'Mobile Development',
      image: '/api/placeholder/400/300',
      description: 'A progressive web app for renewable energy monitoring with real-time data visualization and user engagement features.',
      results: [
        { metric: 'App Downloads', value: '+400%', icon: TrendingUp },
        { metric: 'User Retention', value: '+180%', icon: Users },
        { metric: 'Market Share', value: '+150%', icon: Globe }
      ],
      technologies: ['PWA', 'React Native', 'Firebase', 'D3.js'],
      link: '#'
    },
    {
      id: 6,
      title: 'FashionBrand Influencer Campaign',
      category: 'Influencer Marketing',
      image: '/api/placeholder/400/300',
      description: 'Strategic influencer partnerships across multiple platforms driving brand awareness and sales for a fashion retailer.',
      results: [
        { metric: 'Brand Awareness', value: '+350%', icon: TrendingUp },
        { metric: 'Sales Conversion', value: '+280%', icon: Users },
        { metric: 'Social Reach', value: '+500%', icon: Globe }
      ],
      technologies: ['Instagram', 'YouTube', 'TikTok', 'Analytics'],
      link: '#'
    }
  ]

  const categories = ['All', 'Web Development', 'Social Media Marketing', 'Content Marketing', 'Mobile Development', 'Influencer Marketing']

  return (
    <section id="portfolio" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their digital presence 
            and achieve remarkable results through our innovative solutions.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg card-hover border border-gray-100 overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <div className="text-gray-500 text-center">
                  <div className="w-16 h-16 bg-gray-400 rounded-full mx-auto mb-2"></div>
                  <p className="text-sm">Project Image</p>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>

                {/* Results */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {item.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="text-center">
                      <div className="flex items-center justify-center w-8 h-8 bg-primary-100 rounded-lg mx-auto mb-1">
                        <result.icon className="w-4 h-4 text-primary-600" />
                      </div>
                      <div className="text-xs text-gray-500">{result.metric}</div>
                      <div className="text-sm font-semibold text-gray-900">{result.value}</div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center justify-between">
                  <a
                    href={item.link}
                    className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center space-x-1"
                  >
                    <span>View Case Study</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <button className="text-gray-400 hover:text-gray-600">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Ready to join our success stories?
          </p>
          <a href="#contact" className="btn-primary">
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  )
} 