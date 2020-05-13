import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media } from '~src/components/variable/mixin'

const Anchor = styled.a`
  border-radius: 8px;
  box-shadow: rgba(var(--c_9-rgb), 0.1) 0 1px 6px;
  color: var(--c_0);
  display: block;
  overflow: hidden;
  transition: transform 0.2s ease;
  visibility: visible;
  will-change: transform;

  &::before {
    ${media.s} {
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
      transition: background 0.2s ease;
      width: calc(100% - 48px);
      z-index: -1;
    }
  }

  @media (hover: hover) {
    &:hover {
      transform: translate(0, -2px);

      &::before {
        background: rgba(var(--c_9-rgb), 0.1);
      }
    }
  }

  &:focus {
    transform: translate(0, -2px);

    &::before {
      background: rgba(var(--c_9-rgb), 0.1);
    }
  }
`

const List = styled.li`
  margin: 0 0 0 16px;
  scroll-margin: 0 0 0 16px;
  scroll-snap-align: start;

  &:first-of-type {
    margin: 0;

    ${media.s} {
      scroll-margin-left: 24px;
    }
  }
`

const Img = styled.img`
  height: 160px;
  width: auto;

  ${media.sm} {
    height: 180px;
  }
`

export default function Image({ edge }) {
  const title = edge.title
  const url = edge.affiliate
  const big = edge.url.replace('.jpg', '._SL320_.jpg')

  return (
    <List>
      <Anchor href={url} target="_blank" rel="noopener noreferrer" aria-label={`${title}をAmazonでチェック`}>
        <Img src={big} width="80" height="120" alt={title} loading="lazy" decoding="async" aria-hidden="true" />
      </Anchor>
    </List>
  )
}

Image.propTypes = {
  edge: PropTypes.object,
}
