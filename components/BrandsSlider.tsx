'use client'

import { motion } from 'framer-motion'

// Dummy brand logos with placeholder images
const brands = [
  {
    id: 1,
    name: 'TechCorp',
    logo: 'https://via.placeholder.com/120x60/1f2937/ffffff?text=TechCorp',
    alt: 'TechCorp Logo'
  },
  {
    id: 2,
    name: 'InnovateLab',
    logo: 'https://via.placeholder.com/120x60/374151/ffffff?text=InnovateLab',
    alt: 'InnovateLab Logo'
  },
  {
    id: 3,
    name: 'DigitalFlow',
    logo: 'https://via.placeholder.com/120x60/4b5563/ffffff?text=DigitalFlow',
    alt: 'DigitalFlow Logo'
  },
  {
    id: 4,
    name: 'WebSolutions',
    logo: 'https://via.placeholder.com/120x60/6b7280/ffffff?text=WebSolutions',
    alt: 'WebSolutions Logo'
  },
  {
    id: 5,
    name: 'CreativeHub',
    logo: 'https://via.placeholder.com/120x60/9ca3af/ffffff?text=CreativeHub',
    alt: 'CreativeHub Logo'
  },
  {
    id: 6,
    name: 'FutureTech',
    logo: 'https://via.placeholder.com/120x60/d1d5db/1f2937?text=FutureTech',
    alt: 'FutureTech Logo'
  },
  {
    id: 7,
    name: 'SmartBrand',
    logo: 'https://via.placeholder.com/120x60/e5e7eb/1f2937?text=SmartBrand',
    alt: 'SmartBrand Logo'
  },
  {
    id: 8,
    name: 'NextGen',
    logo: 'https://via.placeholder.com/120x60/f3f4f6/1f2937?text=NextGen',
    alt: 'NextGen Logo'
  }
]

export default function BrandsSlider() {
  return (
    <section className="py-8 overflow-hidden">
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
                <div className="w-full h-full bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
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
                <div className="w-full h-full bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center p-4 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
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