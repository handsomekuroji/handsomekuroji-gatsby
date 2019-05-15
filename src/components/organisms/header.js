import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media, font } from '../../components/variable/mixin'
import Logo from '../atoms/logo'
import Search from '../atoms/search'

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

const OtherHeading = styled.h1`
  font: bold 1.5rem / 1 ${font.$f_1};
  margin: 32px 0 0;
  ${media.ms`margin: 32px 0 48px;`}
  ${media.ls`font-size: 2rem;`}
`

const SiteDiv = styled.div`
  width: 60px;
  ${media.ms`width: 180px;`}
  ${media.ls`width: 240px;`}
`

const StyledLink = styled(Link)`
  display: inline-block;
`

export default function Header({ inIndex, in404, inStory }) {
  const heading = inIndex ? (
    <SiteH1>
      <Logo />
    </SiteH1>
  ) : (
    <SiteDiv>
      <Logo />
    </SiteDiv>
  )

  const otherText = in404 ? '404 Not Found' : inStory ? 'Story' : ''
  const otherHead = <OtherHeading>{otherText}</OtherHeading>
  const searchBox = inStory ? '' : <Search />

  return (
    <SiteHeader>
      <StyledLink to="/">{heading}</StyledLink>
      {otherHead}
      {searchBox}
    </SiteHeader>
  )
}

Header.propTypes = {
  inIndex: PropTypes.bool
}
