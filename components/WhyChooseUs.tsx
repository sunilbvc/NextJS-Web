'use client'

import { motion } from 'framer-motion'
import { 
  Award, 
  Clock, 
  Users, 
  Shield, 
  Zap, 
  Globe, 
  CheckCircle, 
  Star,
  TrendingUp,
  Headphones,
  FileText,
  Rocket
} from 'lucide-react'

export default function WhyChooseUs() {
  const expertisePoints = [
    {
      icon: Award,
      title: "5+ Years Experience",
      description: "Proven track record in digital marketing and web development",
      color: "from-pink-500 to-purple-600"
    },
    {
      icon: Users,
      title: "500+ Happy Clients",
      description: "Successfully delivered projects for businesses across industries",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Shield,
      title: "100% Satisfaction",
      description: "We don't stop until you're completely satisfied with the results",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock support and maintenance for your peace of mind",
      color: "from-orange-500 to-red-600"
    }
  ]

  const competitiveAdvantages = [
    {
      icon: Zap,
      title: "Lightning Fast Delivery",
      description: "Quick turnaround times without compromising quality"
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "Follow international best practices and industry standards"
    },
    {
      icon: TrendingUp,
      title: "Results-Driven Approach",
      description: "Every strategy is designed to deliver measurable business results"
    },
    {
      icon: Headphones,
      title: "Dedicated Team",
      description: "Personal project manager and dedicated development team"
    }
  ]

  const processSteps = [
    {
      number: "01",
      title: "Discovery & Planning",
      description: "We analyze your business needs and create a comprehensive strategy"
    },
    {
      number: "02",
      title: "Design & Development",
      description: "Our expert team builds your solution with cutting-edge technology"
    },
    {
      number: "03",
      title: "Testing & Quality",
      description: "Rigorous testing ensures your solution works perfectly"
    },
    {
      number: "04",
      title: "Launch & Support",
      description: "Smooth launch followed by ongoing support and maintenance"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            Why <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Choose Us</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-300 max-w-4xl mx-auto"
          >
            We're not just another agency. We're your strategic partner in digital success, 
            combining creativity, technology, and proven results to transform your business.
          </motion.p>
        </div>

        {/* Expertise Points */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {expertisePoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className={`w-20 h-20 bg-gradient-to-r ${point.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <point.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{point.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Competitive Advantages */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-20 border border-white/20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            What Sets Us Apart
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {competitiveAdvantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center border border-pink-500/30 flex-shrink-0">
                  <advantage.icon className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">{advantage.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{advantage.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Steps */}
        <div className="text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-12"
          >
            Our Proven Process
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Connecting Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 transform -translate-y-1/2 z-0"></div>
                )}
                
                <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-pink-500/50 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    {step.number}
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-pink-400 transition-colors duration-300">
                    {step.title}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6">
              Join hundreds of satisfied clients who've achieved remarkable results with our expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Rocket className="w-5 h-5" />
                Start Your Project
              </a>
              <a
                href="#portfolio"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg border border-white/30 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <FileText className="w-5 h-5" />
                View Our Work
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
