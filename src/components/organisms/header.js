import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { media, font } from '../../components/variable/mixin'
import Logo from '../atoms/logo'
import Search from '../atoms/search'

const Wrapper = styled.header`
  padding: 32px 0 0;
  text-align: center;

  ${media.ls`padding: 48px 0 0;`}
`

const Css = css`
  display: inline-block;
  width: 60px;

  ${media.ms`width: 180px;`}

  ${media.ls`width: 240px;`}
`

const Title = styled.h1`
  ${Css}
`

const Heading = styled.div`
  ${Css}
`

const Other = styled.h1`
  font: bold 1.3rem / 1 ${font.$f_1};
  margin: 32px 0 0;

  ${media.xs`font-size: 1.5rem;`}

  ${media.ms`margin: 32px 0 0;`}

  ${media.ls`font-size: 2rem;`}
`

export default function Header({ index, title }) {
  const logo = (
    <Link to="/" aria-label="ハンサムクロジのサイト">
      <Logo />
    </Link>
  )

  const heading = index ? <Title>{logo}</Title> : <Heading>{logo}</Heading>
  const other = title && <Other>{title}</Other>
  const search = title ? '' : <Search />

  return (
    <Wrapper role="banner">
      {heading}
      {other}
      {search}
    </Wrapper>
  )
}

Header.propTypes = {
  index: PropTypes.bool,
  title: PropTypes.string
}
