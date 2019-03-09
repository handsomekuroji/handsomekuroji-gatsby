import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media } from '../../components/variable/mixin'
import Logo from '../atoms/logo'

const SiteHeader = styled.header`
  padding: 32px 0 0;
  text-align: center;
  ${media.ls`padding: 48px 0 0;`}
`

const SiteH1 = styled.h1`
  width: 60px;
  ${media.ms`width: 180px;`}
  ${media.ls`width: 240px;`}
`

const SiteDiv = styled.div`
  width: 60px;
  ${media.ms`width: 180px;`}
  ${media.ls`width: 240px;`}
`

const StyledLink = styled(Link)`
  display: inline-block;
`

export default function Header({ inIndex }) {
  return (
    <SiteHeader>
      <StyledLink to="/">
        {inIndex ? (
          <SiteH1>
            <Logo />
          </SiteH1>
        ) : (
          <SiteDiv>
            <Logo />
          </SiteDiv>
        )}
      </StyledLink>
    </SiteHeader>
  )
}

Header.propTypes = {
  inIndex: PropTypes.bool
}
