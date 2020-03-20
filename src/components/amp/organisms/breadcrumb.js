import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, media } from '~src/components/variable/mixin'
import logo from '~src/images/main/logo-small.svg'

const Navigation = styled.nav`
  background: var(--c_4);
  box-shadow: rgba(var(--c_9-rgb), 0.1) 0 1px 6px;
  border-radius: 8px;
  margin: 16px auto 0;
  overflow: hidden;
  padding: 16px 0 16px 16px;
  position: relative;

  ${media.s`
    margin: 24px 0 0;
    padding: 16px 0;
  `}
`

const Ordered = styled.ol`
  display: flex;
  overflow: scroll;
  white-space: nowrap;

  &::before,
  &::after {
    content: '';
    display: block;
    height: 100%;

    ${media.s`
      padding: 12px;
    `}
  }

  &::after {
    padding: 8px;
  }
`

const Root = styled.li`
  align-items: center;
  display: flex;
  line-height: 1;
`

const List = styled.li`
  align-items: center;
  display: flex;
  line-height: 1;
`

const Separator = styled.li`
  align-items: center;
  display: flex;
  font-size: 1rem;
  line-height: 1;
  margin: 0 8px;

  ${media.s`
    margin: 0 12px;
  `}
`

const Anchor = styled(Link)`
  align-items: center;
  color: var(--c_0);
  display: flex;
  font: 0.9rem / 1 ${font.$f_1};
  position: relative;
  text-decoration: none;

  &:visited {
    color: var(--c_0);
  }

  &::before {
    background: var(--c_0);
    content: '';
    height: 1px;
    left: 0;
    position: absolute;
    right: 0;
    top: 50%;
    transform: scaleX(0) translateY(-50%);
    transform-origin: center right;
    transition: transform 0.2s ease;
  }

  @media (hover: hover) {
    &:hover::before {
      transform: scaleX(1) translateY(-50%);
      transform-origin: center left;
    }
  }

  &:focus::before {
    transform: scaleX(1) translateY(-50%);
    transform-origin: center left;
  }

  amp-img {
    height: auto;
    margin: 0 2px 0 0;
    vertical-align: bottom;
    width: 24px;

    ${media.s`
      margin: 0 4px 0 0;
    `}
  }
`

export default function Breadcrumb({ breadcrumb }) {
  const query = useStaticQuery(graphql`
    query AmpBreadcrumbQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `).site.siteMetadata

  return (
    <Navigation aria-label="breadcrumb">
      <Ordered>
        <Root>
          <Anchor to="/" state={{ splash: true }}>
            <amp-img src={logo} width="24" height="23.38" alt="ロゴ" aria-hidden="true"></amp-img>
            {query.title}
          </Anchor>
        </Root>
        <Separator aria-hidden="true">/</Separator>
        <List>
          <Anchor to={breadcrumb.url}>{breadcrumb.title}</Anchor>
        </List>
      </Ordered>
    </Navigation>
  )
}

Breadcrumb.propTypes = {
  breadcrumb: PropTypes.object
}
