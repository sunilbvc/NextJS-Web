'use client'

import { useState } from 'react'
import { Menu, X, Phone, Mail } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigation = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ]
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-800 overflow-hidden">
      <div className="px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <div className="w-[140px] h-[68px] flex items-center justify-center overflow-hidden">
              <Image
                src="/rectangle-logo.png"
                alt="Digi Solence Logo"
                width={140}
                height={68}
                className="w-full h-full object-cover filter brightness-0 invert"
                priority
              />
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
            {navigation.map((item) => (
              item.href.startsWith('#') ? (
                <a key={item.name} href={item.href} className="text-gray-300 hover:text-pink-400 font-medium transition-colors duration-200 whitespace-nowrap">
                  {item.name}
                </a>
              ) : (
                <Link key={item.name} href={item.href} className="text-gray-300 hover:text-pink-400 font-medium transition-colors duration-200 whitespace-nowrap">
                  {item.name}
                </Link>
              )
            ))}
          </nav>
          
          {/* Right Side - Contact Info + CTA Button + Mobile Menu */}
          <div className="flex items-center space-x-1 lg:space-x-4">
            {/* Contact Info - Hidden on small screens */}
            <div className="hidden xl:flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Phone className="w-4 h-4" />
                <span>+91 8949648309</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Mail className="w-4 h-4" />
                <span>support@digisolence.in</span>
              </div>
            </div>
            
            {/* CTA Button - Hidden on small screens */}
            <div className="hidden md:block">
              <a href="#contact" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-2 lg:py-3 px-4 lg:px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap text-sm lg:text-base">
                Get Started
              </a>
            </div>
            
            {/* Mobile Menu Button - Always visible on small screens */}
            <button 
              className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors duration-200 border border-white/20 flex-shrink-0" 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? (<X className="w-5 h-5" />) : (<Menu className="w-5 h-5" />)}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                item.href.startsWith('#') ? (
                  <a key={item.name} href={item.href} className="text-gray-300 hover:text-pink-400 font-medium transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
                    {item.name}
                  </a>
                ) : (
                  <Link key={item.name} href={item.href} className="text-gray-300 hover:text-pink-400 font-medium transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
                    {item.name}
                  </Link>
                )
              ))}
              <div className="pt-4">
                <a href="#contact" className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full text-center block">
                  Get Started
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
} 