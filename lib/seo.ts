// SEO Utility Functions

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogImage: string;
  ogType: string;
  noindex?: boolean;
  nofollow?: boolean;
}

// Default SEO configuration
export const defaultSEO: SEOData = {
  title: 'Digi Solence - #1 Social Media Marketing & Web Development Agency in Mumbai',
  description: 'Transform your business with Mumbai\'s leading social media marketing and web development agency. Expert SEO, content marketing, branding, and digital solutions that drive real results. Free hosting, domain & SSL included.',
  keywords: [
    'social media marketing',
    'web development',
    'digital marketing agency',
    'SEO services',
    'content marketing',
    'branding',
    'WhatsApp integration',
    'Google Analytics',
    'free hosting',
    'free domain',
    'SSL certificate',
    'digital marketing Mumbai',
    'social media management',
    'website development',
    'ecommerce development',
    'mobile app development',
    'digital transformation',
    'online marketing',
    'lead generation',
    'conversion optimization'
  ],
  canonical: 'https://digisolence.in',
  ogImage: '/og-image.jpg',
  ogType: 'website'
};

// Service-specific SEO configurations
export const seoConfigs = {
  home: {
    ...defaultSEO,
    title: 'Digi Solence - #1 Social Media Marketing & Web Development Agency in Mumbai',
    description: 'Transform your business with Mumbai\'s leading social media marketing and web development agency. Expert SEO, content marketing, branding, and digital solutions that drive real results. Free hosting, domain & SSL included.',
  },
  
  services: {
    ...defaultSEO,
    title: 'Digital Marketing Services - Social Media, SEO, Web Development | Digi Solence',
    description: 'Comprehensive digital marketing services including social media marketing, SEO, web development, content marketing, and branding. Free hosting, domain & SSL included with all packages.',
    keywords: [
      ...defaultSEO.keywords,
      'digital marketing services',
      'online marketing solutions',
      'marketing strategy',
      'brand development',
      'content strategy'
    ],
    canonical: 'https://digisolence.in/services'
  },
  
  socialMediaMarketing: {
    ...defaultSEO,
    title: 'Social Media Marketing Services in Mumbai - Facebook, Instagram, LinkedIn | Digi Solence',
    description: 'Expert social media marketing services in Mumbai for Facebook, Instagram, LinkedIn, Twitter, and more. Boost engagement, increase followers, and drive conversions with our proven strategies.',
    keywords: [
      'social media marketing',
      'Facebook marketing',
      'Instagram marketing',
      'LinkedIn marketing',
      'Twitter marketing',
      'social media management',
      'social media strategy',
      'content creation',
      'social media advertising',
      'influencer marketing'
    ],
    canonical: 'https://digisolence.in/social-media-marketing'
  },
  
  webDevelopment: {
    ...defaultSEO,
    title: 'Web Development Services in Mumbai - Custom Websites, E-commerce, Mobile Apps | Digi Solence',
    description: 'Professional web development services in Mumbai including custom websites, e-commerce solutions, mobile apps, and web applications. Responsive design, fast loading, and SEO optimized.',
    keywords: [
      'web development',
      'website development',
      'custom websites',
      'ecommerce development',
      'mobile app development',
      'responsive design',
      'web applications',
      'frontend development',
      'backend development',
      'full stack development'
    ],
    canonical: 'https://digisolence.in/web-development'
  },
  
  seoServices: {
    ...defaultSEO,
    title: 'SEO Services in Mumbai - Search Engine Optimization | Digi Solence',
    description: 'Professional SEO services in Mumbai to improve your website\'s search engine rankings. Local SEO, technical SEO, content optimization, and link building strategies that deliver results.',
    keywords: [
      'SEO services',
      'search engine optimization',
      'local SEO',
      'technical SEO',
      'content optimization',
      'link building',
      'keyword research',
      'on-page SEO',
      'off-page SEO',
      'SEO audit'
    ],
    canonical: 'https://digisolence.in/seo-services'
  },
  
  about: {
    ...defaultSEO,
    title: 'About Digi Solence - Leading Digital Marketing Agency in Mumbai',
    description: 'Learn about Digi Solence, Mumbai\'s leading digital marketing agency. Our team of experts delivers innovative solutions for social media marketing, web development, and digital transformation.',
    keywords: [
      'about digi solence',
      'digital marketing agency Mumbai',
      'marketing team',
      'company profile',
      'digital experts',
      'marketing professionals'
    ],
    canonical: 'https://digisolence.in/about'
  },
  
  contact: {
    ...defaultSEO,
    title: 'Contact Digi Solence - Get Your Free Digital Marketing Consultation',
    description: 'Contact Digi Solence for a free consultation on your digital marketing needs. Get expert advice on social media marketing, web development, and SEO strategies.',
    keywords: [
      'contact digi solence',
      'digital marketing consultation',
      'free consultation',
      'marketing advice',
      'get quote',
      'contact us'
    ],
    canonical: 'https://digisolence.in/contact'
  },
  
  portfolio: {
    ...defaultSEO,
    title: 'Portfolio - Digital Marketing & Web Development Projects | Digi Solence',
    description: 'Explore our portfolio of successful digital marketing and web development projects. See how we\'ve helped businesses grow with our innovative solutions.',
    keywords: [
      'portfolio',
      'digital marketing projects',
      'web development projects',
      'case studies',
      'success stories',
      'client work'
    ],
    canonical: 'https://digisolence.in/portfolio'
  },
  
  pricing: {
    ...defaultSEO,
    title: 'Pricing - Digital Marketing & Web Development Packages | Digi Solence',
    description: 'Affordable digital marketing and web development packages. Choose from Basic, Professional, or Enterprise plans. All packages include free hosting, domain, and SSL certificate.',
    keywords: [
      'pricing',
      'digital marketing packages',
      'web development packages',
      'affordable marketing',
      'marketing plans',
      'service packages'
    ],
    canonical: 'https://digisolence.in/pricing'
  }
};

