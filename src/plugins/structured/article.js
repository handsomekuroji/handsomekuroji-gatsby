export default (object, info, page, root) => {
  const url = object.url || root
  const author = info.author
  const meta = info.meta
  const account = info.account
  const key = []

  Array.prototype.slice.call(page.tag).forEach(edge => {
    key.push(edge.name)
  })
  const words = key.join(',')

  const org = [
    Object.assign(
      {
        '@context': 'http://schema.org',
        '@type': 'Organization',
        '@id': `${url}#publisher`,
        logo: {
          '@type': 'ImageObject',
          url: `${root}/img/amp.png`,
          width: 179,
          height: 60
        },
        foundingDate: '2018-07-30',
        email: object.mail
      },
      meta,
      account
    )
  ]

  const blog = {
    '@context': 'http://schema.org',
    '@type': 'Blog',
    description: object.description
  }

  const list = [Object.assign(blog, author)]

  const person = [
    Object.assign(
      {
        '@context': 'https://schema.org',
        '@type': 'Person',
        '@id': `${url}#author`,
        image: `${root}/img/profile.jpg`,
        gender: 'male',
        birthDate: '1987-04-11'
      },
      meta,
      account
    )
  ]

  const post = [
    Object.assign({
      '@context': 'http://schema.org',
      '@type': 'BlogPosting',
      mainEntityOfPage: url,
      headline: page.title,
      keywords: words,
      datePublished: page.date,
      dateModified: page.update,
      author: {
        '@id': `${url}#author`
      },
      publisher: {
        '@id': `${url}#publisher`
      },
      image: {
        '@type': 'ImageObject',
        url: page.img,
        width: 1280,
        height: 720
      },
      description: page.description,
      isAccessibleForFree: true
    })
  ]

  const bread = [
    Object.assign({
      '@context': 'http://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, item: { '@id': root, name: object.title } },
        {
          '@type': 'ListItem',
          position: 2,
          item: { '@id': url, name: page.title }
        }
      ]
    })
  ]

  org.push(...list, ...post, ...bread, ...person)

  return org
}
