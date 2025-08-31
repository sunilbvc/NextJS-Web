'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Award, Users, Target, TrendingUp, Heart } from 'lucide-react'

export default function About() {
  const stats = [
    { icon: Users, value: '15+', label: 'Team Members' },
    { icon: Target, value: '98%', label: 'Client Satisfaction' },
    { icon: TrendingUp, value: '5+', label: 'Years Experience' },
    { icon: Award, value: '25+', label: 'Industry Awards' }
  ]

  const values = [
    {
      icon: Heart,
      title: 'Passion for Excellence',
      description: 'We pour our heart into every project, ensuring exceptional quality and results.'
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Every strategy is designed with measurable outcomes and business growth in mind.'
    },
    {
      icon: Users,
      title: 'Client Partnership',
      description: 'We work as an extension of your team, building long-term relationships.'
    },
    {
      icon: TrendingUp,
      title: 'Innovation First',
      description: 'We stay ahead of trends and leverage cutting-edge technology for your success.'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description: 'We analyze your business, audience, and goals to create a tailored digital strategy.'
    },
    {
      step: '02',
      title: 'Creative Development',
      description: 'Our team crafts compelling content and develops stunning digital experiences.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We execute your strategy across all platforms with precision and attention to detail.'
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuous monitoring and optimization ensure your success keeps growing.'
    }
  ]

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-primary-600 rounded-full mr-2"></span>
              About Digi Solence
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              We're a Team of <span className="gradient-text">Digital Innovators</span> Passionate About Your Success
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Founded in 2019, Digi Solence has been at the forefront of digital transformation, 
              helping businesses of all sizes establish powerful online presences and achieve remarkable growth.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Our mission is simple: to deliver exceptional digital experiences that not only look stunning 
              but drive real business results. We combine creativity with data-driven strategies to ensure 
              every campaign and website exceeds expectations.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Certified Professionals</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Data-Driven Results</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Image/Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary-500 to-secondary-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg mx-auto mb-3">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-sm opacity-90">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full opacity-20 animate-bounce-slow"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-pink-400 rounded-full opacity-20 animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
          </motion.div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Our Core Values
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Our Process */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Our Process
          </motion.h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white p-6 rounded-xl shadow-lg card-hover border border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mb-4 text-white font-bold text-lg">
                    {step.step}
                  </div>
                  <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                
                {/* Connector Line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 transform -translate-y-1/2"></div>
                )}
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
            Ready to work with a team that truly cares about your success?
          </p>
          <a href="#contact" className="btn-primary">
            Let's Start Building Together
          </a>
        </motion.div>
      </div>
    </section>
  )
} 