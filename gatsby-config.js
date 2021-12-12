module.exports = {
  siteMetadata: {
    title: 'ydblog',
    description: 'Everyday Blog & Code',
    author: 'ysonbrian',
    siteUrl: `https://ysonbrian.github.io`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `contents`,
        path: `${__dirname}/contents`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-smartypants',
            options: {
              dashes: 'oldschool',
            },
          },

          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 768,
              quality: 100,
              withWebp: true,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {},
          },
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow',
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: ['auto', 'webp'],
          quality: 100,
          placeholder: 'blurred',
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://ysonbrian.github.io',
        stripQueryString: true,
      },
    },
    // {
    //   resolve: 'gatsby-plugin-sitemap',
    //   options: {
    //     output: '/',
    //     query: `
    //   {
    //     site {
    //       siteMetadata {
    //         siteUrl
    //       }
    //     }
    //     allSitePage {
    //       nodes {
    //         path
    //       }
    //     }
    //     allMarkdownRemark {
    //       nodes {
    //         frontmatter {
    //           date
    //         },
    //         fields {
    //           slug
    //         }
    //       }
    //     }
    //   }`,
    //   },
    //   resolvePages: ({
    //     allSitePage: { nodes: allPages },
    //     allMarkdownRemark: { nodes: allPosts },
    //   }) => {
    //     const pathToDateMap = {}

    //     allPosts.map(post => {
    //       pathToDateMap[post.fields.slug] = { date: post.frontmatter.date }
    //     })

    //     const pages = allPages.map(page => {
    //       return { ...page, ...pathToDateMap[page.path] }
    //     })

    //     return pages
    //   },
    //   serialize: ({ path, date }) => {
    //     let entry = {
    //       url: path,
    //       changefreq: 'daily',
    //       priority: 0.5,
    //     }

    //     if (date) {
    //       entry.priority = 0.7
    //       entry.lastmod = date
    //     }

    //     return entry
    //   },
    // },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-robots-txt',
      host: 'https://ysonbrian.github.io',
      sitemap: 'https://ysonbrian.github.io/sitemap/sitemap-index.xml',
      options: {
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
  ],
}
