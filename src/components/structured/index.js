import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import base from '~src/plugins/structured/base'
import site from '~src/plugins/structured/site'
import loop from '~src/plugins/structured/loop'

export default function StructuredIndex({ edges, page }) {
  const query = useStaticQuery(graphql`
    query StructuredIndexQuery {
      site {
        siteMetadata {
          title
          description
          siteUrl
          mail
          twitter
          facebook
          author
        }
      }
    }
  `).site.siteMetadata

  const { number } = page
  const root = query.siteUrl
  const current = number === 1 ? root : `${root}/${number}`
  const object = {
    title: query.title,
    description: query.description,
    url: current,
    domain: query.domain,
    mail: query.mail,
    twitter: query.twitter,
    facebook: query.facebook,
    author: query.author,
  }
  const info = base(object)

  const article = loop(info.author, edges, root)
  const struct = site(object, info, article, root)

  return (
    <Helmet
      script={[
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify(struct),
        },
      ]}
    />
  )
}

StructuredIndex.propTypes = {
  edges: PropTypes.array,
  page: PropTypes.object,
}
