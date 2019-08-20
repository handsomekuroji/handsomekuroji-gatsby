import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import base from '../../plugins/structured/base'
import article from '../../plugins/structured/article'

export default function StructuredIndex({ data }) {
  const query = useStaticQuery(graphql`
    query StructuredPostQuery {
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

  const object = {
    title: query.title,
    description: query.description,
    url: `${query.siteUrl}/${data.url}`,
    domain: query.domain,
    mail: query.mail,
    twitter: query.twitter,
    facebook: query.facebook,
    author: query.author
  }

  const info = base(object)
  const struct = article(object, info, data, query.siteUrl)

  return (
    <Helmet
      script={[
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify(struct)
        }
      ]}
    />
  )
}

StructuredIndex.propTypes = {
  data: PropTypes.object
}
