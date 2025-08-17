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
  Globe
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
    <section id="services" className="section-padding bg-white">
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
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions that combine creative marketing strategies 
            with cutting-edge technology to drive real business results.
          </p>
        </motion.div>

        {/* Social Media Marketing Services */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Social Media Marketing
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {socialMediaServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg card-hover border border-gray-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-primary-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Web Development Services */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Web Development
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {webDevelopmentServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg card-hover border border-gray-100"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-secondary-500 to-primary-500 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-secondary-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Services */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Additional Services
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-lg card-hover border border-gray-100 text-center"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
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
            Ready to transform your digital presence?
          </p>
          <a href="#contact" className="btn-primary">
            Get Your Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  )
} 