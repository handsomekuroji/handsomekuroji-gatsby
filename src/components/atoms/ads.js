import React from 'react'
import styled from 'styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import { media } from '~src/components/variable/mixin'

const Wrapper = styled.div`
  margin: 32px auto 0;
  max-width: 620px;
  width: 100%;

  ${media.m} {
    margin: 48px auto 0;
    max-width: 960px;
    width: calc(100% - 64px);
  }
`

export default function Ads() {
  const query = useStaticQuery(graphql`
    query AdsQuery {
      site {
        siteMetadata {
          adClient
          adSlot
        }
      }
    }
  `).site.siteMetadata

  React.useEffect(() => {
    if (window) (window.adsbygoogle = window.adsbygoogle || []).push({})
  }, [])

  return (
    <Wrapper>
      <ins
        className="adsbygoogle"
        data-ad-client={query.adClient}
        data-ad-slot={query.adSlot}
        data-ad-format="rectangle"
        data-full-width-responsive="true"
      />
    </Wrapper>
  )
}
