'use client'

import { motion } from 'framer-motion'
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Phone, Mail, MapPin, CheckCircle, XCircle, Loader2 } from 'lucide-react'
import { useState } from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  // Newsletter subscription state
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [isSubscribing, setIsSubscribing] = useState(false)
  const [newsletterStatus, setNewsletterStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [newsletterMessage, setNewsletterMessage] = useState('')

  // Handle newsletter subscription
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      setNewsletterStatus('error')
      setNewsletterMessage('Please enter a valid email address')
      return
    }

    setIsSubscribing(true)
    setNewsletterStatus('idle')
    setNewsletterMessage('')

    try {
      // Import and use Firebase subscription function
      const { subscribeEmail } = await import('../lib/firebase')
      const result = await subscribeEmail(newsletterEmail)
      
      if (result.success) {
        setNewsletterStatus('success')
        setNewsletterMessage('Thank you for subscribing! You\'ll receive updates soon.')
        setNewsletterEmail('')
      } else {
        setNewsletterStatus('error')
        setNewsletterMessage(result.error || 'Subscription failed. Please try again.')
      }
    } catch (error) {
      setNewsletterStatus('error')
      setNewsletterMessage('An unexpected error occurred. Please try again.')
    } finally {
      setIsSubscribing(false)
    }
  }

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
    { name: 'Careers', href: '#' },
    { name: 'Privacy Policy', href: '#' }
  ]

  const services = [
    'Web Design',
    'Web Development',
    'E-commerce Solutions',
    'Digital Marketing',
    'SEO & Analytics',
    'Social Media Marketing',
    'Content Marketing',
    'Branding & Identity'
  ]

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
    { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:text-red-500' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">D</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                    Devnest Digital
                  </h3>
                  <p className="text-xs text-gray-400">Digital Excellence</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed text-sm">
                We're a team of digital innovators passionate about transforming 
                businesses through cutting-edge technology and creative marketing solutions.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 transition-all duration-200 ${social.color}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="min-w-0">
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="min-w-0">
              <h4 className="text-lg font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="min-w-0">
              <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-pink-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 text-sm">
                      Andheri West, Mumbai<br />
                      Maharashtra, India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-pink-500" />
                  <span className="text-gray-300 text-sm">8104691455</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-pink-500" />
                  <span className="text-gray-300 text-sm">hello@devnestdigital.com</span>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="mt-6">
                <h5 className="text-sm font-semibold mb-3">Stay Updated</h5>
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      placeholder="Your email"
                      className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg sm:rounded-l-lg sm:rounded-r-none text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      disabled={isSubscribing}
                      required
                    />
                    <button 
                      type="submit"
                      className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-lg sm:rounded-l-none sm:rounded-r-lg transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm whitespace-nowrap"
                      disabled={isSubscribing}
                    >
                      {isSubscribing ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <CheckCircle className="w-4 h-4" />
                      )}
                      <span className="hidden sm:inline">{isSubscribing ? 'Subscribing...' : 'Subscribe'}</span>
                      <span className="sm:hidden">{isSubscribing ? '...' : '✓'}</span>
                    </button>
                  </div>
                  
                  {/* Status Messages */}
                  {newsletterStatus !== 'idle' && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex items-center gap-2 text-sm ${
                        newsletterStatus === 'success' ? 'text-green-400' : 'text-red-400'
                      }`}
                    >
                      {newsletterStatus === 'success' ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : (
                        <XCircle className="w-4 h-4" />
                      )}
                      <span className="text-xs sm:text-sm">{newsletterMessage}</span>
                    </motion.div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} Devnest Digital. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <motion.a
        href="https://wa.me/15551234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="text-2xl">💬</span>
      </motion.a>
    </footer>
  )
} 