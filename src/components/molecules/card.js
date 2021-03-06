import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font } from '~src/components/variable/mixin'

const Article = styled.article`
  margin: 0 0 0 16px;
  white-space: nowrap;

  &:first-of-type {
    margin: 0;
  }
`

const Anchor = styled(Link)`
  align-items: center;
  border-radius: 8px;
  box-shadow: rgba(var(--c_9-rgb), 0.1) 0 1px 6px;
  color: var(--c_0);
  display: flex;
  justify-content: center;
  position: relative;
  text-decoration: none;
  transition: transform 0.2s ease;

  &::before {
    border-radius: 24px;
    bottom: -7px;
    content: '';
    display: block;
    filter: blur(8px);
    height: 16px;
    left: 0;
    margin: auto;
    min-width: 80px;
    position: absolute;
    right: 0;
    transition: background 0.3s ease;
    width: calc(100% - 48px);
    z-index: -1;
  }

  @media (hover: hover) {
    &:hover {
      transform: translate(0, -2px);

      &::before {
        background: rgba(var(--c_9-rgb), 0.1);
      }
    }
  }

  &:visited {
    color: var(--c_0);
  }
`

const Header = styled.header`
  align-items: center;
  background: var(--c_4);
  border-radius: 8px;
  display: flex;
  padding: 16px;
  position: relative;
`

const Icon = styled.span`
  font: bold 1.2rem / 1 ${font.$f_1};
`

const Title = styled.h3`
  font: bold 0.9rem / 1 ${font.$f_1};
  margin: 0 0 0 2px;
`

export default function Card({ edge }) {
  const best = edge.node
  const title = `ぼくが好きな「${best.title}」まとめ`

  return (
    <Article>
      <Anchor to={`/best/${best.slug}`}>
        <Header>
          <Icon aria-hidden="true" role="img" aria-label={title}>
            {best.icon}
          </Icon>
          <Title>{title}</Title>
        </Header>
      </Anchor>
    </Article>
  )
}

Card.propTypes = {
  edge: PropTypes.object,
}
