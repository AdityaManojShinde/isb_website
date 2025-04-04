/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://indianstartupbusiness.com", // Replace with your domain
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: "daily",
  priority: 0.7,
  exclude: ["/private", "/secret-page"],
};
