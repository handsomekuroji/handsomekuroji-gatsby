import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, Link } from 'gatsby'
import dayjs from 'dayjs'
import styled from 'styled-components'
import { font, media } from '~src/components/variable/mixin'
import Hero from '~src/components/amp/atoms/hero'
import Share from '~src/components/amp/atoms/share'
import photo from '~src/images/main/profile.jpg'

const Container = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: auto 1fr;
  padding: 16px;

  ${media.s} {
    padding: 32px 24px;
  }

  ${media.ms} {
    padding: 48px 32px;
  }

  ${media.m} {
    padding: 48px 64px;
  }

  ${media.l} {
    gap: 24px;
  }
`

const UnOrdered = styled.ul`
  display: flex;
  grid-column: 1 / 3;
`

const List = styled.li`
  margin: 0 0 0 8px;

  ${media.m} {
    margin: 0 0 0 12px;
  }

  &:first-of-type {
    margin: 0;
  }
`

const Tag = styled(Link)`
  color: var(--c_0);
  font: 0.8rem / 1 ${font.$f_1};
  position: relative;
  text-decoration: none;

  ${media.m} {
    font-size: 1rem;
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

  &:visited {
    color: var(--c_0);
  }
`

const Title = styled.h1`
  color: var(--c_1);
  font: bold 1.3rem / 1.5 ${font.$f_1};
  font-feature-settings: 'palt' 1;
  grid-column: 1 / 3;
  letter-spacing: 0.04em;

  ${media.xs} {
    font-size: 1.5rem;
  }

  ${media.l} {
    font-size: 2rem;
  }
`
const Meta = styled.div`
  display: grid;
  gap: 8px;

  amp-img {
    border-radius: 50%;
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    height: 40px;
    width: 40px;
  }
`

const Name = styled(Link)`
  color: var(--c_0);
  font: 0.8rem / 1 ${font.$f_1};
  grid-column: 2 / 3;
  margin: auto 0 0;
  position: relative;
  text-decoration: none;

  ${media.m} {
    font-size: 1rem;
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

  &:visited {
    color: var(--c_0);
  }
`

const Time = styled.time`
  align-self: flex-end;
  color: var(--c_7);
  font: 0.8rem / 1 ${font.$f_1};
  margin: 0 0 auto;
`

const Prefaces = styled.div`
  border-top: 1px solid var(--c_8);
  box-sizing: border-box;
  font-size: 0.95rem;
  line-height: 1.8;
  overflow: hidden;
  padding: 16px;
  position: relative;
  width: 100%;
  z-index: 1;

  ${media.s} {
    padding: 32px 24px;
  }

  ${media.ms} {
    padding: 48px 32px;
  }

  ${media.m} {
    font-size: 1rem;
    padding: 48px 64px;
  }

  &::before {
    color: var(--c_8);
    content: '00';
    font: italic bold 7rem / 1.1 'Georgia', serif;
    left: -16px;
    position: absolute;
    text-indent: 0.1rem;
    top: -46px;
    white-space: pre;
    z-index: -1;

    ${media.s} {
      left: -8px;
      top: -48px;
    }

    ${media.ms} {
      left: 0;
    }

    ${media.m} {
      font-size: 10rem;
      left: -16px;
      top: -64px;
    }

    ${media.l} {
      font-size: 12rem;
      top: -80px;
    }
  }

  p {
    letter-spacing: 0.05rem;
    margin: 24px 0 0;
    overflow: hidden;

    &:first-of-type {
      margin: 0;
      position: relative;
      z-index: 1;
    }
  }
`

export default function PostHeader({ header }) {
  const query = useStaticQuery(graphql`
    query AmpPostHeaderQuery {
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

  const share = {
    title: title,
    url: `${query.siteUrl}/${header.url}`,
  }

  const tags = header.tag.map((edge, i) => (
    <List key={i}>
      <Tag to={`/${edge.slug}`}>
        <span aria-hidden="true">#</span>
        {edge.name}
      </Tag>
    </List>
  ))

  return (
    <header>
      <Hero src={header.img} alt={title} />
      <Container>
        <UnOrdered>{tags}</UnOrdered>
        <Title>{title}</Title>
        <Meta>
          <amp-img src={photo} width="40" height="40" alt={author}></amp-img>
          <Name to="/about" state={{ splash: true }}>
            {author}
          </Name>
          <Time dateTime={header.date} aria-label={label}>
            {date}
          </Time>
        </Meta>
        <Share meta={share} />
      </Container>
      <Prefaces
        dangerouslySetInnerHTML={{
          __html: header.description,
        }}
      />
    </header>
  )
}

PostHeader.propTypes = {
  header: PropTypes.object,
}
