'use client'

import { motion } from 'framer-motion'
import { Check, Star, Globe, ShoppingCart, Code, ArrowRight } from 'lucide-react'

export default function Pricing() {
  const plans = [
    {
      name: 'WordPress Premium Website',
      price: 'Rs 14,999',
      period: '/one-time',
      description: 'Perfect for small businesses and startups',
      badge: 'BASIC PLAN',
      icon: Globe,
      features: [
        'Responsive design for all devices',
        'Up to 5 pages',
        'Contact form integration',
        'Basic SEO optimization',
        'Social media integration',
        'WhatsApp chat integration',
        'Click-to-call functionality',
        'Google Analytics setup',
        'Basic tracking & reporting',
        'Free hosting and domain (1 year)',
        'Free SSL certificate',
        '1 month free support'
      ],
      popular: false
    },
    {
      name: 'Professional Website',
      subtitle: 'Ecommerce (WordPress, Shopify)',
      price: 'Rs 25,999',
      period: '/one-time',
      description: 'Complete ecommerce solution for growing businesses',
      badge: 'MOST POPULAR',
      icon: ShoppingCart,
      features: [
        'Everything in Basic +',
        'Ecommerce functionality',
        'Product catalog management',
        'Payment gateway integration',
        'Order management system',
        'Inventory tracking',
        'Customer accounts',
        'Advanced WhatsApp integration',
        'Multi-channel call support',
        'Live chat system',
        'Advanced Google Analytics',
        'Ecommerce tracking setup',
        'Conversion goal tracking',
        'Free hosting and domain (1 year)',
        'Free SSL certificate',
        '3 months free support'
      ],
      popular: true
    },
    {
      name: 'Enterprise Website',
      subtitle: 'Custom Laravel Ecommerce or CRM',
      price: 'Starting at Rs 49,999',
      period: '',
      description: 'Custom Laravel solutions for complex business needs',
      badge: 'FOR ENTERPRISES',
      icon: Code,
      features: [
        'Everything in Professional +',
        'Custom Laravel Ecommerce or CRM',
        'Advanced user management & roles',
        'Custom API development',
        'Third-party integrations',
        'Advanced analytics & reporting',
        'Multi-language & multi-currency',
        'Advanced security features',
        'Enterprise WhatsApp Business API',
        'Advanced call center integration',
        'Custom communication workflows',
        'Real-time notifications system',
        'Google Analytics 4 (GA4) setup',
        'Custom event tracking',
        'Advanced conversion funnels',
        'Data studio integration',
        'Free hosting and domain (1 year)',
        'Free SSL certificate',
        '6 months free support',
        'Priority support & maintenance'
      ],
      popular: false
    }
  ]

  const handleChoosePlan = () => {
    const contactForm = document.getElementById('contact')
    if (contactForm) {
      contactForm.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
      
      // Focus on the first input field after scrolling
      setTimeout(() => {
        const firstInput = contactForm.querySelector('input, select, textarea') as HTMLElement
        if (firstInput) {
          firstInput.focus()
        }
      }, 500)
    }
  }

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
          >
            Choose Your <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">Plan</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Transparent pricing with no hidden costs. Choose the plan that best fits your business needs.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-pink-500 scale-105' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    <Star className="w-4 h-4 inline mr-2" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Badge */}
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                  {plan.badge}
                </span>
              </div>

              <div className="p-8">
                {/* Plan Icon */}
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <plan.icon className="w-8 h-8 text-white" />
                </div>

                {/* Plan Name */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                {plan.subtitle && (
                  <p className="text-gray-600 text-sm mb-4">{plan.subtitle}</p>
                )}

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-500 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-2">{plan.description}</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button 
                  onClick={handleChoosePlan}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-lg'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}>
                  <span className="flex items-center justify-center">
                    Choose this plan
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call & WhatsApp Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Communication Services
            </h3>
            <p className="text-gray-600">
              Stay connected with your customers through multiple channels
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* WhatsApp Services */}
            <div className="bg-green-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900">WhatsApp Integration</h4>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  WhatsApp chat widget
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  Automated responses
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  Business API integration
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-2" />
                  Message broadcasting
                </li>
              </ul>
            </div>

            {/* Call Services */}
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900">Call Services</h4>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-blue-500 mr-2" />
                  Click-to-call buttons
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-blue-500 mr-2" />
                  Call tracking & analytics
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-blue-500 mr-2" />
                  IVR system integration
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-blue-500 mr-2" />
                  Call center solutions
                </li>
              </ul>
            </div>

            {/* Google Analytics Services */}
            <div className="bg-orange-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900">Google Analytics</h4>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-orange-500 mr-2" />
                  GA4 setup & configuration
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-orange-500 mr-2" />
                  Conversion tracking
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-orange-500 mr-2" />
                  Custom event tracking
                </li>
                <li className="flex items-center">
                  <Check className="w-4 h-4 text-orange-500 mr-2" />
                  Performance reports
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            All plans include hosting setup, SSL certificate, and basic maintenance for the first month.
          </p>
          <p className="text-gray-600">
            Need a custom solution? <a href="#contact" className="text-pink-600 hover:text-pink-700 font-semibold">Contact us</a> for a personalized quote.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
