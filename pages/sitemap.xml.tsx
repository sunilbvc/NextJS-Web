import { GetServerSideProps } from 'next';

// This function generates the sitemap.xml
const Sitemap = () => {
  return null;
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = 'https://digisolence.in';
  const currentDate = new Date().toISOString().split('T')[0];

  const staticPages = [
    {
      url: '',
      changefreq: 'weekly',
      priority: '1.0',
      lastmod: currentDate,
    },
    {
      url: '/services',
      changefreq: 'monthly',
      priority: '0.9',
      lastmod: currentDate,
    },
    {
      url: '/social-media-marketing',
      changefreq: 'monthly',
      priority: '0.8',
      lastmod: currentDate,
    },
    {
      url: '/web-development',
      changefreq: 'monthly',
      priority: '0.8',
      lastmod: currentDate,
    },
    {
      url: '/seo-services',
      changefreq: 'monthly',
      priority: '0.8',
      lastmod: currentDate,
    },
    {
      url: '/about',
      changefreq: 'monthly',
      priority: '0.7',
      lastmod: currentDate,
    },
    {
      url: '/contact',
      changefreq: 'monthly',
      priority: '0.7',
      lastmod: currentDate,
    },
    {
      url: '/portfolio',
      changefreq: 'monthly',
      priority: '0.6',
      lastmod: currentDate,
    },
    {
      url: '/pricing',
      changefreq: 'monthly',
      priority: '0.6',
      lastmod: currentDate,
    },
    {
      url: '/blog',
      changefreq: 'weekly',
      priority: '0.5',
      lastmod: currentDate,
    },
    {
      url: '/privacy-policy',
      changefreq: 'yearly',
      priority: '0.3',
      lastmod: currentDate,
    },
    {
      url: '/terms-of-service',
      changefreq: 'yearly',
      priority: '0.3',
      lastmod: currentDate,
    },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${staticPages
  .map((page) => {
    return `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  })
  .join('')}
</urlset>`;

  res.setHeader('Content-Type', 'text/xml');
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
