'use client'

import { motion } from 'framer-motion'

// Dummy brand logos with real dummy images
const brands = [
  {
    id: 1,
    name: 'TechCorp',
    logo: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=120&h=60&fit=crop&crop=center',
    alt: 'TechCorp Logo'
  },
  {
    id: 2,
    name: 'InnovateLab',
    logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&crop=center',
    alt: 'InnovateLab Logo'
  },
  {
    id: 3,
    name: 'DigitalFlow',
    logo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=120&h=60&fit=crop&crop=center',
    alt: 'DigitalFlow Logo'
  },
  {
    id: 4,
    name: 'WebSolutions',
    logo: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=120&h=60&fit=crop&crop=center',
    alt: 'WebSolutions Logo'
  },
  {
    id: 5,
    name: 'CreativeHub',
    logo: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=120&h=60&fit=crop&crop=center',
    alt: 'CreativeHub Logo'
  },
  {
    id: 6,
    name: 'FutureTech',
    logo: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=120&h=60&fit=crop&crop=center',
    alt: 'FutureTech Logo'
  },
  {
    id: 7,
    name: 'SmartBrand',
    logo: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=120&h=60&fit=crop&crop=center',
    alt: 'SmartBrand Logo'
  },
  {
    id: 8,
    name: 'NextGen',
    logo: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=120&h=60&fit=crop&crop=center',
    alt: 'NextGen Logo'
  }
]

export default function BrandsSlider() {
  return (
    <section className="py-6 overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-300 mb-4">
            Trusted by Leading Brands
          </h2>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
            We've helped businesses of all sizes achieve their digital goals
          </p>
        </motion.div>
        
        <div className="relative">
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="flex-shrink-0 mx-8 lg:mx-12 flex items-center justify-center"
                style={{ width: '120px', height: '80px' }}
              >
                <div className="w-full h-full bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center p-2 border border-white/20 hover:bg-white/20 transition-all duration-300 group shadow-lg hover:shadow-xl shadow-gray-900/50">
                  <img
                    src={brand.logo}
                    alt={brand.alt}
                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {brands.map((brand) => (
              <div
                key={`duplicate-${brand.id}`}
                className="flex-shrink-0 mx-8 lg:mx-12 flex items-center justify-center"
                style={{ width: '120px', height: '80px' }}
              >
                <div className="w-full h-full bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center p-2 border border-white/20 hover:bg-white/20 transition-all duration-300 group shadow-lg hover:shadow-xl shadow-gray-900/50">
                  <img
                    src={brand.logo}
                    alt={brand.alt}
                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 