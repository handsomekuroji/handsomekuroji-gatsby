import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { media, font } from '../../components/variable/mixin'
import Logo from '../atoms/logo'
import Search from '../atoms/search'

const SiteHeader = styled.header`
  padding: 32px 0 0;
  text-align: center;

  ${media.ls`padding: 48px 0 0;`}
`

const SiteHeading = css`
  display: inline-block;
  width: 60px;

  ${media.ms`width: 180px;`}

  ${media.ls`width: 240px;`}
`

const SiteH1 = styled.h1`
  ${SiteHeading}
`

const SiteDiv = styled.div`
  ${SiteHeading}
`

const OtherHeading = styled.h1`
  font: bold 1.3rem / 1 ${font.$f_1};
  margin: 32px 0 0;

  ${media.xs`font-size: 1.5rem;`}

  ${media.ms`margin: 32px 0 0;`}

  ${media.ls`font-size: 2rem;`}
`

export default function Header({ inIndex, in404, inContent }) {
  const linkLogo = (
    <Link to="/">
      <Logo />
    </Link>
  )

  const heading = inIndex ? <SiteH1>{linkLogo}</SiteH1> : <SiteDiv>{linkLogo}</SiteDiv>
  const otherText = in404 ? '404 Not Found' : inContent || ''
  const otherHead = inIndex || <OtherHeading>{otherText}</OtherHeading>
  const searchBox = inContent ? '' : <Search />

  return (
    <SiteHeader>
      {heading}
      {otherHead}
      {searchBox}
    </SiteHeader>
  )
}

Header.propTypes = {
  inIndex: PropTypes.bool
}
