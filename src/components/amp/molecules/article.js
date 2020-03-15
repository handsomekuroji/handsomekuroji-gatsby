import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import dayjs from 'dayjs'
import { font, media } from '../../variable/mixin'
import Thumbnail from '../atoms/thumbnail'

const Anchor = styled(Link)`
  border-radius: 8px;
  box-shadow: rgba(var(--c_9-rgb), 0.1) 0 1px 6px;
  color: var(--c_0);
  display: grid;
  font-size: 0.95rem;
  grid-template-columns: 1fr 1.5fr;
  height: 100%;
  position: relative;
  text-decoration: none;
  transition: 0.3s linear;
  visibility: visible;
  will-change: transform;

  ${media.s`
    grid-template-columns: none;
    grid-template-rows: auto 1fr;
  `}

  ${media.m`font-size: 1rem;`}

  &::before {
    bottom: 0;
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
    transition: 0.3s linear;
    width: calc(100% - 48px);
    z-index: -1;
  }

  @media (hover: hover) {
    &:hover {
      transform: translate(0, -2px);
      transition: 0.3s;

      &::before {
        background: rgba(var(--c_9-rgb), 0.1);
        transition: 0.3s;
      }
    }
  }

  &:visited {
    color: var(--c_0);
  }
`

const Header = styled.header`
  background: var(--c_4);
  border-radius: 0 8px 8px 0;
  box-sizing: border-box;
  display: grid;
  gap: 16px;
  padding: 24px;
  position: relative;
  transition: background 0.3s;

  ${media.s`border-radius: 0 0 8px 8px;`}
`

const Other = styled.h3`
  color: var(--c_1);
  font: bold 0.95rem / 1.5 ${font.$f_1};
  font-feature-settings: 'palt' 1;
  letter-spacing: 0.04em;

  ${media.m`font-size: 1rem;`}
`

const Time = styled.time`
  color: var(--c_7);
  font-family: ${font.$f_1};
  font-size: 0.8rem;
  margin: auto 0 0;
`

export default function Article({ edge }) {
  const post = edge.node ? edge.node : edge
  const date = post.createdAt
  const time = dayjs(date).format('YYYY.MM.DD ddd')
  const label = dayjs(date).format('YYYY年M月D日')
  const title = post.title

  return (
    <article>
      <Anchor to={`/${post.slug}`} state={{ splash: true }}>
        <Thumbnail src={post.thumbnail.localFile.childImageSharp.fluid} alt={title} />
        <Header>
          <Other>{title}</Other>
          <Time dateTime={date} aria-label={label}>
            {time}
          </Time>
        </Header>
      </Anchor>
    </article>
  )
}

Article.propTypes = {
  edge: PropTypes.object
}
