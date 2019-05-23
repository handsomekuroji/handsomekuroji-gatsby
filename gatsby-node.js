const path = require('path')
const fs = require('fs')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const loadPosts = new Promise(async resolve => {
    await graphql(`
      {
        allContentfulBlog(sort: { fields: [createdAt], order: DESC }) {
          edges {
            node {
              title
              slug
              tag {
                name
              }
            }
          }
        }
      }
    `).then(result => {
      const posts = result.data.allContentfulBlog.edges
      posts.forEach((edge, i) => {
        createPage({
          path: edge.node.slug,
          component: path.resolve('./src/templates/post.js'),
          context: {
            slug: edge.node.slug
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
          tag: tags
        }
      })
      fs.writeFileSync('./static/search.json', JSON.stringify(searchJSON, null, 2))
    })
  })

  const loadPages = new Promise(async resolve => {
    await graphql(`
      {
        allContentfulPage(sort: { fields: [createdAt], order: DESC }) {
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
        allContentfulBest(sort: { fields: [createdAt], order: DESC }) {
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
        allContentfulTag(sort: { fields: [createdAt], order: DESC }) {
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

  return Promise.all([loadIndex, loadPosts, loadPages, loadBests, loadTags])
}
