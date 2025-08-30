'use client'

import { motion } from 'framer-motion'
import { Check, Star, Globe, ShoppingCart, Code, ArrowRight } from 'lucide-react'

export default function Pricing() {
  const plans = [
    {
      name: 'Basic Website',
      price: 'Rs 9,999',
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
        '6 months free support',
        'Priority support & maintenance'
      ],
      popular: false
    }
  ]

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
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
                  onClick={scrollToContact}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white shadow-lg'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}>
                  <span className="flex items-center justify-center">
                    Choose your plan
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

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
