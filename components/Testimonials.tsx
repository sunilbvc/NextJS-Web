'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      position: 'CEO',
      company: 'TechStart Inc.',
      image: '/api/placeholder/80/80',
      rating: 5,
      content: 'Digi Solence transformed our online presence completely. Their social media strategy increased our engagement by 300% and the new website has improved our conversion rate significantly. The team is professional, responsive, and truly cares about our success.',
      results: ['+300% Social Media Engagement', '+180% Conversion Rate', '+250% Website Traffic']
    },
    {
      id: 2,
      name: 'Michael Chen',
      position: 'Marketing Director',
      company: 'FitnessPro',
      image: '/api/placeholder/80/80',
      rating: 5,
      content: 'Working with Digi Solence has been a game-changer for our fitness brand. Their influencer marketing campaign helped us reach millions of potential customers and our brand awareness has skyrocketed. Highly recommended!',
      results: ['+500% Brand Awareness', '+400% Social Reach', '+280% Sales Growth']
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      position: 'Founder',
      company: 'RestaurantHub',
      image: '/api/placeholder/80/80',
      rating: 5,
      content: 'The team at Digi Solence built us an incredible booking platform that has revolutionized how we manage reservations. The user experience is seamless and our customers love it. Our revenue has increased by 160% since launch.',
      results: ['+160% Revenue Growth', '+220% Booking Rate', '4.8/5 Customer Rating']
    },
    {
      id: 4,
      name: 'David Thompson',
      position: 'CTO',
      company: 'GreenEnergy Solutions',
      image: '/api/placeholder/80/80',
      rating: 5,
      content: 'Digi Solence delivered an exceptional mobile app that exceeded all our expectations. The progressive web app technology they used ensures excellent performance across all devices. Our user retention has improved dramatically.',
      results: ['+400% App Downloads', '+180% User Retention', '+150% Market Share']
    },
    {
      id: 5,
      name: 'Lisa Wang',
      position: 'Brand Manager',
      company: 'FashionForward',
      image: '/api/placeholder/80/80',
      rating: 5,
      content: 'The influencer marketing campaign by Digi Solence was absolutely phenomenal. They connected us with the perfect influencers and the results were beyond our wildest dreams. Our social media presence is now industry-leading.',
      results: ['+350% Brand Awareness', '+500% Social Reach', '+280% Sales Conversion']
    },
    {
      id: 6,
      name: 'Robert Kim',
      position: 'VP of Marketing',
      company: 'EduTech Innovations',
      image: '/api/placeholder/80/80',
      rating: 5,
      content: 'Digi Solence\'s content marketing strategy has positioned us as thought leaders in the education technology space. Our lead generation has increased by 280% and our brand authority has grown significantly.',
      results: ['+280% Lead Generation', '+320% Content Engagement', '+190% Brand Authority']
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-purple-50">
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
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say 
            about their experience working with Digi Solence.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg card-hover border border-gray-100 p-6 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-primary-200">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Results */}
              <div className="space-y-2 mb-6">
                {testimonial.results.map((result, resultIndex) => (
                  <div key={resultIndex} className="flex items-center text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-gray-600">{result}</span>
                  </div>
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Our Success Metrics</h3>
            <p className="text-gray-600">
              Numbers don't lie. Here's what we've achieved for our clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary-600 mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">200+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary-600 mb-2">5+</div>
              <div className="text-gray-600">Years of Excellence</div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            Ready to become our next success story?
          </p>
          <a href="#contact" className="btn-primary">
            Start Your Journey
          </a>
        </motion.div>
      </div>
    </section>
  )
} 