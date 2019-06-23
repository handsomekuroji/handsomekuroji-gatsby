export default object => {
  const url = object.url
  const name = object.title

  const author = {
    copyrightHolder: {
      '@id': `${url}#author`
    },
    publisher: {
      '@id': `${url}#publisher`
    },
    author: {
      '@id': `${url}#author`
    },
    editor: {
      '@id': `${url}#author`
    }
  }

  const meta = {
    url,
    name,
    alternateName: name,
    description: object.description
  }

  const account = {
    sameAs: [`https://twitter.com/${object.twitter}`, `https://www.facebook.com/${object.facebook}`]
  }

  return {
    author,
    meta,
    account
  }
}
