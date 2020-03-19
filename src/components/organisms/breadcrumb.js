import React from 'react'
import { useStaticQuery, Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, media } from '../../components/variable/mixin'
import logo from '../../images/main/logo-small.svg'

const Navigation = styled.nav`
  background: var(--c_4);
  box-shadow: rgba(var(--c_9-rgb), 0.1) 0 1px 6px;
  border-radius: 8px;
  margin: 16px auto 0;
  overflow: hidden;
  padding: 16px 0 16px 16px;
  position: relative;
  transition: 0.3s;

  ${media.s`
    margin: 24px 0 0;
    padding: 16px 0;
  `}

  &.best {
    margin: 0;

    ${media.s`
      margin: 0;
    `}

    ${media.m`
      grid-column: 1 / 3;
    `}

    ${media.l`
      grid-column: 1 / 4;
    `}
  }
`

const Ordered = styled.ol`
  display: flex;
  overflow: scroll;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;

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

const Img = styled.img`
  height: auto;
  margin: 0 2px 0 0;
  transition: 0.3s;
  vertical-align: bottom;
  width: 24px;

  ${media.s`
    margin: 0 4px 0 0;
  `}

  .dark & {
    filter: invert(100%);
  }
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

  @media (hover: hover) {
    &:hover {
      &::before {
        transform: scaleX(1) translateY(-50%);
        transform-origin: center left;
      }
    }
  }

  &:focus {
    &::before {
      transform: scaleX(1) translateY(-50%);
      transform-origin: center left;
    }
  }

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
    transition: transform 0.3s ease;
  }
`

export default function Breadcrumb({ breadcrumb }) {
  const query = useStaticQuery(graphql`
    query BreadcrumbQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `).site.siteMetadata

  const best = breadcrumb.best && 'best'
  const parent = breadcrumb.parent ? (
    <>
      <Separator aria-hidden="true">/</Separator>
      <List>
        <Anchor to={breadcrumb.parent.slug}>{breadcrumb.parent.title}</Anchor>
      </List>
    </>
  ) : (
    ''
  )

  return (
    <Navigation className={best} aria-label="breadcrumb">
      <Ordered>
        <Root>
          <Anchor to="/" state={{ splash: true }}>
            <Img src={logo} alt="ロゴ" decoding="async" aria-hidden="true" />
            {query.title}
          </Anchor>
        </Root>
        {parent}
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
