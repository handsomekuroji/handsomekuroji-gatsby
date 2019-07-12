import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import small from '../../../images/main/hk.svg'

const Wrapper = styled.div`
  .logoImg {
    height: auto;
    transition: 0.3s;
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
      <amp-img src={small} width="60" height="58" alt={query.title} class="logoImg" aria-hidden="true"></amp-img>
    </Wrapper>
  )
}
