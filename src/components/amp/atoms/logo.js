import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import small from '../../../images/main/hk.svg'

export default function Logo() {
  const query = useStaticQuery(graphql`
    query AmpLogoQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `).site.siteMetadata

  return <amp-img src={small} width="60" height="58" alt={query.title} aria-hidden="true"></amp-img>
}
