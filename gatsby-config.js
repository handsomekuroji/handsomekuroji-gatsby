require('dotenv').config()
const env = process.env

module.exports = {
  siteMetadata: {
    title: env.SITE_TITLE,
    description: env.SITE_DESCRIPTION,
    siteUrl: env.SITE_URL,
    domain: env.SITE_DOMAIN,
    mail: env.SITE_MAIL,
    twitter: env.SITE_TWITTER,
    facebook: env.SITE_FACEBOOK,
    author: env.SITE_AUTHOR,
    verification: env.SITE_VERIFICATION
  },
  plugins: [
    'gatsby-plugin-eslint',
    'gatsby-plugin-offline',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-netlify',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
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
                link: {
                  classes: 'link'
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
      resolve: 'gatsby-plugin-manifest',
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
        icon: 'src/images/main/icon.png',
        crossOrigin: 'use-credentials',
        lang: 'ja'
      }
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        minify: true,
        pure: true
      }
    },
    {
      resolve: `gatsby-plugin-amp`,
      options: {
        analytics: {
          type: 'gtag',
          dataCredentials: 'include',
          config: {
            vars: {
              gtag_id: 'UA-68797404-1',
              config: {
                'UA-68797404-1': {
                  page_location: '{{pathname}}'
                }
              }
            }
          }
        },
        canonicalBaseUrl: 'https://handsomekuroji.com',
        components: [
          'amp-ad',
          'amp-iframe',
          'amp-carousel',
          'amp-social-share',
          'amp-youtube',
          'amp-twitter',
          'amp-instagram'
        ],
        excludedPaths: ['/404*', '/'],
        pathIdentifier: '/amp',
        relAmpHtmlPattern: '{{canonicalBaseUrl}}{{pathname}}{{pathIdentifier}}',
        useAmpClientIdApi: true
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
                title
                description
                siteUrl
                author
              }
            }
          }
        `,
        feeds: [
          {
            serialize(ctx) {
              const rss = ctx.query.site.siteMetadata
              return ctx.query.allContentfulBlog.edges.map(edge => ({
                date: edge.node.createdAt,
                title: edge.node.title,
                description: edge.node.description.childMarkdownRemark.html,
                url: `${rss.siteUrl}/${edge.node.slug}`,
                guid: `${rss.siteUrl}/${edge.node.slug}`,
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
