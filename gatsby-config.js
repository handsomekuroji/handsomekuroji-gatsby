require('dotenv').config()
const env = process.env

module.exports = {
  siteMetadata: {
    title: env.SITE_TITLE,
    description: env.SITE_DESCRIPTION,
    url: env.SITE_URL,
    domain: env.SITE_DOMAIN,
    twitter: env.SITE_TWITTER,
    facebook: env.SITE_FACEBOOK,
    author: env.SITE_AUTHOR,
    rss: {
      title: env.SITE_TITLE,
      description: env.SITE_DESCRIPTION,
      site_url: env.SITE_URL,
      feed_url: `${env.SITE_URL}/feed.xml`,
      author: env.SITE_AUTHOR
    }
  },
  plugins: [
    'gatsby-plugin-eslint',
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-netlify',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        gfm: false,
        plugins: [
          'gatsby-remark-attr',
          'gatsby-remark-sectionize',
          'gatsby-remark-bracketed-spans',
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              rel: 'noopener noreferrer'
            }
          },
          {
            resolve: 'gatsby-remark-custom-blocks',
            options: {
              blocks: {
                simple: {
                  classes: 'simple',
                  title: 'optional'
                },
                info: {
                  classes: 'info',
                  title: 'optional'
                },
                alert: {
                  classes: 'alert',
                  title: 'optional'
                },
                notice: {
                  classes: 'notice',
                  title: 'optional'
                },
                imageSmall: {
                  classes: 'image-small'
                },
                imageMedium: {
                  classes: 'image-medium'
                }
              }
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '1c6og4gj8h99',
        accessToken: env.CTF_CDA_ACCESS_TOKEN
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: env.SITE_TITLE,
        short_name: 'HK',
        description: env.SITE_DESCRIPTION,
        'og:title': env.SITE_TITLE,
        'og:description': env.SITE_DESCRIPTION,
        start_url: '/',
        background_color: '#fcfcfc',
        theme_color: '#fcfcfc',
        display: 'standalone',
        icon: 'src/images/icon.png',
        crossOrigin: 'use-credentials',
        lang: 'ja'
      }
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: ['src/components'],
        postCssPlugins: [
          require('postcss-import')(),
          require('postcss-url')(),
          require('css-mqpacker')({ sort: true }),
          require('cssnano')({ autoprefixer: false }),
          require('autoprefixer')()
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /icon/,
          exclude: /main/
        }
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-68797404-1'
      }
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                rss {
                  title
                  description
                  site_url
                  feed_url
                  author
                }
              }
            }
          }
        `,
        feeds: [
          {
            serialize(ctx) {
              const rss = ctx.query.site.siteMetadata.rss
              return ctx.query.allContentfulBlog.edges.map(edge => ({
                date: edge.node.createdAt,
                title: edge.node.title,
                description: edge.node.description.childMarkdownRemark.html,
                url: rss.site_url + '/' + edge.node.slug,
                guid: rss.site_url + '/' + edge.node.slug,
                custom_elements: [
                  {
                    'content:encoded': edge.node.description.childMarkdownRemark.html
                  }
                ]
              }))
            },
            query: `
              {
                allContentfulBlog(limit: 10, sort: {fields: [createdAt], order: DESC}) {
                  edges {
                    node {
                      title
                      slug
                      createdAt(formatString: "MMMM DD, YYYY")
                      description {
                        childMarkdownRemark {
                          html
                        }
                      }
                    }
                  }
                }
              }
            `,
            output: '/feed.xml'
          }
        ]
      }
    }
  ]
}
