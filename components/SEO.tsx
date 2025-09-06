import Head from 'next/head';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  noindex?: boolean;
  nofollow?: boolean;
  structuredData?: any;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Digi Solence - #1 Social Media Marketing & Web Development Agency in Mumbai',
  description = 'Transform your business with Mumbai\'s leading social media marketing and web development agency. Expert SEO, content marketing, branding, and digital solutions that drive real results.',
  keywords = [
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
    'digital marketing Mumbai'
  ],
  canonical = 'https://digisolence.in',
  ogImage = '/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  noindex = false,
  nofollow = false,
  structuredData
}) => {
  const fullTitle = title.includes('Digi Solence') ? title : `${title} | Digi Solence - Digital Marketing Agency`;
  const fullDescription = description.length > 160 ? description.substring(0, 157) + '...' : description;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      <meta name="keywords" content={keywords.join(', ')} />
      <link rel="canonical" href={canonical} />
      
      {/* Robots */}
      <meta name="robots" content={`${noindex ? 'noindex' : 'index'}, ${nofollow ? 'nofollow' : 'follow'}`} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={`https://digisolence.in${ogImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Digi Solence" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={`https://digisolence.in${ogImage}`} />
      <meta name="twitter:site" content="@digisolence" />
      <meta name="twitter:creator" content="@digisolence" />
      
      {/* Additional SEO Meta Tags */}
      <meta name="author" content="Digi Solence Team" />
      <meta name="publisher" content="Digi Solence" />
      <meta name="copyright" content="Digi Solence" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.country" content="India" />
      <meta name="geo.placename" content="Mumbai" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Theme Color */}
      <meta name="theme-color" content="#3B82F6" />
      <meta name="msapplication-TileColor" content="#3B82F6" />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      )}
    </Head>
  );
};

export default SEO;
