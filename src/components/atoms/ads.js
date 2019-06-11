import React from 'react'
import AdSense from 'react-adsense'
import styled from 'styled-components'
import { media } from '../../components/variable/mixin'

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
  return (
    <Wrapper>
      <AdSense.Google
        client="ca-pub-3005738200116146"
        slot="2919591828"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </Wrapper>
  )
}
