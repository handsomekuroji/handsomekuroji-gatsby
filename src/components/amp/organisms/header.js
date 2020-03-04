import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { media } from '../../../components/variable/mixin'
import Logo from '../atoms/logo'

const Wrapper = styled.header`
  padding: 32px 0 0;
  text-align: center;

  ${media.ls`padding: 48px 0 0;`}
`

const Heading = styled.div`
  display: inline-block;
  width: 60px;

  ${media.ms`width: 180px;`}

  ${media.ls`width: 240px;`}
`

export default function Header() {
  return (
    <Wrapper role="banner">
      <Heading>
        <Link to="/" state={{ splash: true }} aria-label="ハンサムクロジのサイト">
          <Logo />
        </Link>
      </Heading>
    </Wrapper>
  )
}
