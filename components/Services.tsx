'use client'

import { motion } from 'framer-motion'
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Code, 
  Smartphone, 
  Search, 
  BarChart3,
  Target,
  Users,
  Zap,
  Globe,
  ArrowRight
} from 'lucide-react'

export default function Services() {
  const socialMediaServices = [
    {
      icon: Instagram,
      title: 'Instagram Marketing',
      description: 'Build your brand presence with engaging content, stories, and influencer partnerships.',
      features: ['Content Strategy', 'Hashtag Optimization', 'Influencer Marketing', 'Analytics & Reporting']
    },
    {
      icon: Facebook,
      title: 'Facebook Advertising',
      description: 'Target your ideal audience with precision and drive conversions through strategic campaigns.',
      features: ['Audience Targeting', 'Ad Creative Design', 'Campaign Management', 'ROI Optimization']
    },
    {
      icon: Twitter,
      title: 'Twitter Management',
      description: 'Engage with your audience in real-time and build meaningful conversations around your brand.',
      features: ['Community Management', 'Trend Monitoring', 'Engagement Strategies', 'Crisis Management']
    },
    {
      icon: Linkedin,
      title: 'LinkedIn B2B Marketing',
      description: 'Connect with professionals and decision-makers in your industry for business growth.',
      features: ['Thought Leadership', 'Lead Generation', 'Company Page Optimization', 'Networking Strategies']
    }
  ]

  const webDevelopmentServices = [
    {
      icon: Code,
      title: 'Custom Web Development',
      description: 'Build scalable, modern websites and web applications tailored to your business needs.',
      features: ['Responsive Design', 'SEO Optimization', 'Performance Optimization', 'Security Implementation']
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Development',
      description: 'Create mobile-optimized experiences that work seamlessly across all devices.',
      features: ['Progressive Web Apps', 'Mobile Optimization', 'Cross-Platform Compatibility', 'Touch-Friendly UI']
    },
    {
      icon: Search,
      title: 'SEO & Performance',
      description: 'Optimize your website for search engines and deliver lightning-fast user experiences.',
      features: ['Technical SEO', 'Page Speed Optimization', 'Core Web Vitals', 'Search Rankings']
    },
    {
      icon: BarChart3,
      title: 'Analytics & Tracking',
      description: 'Implement comprehensive tracking and analytics to measure and improve performance.',
      features: ['Google Analytics', 'Conversion Tracking', 'User Behavior Analysis', 'Performance Reports']
    }
  ]

  const additionalServices = [
    {
      icon: Target,
      title: 'Content Strategy',
      description: 'Develop compelling content that resonates with your audience and drives engagement.'
    },
    {
      icon: Users,
      title: 'Community Management',
      description: 'Build and nurture engaged communities around your brand across all platforms.'
    },
    {
      icon: Zap,
      title: 'Growth Hacking',
      description: 'Implement innovative strategies to rapidly scale your digital presence and reach.'
    },
    {
      icon: Globe,
      title: 'International Marketing',
      description: 'Expand your reach globally with localized marketing strategies and campaigns.'
    }
  ]

  return (
    <section id="services" className="py-16 sm:py-20 bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white"
          >
            Our Services
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-300 max-w-3xl mx-auto px-4 sm:px-0"
          >
            We offer comprehensive digital solutions to help your business grow and succeed in the digital world.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-0">
          {socialMediaServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className="text-lg font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">{service.description}</p>
              
              <button className="text-pink-400 hover:text-pink-300 font-medium text-sm transition-colors duration-200 flex items-center group">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 