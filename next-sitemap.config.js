const siteUrl = "https://next-pycon.vercel.app/";

/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl,
    generateIndexSitemap: false,
    exclude: ["/404"],
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [{ userAgent: "*", disallow: ["/404"]},
                   {  userAgent: "*", allow: "/" },
        ],
        additionalSitemaps: [
            `${siteUrl}sitemap.xml`,
            //FOR DYNAMIC PAGES
            `${siteUrl}/server-sitemap.xml`,
          ]
    },
  }