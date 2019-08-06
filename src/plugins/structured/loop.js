export default (author, edges, root) => {
  const loop = []

  Array.prototype.slice.call(edges).forEach(edge => {
    const date = edge.node.createdAt
    const img = edge.node.thumbnail.localFile.absolutePath

    const list = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: edge.node.title.replace('&#038;', '&'),
      datePublished: date,
      dateModified: edge.node.updatedAt || date,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `${root}/${edge.node.slug}`
      },
      image: {
        '@type': 'ImageObject',
        url: img ? `${img}` : `${root}/img/ogp.png`,
        width: '1280',
        height: '720'
      }
    }

    loop.push(...[Object.assign(list, author)])
  })

  return loop
}
