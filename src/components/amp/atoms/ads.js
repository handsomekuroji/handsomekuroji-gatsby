import React from 'react'
import styled from 'styled-components'
import { useStaticQuery } from 'gatsby'
import { media } from '~src/components/variable/mixin'

const Wrapper = styled.div`
  margin: 32px auto 0;
  max-width: 620px;
  width: 100%;

  ${media.m`
    margin: 48px auto 0;
    max-width: 960px;
    width: calc(100% - 64px);
  `}
`

export default function Ads() {
  const query = useStaticQuery(graphql`
    query AmpAdsQuery {
      site {
        siteMetadata {
          adClient
          adSlot
        }
      }
    }
  `).site.siteMetadata

  return (
    <Wrapper>
      <amp-ad
        width="auto"
        height="320"
        type="adsense"
        data-ad-client={query.adClient}
        data-ad-slot={query.adSlot}
        data-auto-format="banner"
      />
    </Wrapper>
  )
}
