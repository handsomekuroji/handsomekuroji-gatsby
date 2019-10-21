import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, Link } from 'gatsby'
import dayjs from 'dayjs'
import styled from 'styled-components'
import { font, media } from '../variable/mixin'
import photo from '../../images/main/handsomekuroji.jpg'

const Container = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: 1fr auto;
  padding: 16px;
  position: relative;

  ${media.s`padding: 32px 24px;`}

  ${media.ms`padding: 48px 32px;`}

  ${media.m`padding: 48px 64px;`}

  ${media.l`gap: 24px;`}

  &::before {
    color: var(--c_8);
    content: '怪';
    font: italic bold 7rem / 1.1 'Georgia', serif;
    left: -24px;
    position: absolute;
    text-indent: 0.1rem;
    top: -16px;
    white-space: pre;

    ${media.m`
      font-size: 10rem
      left: -32px;
      top: -24px;
    `}

    ${media.l`
      font-size: 12rem
      top: -32  px;
    `}
  }
`

const Title = styled.h1`
  color: var(--c_1);
  font: bold 1.3rem / 1.5 ${font.$f_1};
  grid-column: 1 / 3;
  letter-spacing: 0.08rem;
  position: relative;
  text-align: right;

  ${media.xs`font-size: 1.5rem;`}

  ${media.l`font-size: 2rem;`}
`

const Prev = styled(Link)`
  align-items: center;
  border: 1px solid var(--c_1);
  border-radius: 30px;
  box-sizing: border-box;
  color: var(--c_1);
  display: flex;
  font: bold 1.1rem / 1 ${font.$f_1};
  justify-content: center;
  margin: 0 auto 0 0;
  padding: 0 16px;
  position: relative;
  text-decoration: none;
  width: auto;

  &:visited {
    color: var(--c_1);
  }

  @media (hover: hover) {
    &:hover {
      background: rgba(var(--c_1-rgb), 0.2);
    }
  }

  &:focus {
    background: rgba(var(--c_1-rgb), 0.2);
  }
`

const Meta = styled.div`
  display: grid;
  gap: 8px;
  grid-column: 2 / 3;
`

const Img = styled.img`
  border-radius: 50%;
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  height: 40px;
  width: 40px;
`

const Name = styled(Link)`
  color: var(--c_0);
  font: 0.8rem / 1 ${font.$f_1};
  margin: auto 0 0;
  position: relative;
  text-align: right;
  text-decoration: none;

  ${media.m`font-size: 1rem;`}

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

const Time = styled.time`
  align-self: flex-end;
  color: var(--c_7);
  font: 0.8rem / 1 ${font.$f_1};
  margin: 0 0 auto;
  text-align: right;
`

export default function HorrorHeader({ header }) {
  const query = useStaticQuery(graphql`
    query HorrorHeaderQuery {
      site {
        siteMetadata {
          siteUrl
          author
        }
      }
    }
  `).site.siteMetadata

  const date = dayjs(header.date).format('YYYY.MM.DD ddd')
  const label = dayjs(header.date).format('YYYY年M月D日')
  const title = header.title
  const author = query.author

  return (
    <header>
      <Container>
        <Title>{title}</Title>
        <Prev to="horror">一覧へ</Prev>
        <Meta>
          <Name to="/about">{author}</Name>
          <Time dateTime={header.date} aria-label={label}>
            {date}
          </Time>
          <Img src={photo} width="80" height="80" alt={author} loading="lazy" decoding="async" />
        </Meta>
      </Container>
    </header>
  )
}

HorrorHeader.propTypes = {
  header: PropTypes.object
}
