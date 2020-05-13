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
  transition: opacity 0.2s ease;
  visibility: visible;

  ${media.s} {
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
      transition: background 0.2s ease;
      width: calc(100% - 48px);
      z-index: -1;
    }

    @media (hover: hover) {
      &:hover {
        opacity: 0.8;

        &::before {
          background: rgba(var(--c_9-rgb), 0.1);
        }
      }
    }

    &:focus {
      opacity: 0.8;

      &::before {
        background: rgba(var(--c_9-rgb), 0.1);
      }
    }
  }

  amp-img {
    height: 160px;
    max-width: 100%;
    width: auto;
  }
`

const List = styled.div`
  max-width: 120px;
  position: relative;
  width: 60vw;

  ${media.s} {
    margin: 0 0 0 16px;
  }

  &:first-of-type {
    margin: 0 0 0 16px;

    ${media.s} {
      margin: 0 0 0 24px;
    }
  }

  &:last-of-type {
    margin: 0 16px 0 0;

    ${media.s} {
      margin: 0 24px 0 0;
    }
  }
`

export default function Image({ edge }) {
  const title = edge.title
  const url = edge.affiliate
  const big = edge.url.replace('.jpg', '._SL320_.jpg')

  return (
    <List>
      <Anchor href={url} target="_blank" rel="noopener noreferrer" aria-label={`${title}をAmazonでチェック`}>
        <amp-img src={big} width="120" height="160" alt={title} aria-hidden="true" layout="responsive"></amp-img>
      </Anchor>
    </List>
  )
}

Image.propTypes = {
  edge: PropTypes.object,
}
