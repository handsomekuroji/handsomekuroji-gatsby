export default (object, info, article, root) => {
  const url = object.url || root
  const author = info.author
  const meta = info.meta
  const account = info.account

  const org = [
    Object.assign(
      {
        '@context': 'http://schema.org',
        '@type': 'Organization',
        '@id': `${url}#publisher`,
        logo: {
          '@type': 'ImageObject',
          url: `${url}/img/amp.png`,
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

  if (article) {
    Object.assign(blog, { blogPosts: article })
  }

  const list = [Object.assign(blog, author)]

  const site = [
    Object.assign(
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        mainEntityOfPage: root,
        image: {
          '@type': 'ImageObject',
          url: `${root}/img/icon.png`,
          width: '512',
          height: '512'
        }
      },
      meta,
      author
    )
  ]

  const person = [
    Object.assign(
      {
        '@context': 'https://schema.org',
        '@type': 'Person',
        '@id': `${url}#author`,
        image: `${root}/img/handsomekuroji.jpg`,
        gender: 'male',
        birthDate: '1987-04-11'
      },
      meta,
      account
    )
  ]

  org.push(...list, ...site, ...person)

  return org
}
