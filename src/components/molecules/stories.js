import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import dayjs from 'dayjs'
import { font, media } from '../variable/mixin'

const Wrapper = styled.article`
  border-top: 2px solid var(--c_3);
  overflow: hidden;
  position: relative;

  &:first-of-type {
    border: 0;
  }

  &::before {
    color: var(--c_8);
    counter-increment: stories;
    content: counter(stories, decimal-leading-zero);
    font: italic bold 7rem / 1.1 'Georgia', serif;
    position: absolute;
    right: -24px;
    text-indent: 0.1rem;
    top: -48px;
    white-space: pre;

    ${media.m`
      font-size: 10rems
      top: -72px;
    `}

    ${media.l`
      font-size: 12rem
      top: -88px;
    `}
  }
`

const Anchor = styled(Link)`
  color: var(--c_0);
  display: block;
  font: bold 1rem / 1.5 ${font.$f_1};
  padding: 16px;
  text-decoration: none;

  ${media.s`padding: 24px;`}

  &:hover {
    background: rgba(var(--c_1-rgb), 0.1);
    transition: 0.3s;

    &::before {
      background: rgba(var(--c_9-rgb), 0.1);
      transition: 0.3s;
    }
  }

  &:visited {
    color: var(--c_0);
  }
`

const Header = styled.header`
  border-radius: 0 0 8px 8px;
  box-sizing: border-box;
  display: grid;
  gap: 8px;
  position: relative;
  transition: background 0.3s;
`

const Title = styled.h2`
  color: var(--c_1);
  font: bold 1rem / 1.5 ${font.$f_1};

  ${media.s`font-size: 1.1rem;`}

  ${media.ms`font-size: 1.2rem;`}
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
    <Wrapper>
      <Anchor to={`horror/${post.slug}`}>
        <Header>
          <Title>{title}</Title>
          <Time dateTime={date} aria-label={label}>
            {time}
          </Time>
        </Header>
      </Anchor>
    </Wrapper>
  )
}

Article.propTypes = {
  edge: PropTypes.object
}
