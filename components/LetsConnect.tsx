'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Phone, Mail, MapPin, Clock, MessageCircle, Users, Target } from 'lucide-react'

export default function LetsConnect() {
  const connectionPoints = [
    {
      icon: <Phone className="w-6 h-6 text-pink-400" />,
      title: "Direct Communication",
      description: "Get in touch directly with our team for immediate assistance"
    },
    {
      icon: <Mail className="w-6 h-6 text-pink-400" />,
      title: "Email Support",
      description: "Send us detailed project requirements and get comprehensive quotes"
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-pink-400" />,
      title: "Live Chat",
      description: "Real-time support and instant answers to your questions"
    },
    {
      icon: <Users className="w-6 h-6 text-pink-400" />,
      title: "Team Consultation",
      description: "Schedule a free consultation with our expert team"
    },
    {
      icon: <Target className="w-6 h-6 text-pink-400" />,
      title: "Project Planning",
      description: "Let us help you plan and strategize your digital success"
    },
    {
      icon: <Clock className="w-6 h-6 text-pink-400" />,
      title: "24/7 Availability",
      description: "We're always here to help, whenever you need us"
    }
  ]

  const benefits = [
    "Free initial consultation and project assessment",
    "Transparent pricing with no hidden costs",
    "Regular project updates and progress reports",
    "Post-launch support and maintenance",
    "Dedicated project manager for your project",
    "Flexible engagement models to suit your needs"
  ]

  return (
    <section id="lets-connect" className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            Let's <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Connect</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Ready to transform your business? Let's discuss your vision and create something amazing together.
          </motion.p>
        </div>

        {/* Connection Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {connectionPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  {point.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-pink-400 transition-colors duration-300">
                    {point.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits with Tick Marks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Why Choose to Connect With Us?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-3"
              >
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                <span className="text-gray-200">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center border border-pink-500/30">
                <Phone className="w-6 h-6 text-pink-400" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Call Us</h4>
                <p className="text-gray-300 text-sm">+91 8104691455</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center border border-pink-500/30">
                <Mail className="w-6 h-6 text-pink-400" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Email Us</h4>
                <p className="text-gray-300 text-sm">support@digisolence.in</p>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center border border-pink-500/30">
                <MapPin className="w-6 h-6 text-pink-400" />
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Visit Us</h4>
                <p className="text-gray-300 text-sm">Andheri West, Mumbai</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Start Your Project Today
          </a>
        </motion.div>
      </div>
    </section>
  )
}
