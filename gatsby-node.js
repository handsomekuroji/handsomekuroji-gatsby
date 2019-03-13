const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const loadPosts = new Promise(async resolve => {
    await graphql(`
      {
        allContentfulBlog {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allContentfulBlog.edges.forEach(({ node }) => {
        createPage({
          path: node.slug,
          component: path.resolve('./src/templates/post.js'),
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
        allContentfulBlog(sort: { fields: [createdAt], order: DESC }) {
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
        allContentfulTag {
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

  return Promise.all([loadIndex, loadPosts, loadTags])
}
