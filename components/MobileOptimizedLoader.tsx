'use client'

import { useEffect, useState } from 'react'

interface MobileOptimizedLoaderProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

export default function MobileOptimizedLoader({ 
  children, 
  fallback = <div className="lazy-load bg-gray-900 animate-pulse rounded-lg" /> 
}: MobileOptimizedLoaderProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    // Simulate loading delay for mobile optimization
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, isMobile ? 100 : 50) // Shorter delay for mobile
    
    return () => {
      clearTimeout(timer)
      window.removeEventListener('resize', checkMobile)
    }
  }, [isMobile])

  if (!isLoaded) {
    return <>{fallback}</>
  }

  return <>{children}</>
}

// Mobile-specific optimizations
export const MobileOptimizations = () => {
  useEffect(() => {
    // Disable animations on mobile for better performance
    if (window.innerWidth < 768) {
      document.documentElement.style.setProperty('--animation-duration', '0.1s')
    }
    
    // Optimize scroll performance
    let ticking = false
    const optimizeScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Add any scroll optimizations here
          ticking = false
        })
        ticking = true
      }
    }
    
    window.addEventListener('scroll', optimizeScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', optimizeScroll)
    }
  }, [])

  return null
}

