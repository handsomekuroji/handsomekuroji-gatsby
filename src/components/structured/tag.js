import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import base from '~src/plugins/structured/base'
import collect from '~src/plugins/structured/collect'

export default function StructuredIndex({ page, data }) {
  const query = useStaticQuery(graphql`
    query StructuredTagQuery {
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
  const slug = data.url
  const current = number === 1 ? `${root}/${slug}` : `${root}/${slug}/${number}`
  const object = {
    title: query.title,
    description: query.description,
    url: current,
    domain: query.domain,
    mail: query.mail,
    twitter: query.twitter,
    facebook: query.facebook,
    author: query.author
  }
  const info = base(object)
  const struct = collect(object, info, data, root)

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
  page: PropTypes.object,
  data: PropTypes.object
}
