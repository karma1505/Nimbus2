module.exports = {
  siteUrl: 'https://nimbustechnologies.in',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.8,
  exclude: ['/api/*', '/private/*', '/admin/*'],
  sitemapSize: 50000,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: ['/api/', '/private/', '/admin/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://nimbustechnologies.in/sitemap.xml',
      'https://nimbustechnologies.in/sitemap-0.xml',
    ],
  },
  transform: async (config, path) => {
    // Custom priority for different pages
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      };
    }
    if (path === '/web-development') {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      };
    }
    if (path === '/app-development') {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      };
    }
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
