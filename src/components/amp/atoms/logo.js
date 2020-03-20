import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import small from '~src/images/main/logo-small.svg'

const Wrapper = styled.div`
  amp-img {
    height: auto;
    transition: filter 0.3s ease;
    vertical-align: bottom;
    width: 100%;

    .dark & {
      filter: invert(100%);
    }
  }
`

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

  return (
    <Wrapper>
      <amp-img src={small} width="60" height="58" alt={query.title} aria-hidden="true"></amp-img>
    </Wrapper>
  )
}
