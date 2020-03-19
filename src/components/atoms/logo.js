import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import big from '~src/images/main/logo-large.svg'
import small from '~src/images/main/logo-small.svg'

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
  const query = useStaticQuery(graphql`
    query LogoQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `).site.siteMetadata

  return (
    <picture>
      <source media="(min-width: 600px)" srcSet={big} />
      <Img src={small} width="180" height="60" alt={query.title} decoding="async" aria-hidden="true" />
    </picture>
  )
}
