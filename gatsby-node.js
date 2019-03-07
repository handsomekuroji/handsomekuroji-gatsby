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
          component: path.resolve(`./src/templates/post.js`),
          context: {
            slug: node.slug
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
            }
          }
        }
      }
    `).then(result => {
      result.data.allContentfulTag.edges.forEach(({ node }) => {
        createPage({
          path: node.slug,
          component: path.resolve(`./src/templates/tag.js`),
          context: {
            slug: node.slug
          }
        })
      })
      resolve()
    })
  })

  return Promise.all([loadPosts, loadTags])
}
