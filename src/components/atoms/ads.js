import React from 'react'
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
  React.useEffect(() => {
    if (window) (window.adsbygoogle = window.adsbygoogle || []).push({})
  }, [Wrapper])

  return (
    <Wrapper>
      <ins
        className="adsbygoogle"
        data-ad-client="ca-pub-3005738200116146"
        data-ad-slot="2919591828"
        data-ad-format="rectangle"
        data-full-width-responsive="true"
      />
    </Wrapper>
  )
}
