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
    <section className="py-12 sm:py-16 bg-gray-900/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h3 className="text-lg sm:text-xl text-gray-400 font-medium mb-2">
            Trusted by Leading Brands
          </h3>
          <p className="text-sm text-gray-500">
            We've helped these companies achieve digital excellence
          </p>
        </motion.div>
      </div>

      {/* Full width slider container */}
      <div className="relative overflow-hidden w-full">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-900/50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-900/50 to-transparent z-10 pointer-events-none"></div>
        
        {/* Infinite scrolling container */}
        <div className="flex animate-scroll">
          {/* First set of brands */}
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex-shrink-0 mx-6 sm:mx-8 lg:mx-12"
            >
              <div className="group">
                <div className="w-24 sm:w-28 lg:w-32 h-12 sm:h-14 lg:h-16 bg-white/5 backdrop-blur-sm rounded-lg border border-gray-700/30 flex items-center justify-center p-3 transition-all duration-300 group-hover:bg-white/10 group-hover:border-gray-600/50 group-hover:scale-105">
                  <img
                    src={brand.logo}
                    alt={brand.alt}
                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <p className="text-xs text-gray-500 text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {brand.name}
                </p>
              </div>
            </div>
          ))}
          
          {/* Duplicate set for seamless infinite loop */}
          {brands.map((brand) => (
            <div
              key={`${brand.id}-duplicate`}
              className="flex-shrink-0 mx-6 sm:mx-8 lg:mx-12"
            >
              <div className="group">
                <div className="w-24 sm:w-28 lg:w-32 h-12 sm:h-14 lg:h-16 bg-white/5 backdrop-blur-sm rounded-lg border border-gray-700/30 flex items-center justify-center p-3 transition-all duration-300 group-hover:bg-white/10 group-hover:border-gray-600/50 group-hover:scale-105">
                  <img
                    src={brand.logo}
                    alt={brand.alt}
                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <p className="text-xs text-gray-500 text-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {brand.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 