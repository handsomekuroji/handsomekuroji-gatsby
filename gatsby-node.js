const path = require('path')
const fs = require('fs')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const loadPosts = new Promise(async resolve => {
    await graphql(`
      {
        allContentfulBlog(filter: { node_locale: { eq: "en-US" } }, sort: { fields: [createdAt], order: DESC }) {
          edges {
            node {
              title
              slug
              thumbnail {
                localFile {
                  childImageSharp {
                    fluid {
                      src
                      srcSet
                      srcSetWebp
                    }
                  }
                }
              }
              tag {
                slug
                name
              }
            }
          }
        }
      }
    `).then(result => {
      const posts = result.data.allContentfulBlog.edges
      posts.forEach((edge, i) => {
        const node = edge.node
        const tag = node.tag.map(edge => {
          return edge.slug
        })
        createPage({
          path: node.slug,
          component: path.resolve('./src/templates/post.js'),
          context: {
            slug: node.slug,
            tag: tag
          }
        })
      })
      resolve()

      const amps = result.data.allContentfulBlog.edges
      amps.forEach((edge, i) => {
        const node = edge.node
        const tag = node.tag.map(edge => {
          return edge.slug
        })
        createPage({
          path: `${node.slug}/amp`,
          component: path.resolve('./src/templates/post.amp.js'),
          context: {
            slug: node.slug,
            tag: tag
          }
        })
      })
      resolve()

      const searchJSON = result.data.allContentfulBlog.edges.map(edge => {
        const node = edge.node
        const tags = node.tag.map(edge => {
          return edge.name
        })
        return {
          title: node.title,
          slug: node.slug,
          image: `${node.thumbnail.localFile.childImageSharp.fluid.src}`,
          tag: tags
        }
      })
      fs.writeFileSync('./static/search.json', JSON.stringify(searchJSON, null, 2))
    })
  })

  const loadPages = new Promise(async resolve => {
    await graphql(`
      {
        allContentfulPage(filter: { node_locale: { eq: "en-US" } }, sort: { fields: [createdAt], order: DESC }) {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      const posts = result.data.allContentfulPage.edges
      posts.forEach((edge, i) => {
        createPage({
          path: edge.node.slug,
          component: path.resolve('./src/templates/page.js'),
          context: {
            slug: edge.node.slug
          }
        })
      })
      resolve()
    })
  })

  const loadBests = new Promise(async resolve => {
    await graphql(`
      {
        allContentfulBest(filter: { node_locale: { eq: "en-US" } }, sort: { fields: [createdAt], order: DESC }) {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      const posts = result.data.allContentfulBest.edges
      posts.forEach((edge, i) => {
        createPage({
          path: 'best/' + edge.node.slug,
          component: path.resolve('./src/templates/best.js'),
          context: {
            slug: edge.node.slug
          }
        })
      })
      resolve()
    })
  })

  const loadHorrors = new Promise(async resolve => {
    await graphql(`
      {
        allContentfulHorror(filter: { node_locale: { eq: "en-US" } }, sort: { fields: [createdAt], order: DESC }) {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `).then(result => {
      const posts = result.data.allContentfulHorror.edges
      posts.forEach((edge, i) => {
        const node = edge.node
        createPage({
          path: 'horror/' + node.slug,
          component: path.resolve('./src/templates/horror.js'),
          context: {
            slug: node.slug
          }
        })
      })
      resolve()
    })
  })

  const loadIndex = new Promise(async resolve => {
    await graphql(`
      {
        allContentfulBlog(filter: { node_locale: { eq: "en-US" } }, sort: { fields: [createdAt], order: DESC }) {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      const posts = result.data.allContentfulBlog.edges
      const limit = 6
      const pages = Math.ceil(posts.length / limit)
      const count = [...Array(pages).keys()]
      Array.from({ length: pages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? '/' : '/' + (i + 1),
          component: path.resolve('./src/templates/index.js'),
          context: {
            length: count,
            pages: pages,
            number: i + 1,
            limit: limit,
            skip: i * limit
          }
        })
      })
      resolve()
    })
  })

  const loadTags = new Promise(async resolve => {
    await graphql(`
      {
        allContentfulTag(filter: { node_locale: { eq: "en-US" } }, sort: { fields: [createdAt], order: DESC }) {
          edges {
            node {
              slug
              blog {
                id
              }
            }
          }
        }
      }
    `).then(result => {
      const tags = result.data.allContentfulTag.edges
      const limit = 6
      tags.map(({ node }) => {
        const posts = node.blog !== null ? node.blog.length : 0
        const pages = Math.ceil(posts / limit)
        const count = [...Array(pages).keys()]
        Array.from({ length: pages }).forEach((_, i) => {
          createPage({
            path: i === 0 ? node.slug : node.slug + '/' + (i + 1),
            component: path.resolve('./src/templates/tag.js'),
            context: {
              length: count,
              slug: node.slug,
              pages: pages,
              number: i + 1,
              limit: limit,
              skip: i * limit
            }
          })
        })
      })
      resolve()
    })
  })

  return Promise.all([loadIndex, loadPosts, loadPages, loadBests, loadHorrors, loadTags])
}
