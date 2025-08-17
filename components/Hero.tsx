'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Play, TrendingUp, Users, Globe, CheckCircle, XCircle, Loader2 } from 'lucide-react'
import { useState } from 'react'

export default function Hero() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const stats = [
    { icon: TrendingUp, value: '500+', label: 'Projects Completed' },
    { icon: Users, value: '200+', label: 'Happy Clients' },
    { icon: Globe, value: '50+', label: 'Countries Reached' },
  ]

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    console.log('🚀 Hero form submission started')
    
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')
    
    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      company: formData.get('company') as string,
      service: formData.get('service') as string,
      message: formData.get('message') as string
    }
    
    console.log('📝 Form data:', data)
    
    try {
      console.log('📡 Calling Firebase submitContactForm...')
      
      // Import and use Firebase function
      const { submitContactForm } = await import('../lib/firebase')
      const firebaseResult = await submitContactForm(data)
      
      console.log('✅ Firebase result:', firebaseResult)
      
      if (firebaseResult.success) {
        console.log('🎉 Firebase success, now calling email...')
        
        // Now send to email (simple version)
        try {
          console.log('📧 Importing email function...')
          
          // Import simple email function
          const { sendEmailWithEmailJS } = await import('../lib/email')
          
          console.log('📧 Calling sendEmailWithEmailJS...')
          
          // Send to email (this will log the data for now)
          const emailResult = await sendEmailWithEmailJS(data)
          
          console.log('📧 Email result:', emailResult)
          
          // Always show success if Firebase worked, regardless of email result
          setSubmitStatus('success')
          e.currentTarget.reset()
          
        } catch (emailError) {
          console.log('⚠️ Email failed, but Firebase worked:', emailError)
          // Still show success since Firebase worked
          setSubmitStatus('success')
          e.currentTarget.reset()
        }
        
      } else {
        console.log('❌ Firebase failed:', firebaseResult.error)
        setSubmitStatus('error')
        setErrorMessage(firebaseResult.error || 'Something went wrong')
      }
    } catch (error) {
      console.log('💥 Exception occurred:', error)
      console.log('💥 Error type:', typeof error)
      console.log('💥 Error message:', error instanceof Error ? error.message : 'Unknown error')
      
      // Check if it's a Firebase error or something else
      if (error instanceof Error && error.message.includes('Firebase')) {
        setSubmitStatus('error')
        setErrorMessage('Database connection failed. Please try again.')
      } else {
        setSubmitStatus('error')
        setErrorMessage('An unexpected error occurred. Please try again.')
      }
    } finally {
      console.log('🏁 Form submission finished')
      setIsSubmitting(false)
    }
  }

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-pink-500/20 text-pink-400 rounded-full text-sm font-medium border border-pink-500/30"
              >
                <span className="w-2 h-2 bg-pink-400 rounded-full mr-2"></span>
                Award-Winning Digital Agency
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                India's Top <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Web Design</span> & Shopify Development Agency
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Build, Grow, and Optimize Your Online Business with our expert team. 
                We craft compelling digital experiences that drive engagement, 
                boost conversions, and accelerate your business growth.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#contact"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get a Quote</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              
              <motion.button
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5" />
                <span>Explore Services</span>
              </motion.button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-12 h-12 bg-pink-500/20 rounded-lg mx-auto mb-2 border border-pink-500/30">
                    <stat.icon className="w-6 h-6 text-pink-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">NEW PROJECT IN MIND?</h3>
                <p className="text-gray-300 text-sm">Get your free quote today</p>
              </div>
              
              <form className="space-y-4" onSubmit={handleFormSubmit}>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
                <input
                  name="phone"
                  type="tel"
                  placeholder="Phone"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
                <input
                  name="company"
                  type="text"
                  placeholder="Company"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
                <select 
                  name="service"
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                >
                  <option value="">Select Service</option>
                  <option value="web-design">Web Design</option>
                  <option value="web-development">Web Development</option>
                  <option value="ecommerce">E-commerce Solutions</option>
                  <option value="digital-marketing">Digital Marketing</option>
                </select>
                <textarea
                  name="message"
                  placeholder="Message"
                  required
                  rows={3}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Submit'
                  )}
                </button>
              </form>
              
              {/* Status Messages */}
              {submitStatus !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mt-4 flex items-center justify-center gap-2 ${
                    submitStatus === 'success' ? 'text-green-400' : 'text-red-400'
                  }`}
                >
                  {submitStatus === 'success' ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <XCircle className="w-5 h-5" />
                  )}
                  <span className="text-sm">
                    {submitStatus === 'success' 
                      ? 'Thank you! Your message has been sent successfully. We\'ll contact you soon!' 
                      : errorMessage
                    }
                  </span>
                </motion.div>
              )}
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-bounce-slow"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-400 rounded-full opacity-20 animate-bounce-slow" style={{ animationDelay: '1s' }}></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 