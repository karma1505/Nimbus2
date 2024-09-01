module.exports = {
  siteUrl: 'https://nimbustechnologies.in',
  generateRobotsTxt: true, 
  changefreq: 'daily', 
  priority: 0.7, 
  exclude: ['/exclude-this-page'],
  sitemapSize: 50000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: ['/api/', '/private/'], 
      },
      {
        userAgent: 'Googlebot',
        allow: '/', 
      },
    ],
    additionalSitemaps: [
      'https://nimbustechnologies.in/sitemap.xml',
    ],
  },
};
