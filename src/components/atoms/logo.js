import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Big from '../../images/main/handsomekuroji.svg'
import Small from '../../images/main/hk.svg'

const Img = styled.img`
  height: auto;
  transition: 0.3s;
  vertical-align: bottom;
  width: 100%;

  .dark & {
    filter: invert(100%);
  }
`

export default function Logo() {
  const site = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <picture>
      <source media="(min-width: 600px)" srcSet={Big} />
      <Img
        src={Small}
        width="180"
        height="60"
        alt={site.site.siteMetadata.title}
        loading="lazy"
        decoding="async"
        aria-hidden="true"
      />
    </picture>
  )
}