// Generate structured data for different page types
export const generateStructuredData = (type: string, data: any = {}) => {
  const baseUrl = 'https://digisolence.in';
  
  switch (type) {
    case 'organization':
      return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Digi Solence",
        "url": baseUrl,
        "logo": `${baseUrl}/fav-icon.jpeg`,
        "description": "Mumbai's leading social media marketing and web development agency",
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-8949648309",
          "contactType": "customer service"
        },
        "sameAs": [
          "https://www.facebook.com/digisolence",
          "https://www.instagram.com/digisolence",
          "https://www.linkedin.com/company/digisolence",
          "https://twitter.com/digisolence"
        ]
      };
      
    case 'service':
      return {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": data.name || "Digital Marketing Services",
        "description": data.description || "Comprehensive digital marketing solutions",
        "provider": {
          "@type": "Organization",
          "name": "Digi Solence"
        },
        "areaServed": {
          "@type": "City",
          "name": "Mumbai",
          "containedInPlace": {
            "@type": "State",
            "name": "Maharashtra"
          }
        }
      };
      
    case 'webpage':
      return {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": data.title || "Digi Solence",
        "description": data.description || "Digital Marketing Agency",
        "url": data.url || baseUrl,
        "isPartOf": {
          "@type": "WebSite",
          "name": "Digi Solence",
          "url": baseUrl
        }
      };
      
    default:
      return null;
  }
};

// Generate breadcrumb structured data
export const generateBreadcrumbData = (items: Array<{name: string, url: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};

// Generate FAQ structured data
export const generateFAQData = (faqs: Array<{question: string, answer: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

// Utility function to truncate text for meta descriptions
export const truncateText = (text: string, maxLength: number = 160): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - 3) + '...';
};

// Utility function to generate page title
export const generatePageTitle = (pageTitle: string, includeBrand: boolean = true): string => {
  if (!includeBrand || pageTitle.includes('Digi Solence')) {
    return pageTitle;
  }
  return `${pageTitle} | Digi Solence - Digital Marketing Agency`;
};
