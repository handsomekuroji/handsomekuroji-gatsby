import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, Link } from 'gatsby'
import dayjs from 'dayjs'
import styled from 'styled-components'
import { font, media } from '../../components/variable/mixin'
import Hero from '../../components/atoms/hero'
import Share from '../../components/atoms/share'
import Photo from '../../images/main/handsomekuroji.jpg'

const PostHeaderFig = styled.figure`
  border-radius: 8px 8px 0 0;
  overflow: hidden;
`

const PostHeaderInner = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: auto 1fr;
  padding: 16px;

  ${media.s`padding: 32px 24px;`}

  ${media.ms`padding: 48px 32px;`}

  ${media.m`padding: 48px 64px;`}

  ${media.l`gap: 24px;`}
`

const PostTagContainer = styled.div`
  grid-column: 1 / 3;
  display: flex;
`

const PostTag = styled(Link)`
  color: var(--c_0);
  font: 0.8rem / 1 ${font.$f_1};
  margin: 0 0 0 8px;
  text-decoration: none;
  transition: 0.1s linear;

  ${media.m`
    font-size: 1rem;
    margin: 0 0 0 12px;
  `}

  &:first-of-type {
    margin: 0;
  }

  &:hover {
    color: var(--c_7);
  }

  &:visited {
    color: var(--c_0);

    &:hover {
      color: var(--c_7);
    }
  }

  &::before {
    content: '#';
  }
`

const PostTitle = styled.h1`
  color: var(--c_1);
  font: bold 1.3rem / 1.5 ${font.$f_1};
  grid-column: 1 / 3;
  letter-spacing: 0.08rem;

  ${media.xs`font-size: 1.5rem;`}

  ${media.l`font-size: 2rem;`}
`
const PostMeta = styled.div`
  display: grid;
  gap: 8px;
`

const PostPhoto = styled.img`
  border-radius: 50%;
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  height: 40px;
  width: 40px;
`

const PostName = styled(Link)`
  color: var(--c_0);
  font: 0.8rem / 1 ${font.$f_1};
  grid-column: 2 / 3;
  margin: auto 0 0;
  text-decoration: none;

  ${media.m`font-size: 1rem;`}

  &:hover {
    color: var(--c_7);
  }

  &:visited {
    color: var(--c_0);

    &:hover {
      color: var(--c_7);
    }
  }
`

const PostTime = styled.time`
  align-self: flex-end;
  color: var(--c_7);
  font: 0.8rem / 1 ${font.$f_1};
  margin: 0 0 auto;
`

const PostPrefaces = styled.div`
  border-top: 1px solid var(--c_8);
  box-sizing: border-box;
  font-size: 0.95rem;
  line-height: 1.8;
  overflow: hidden;
  padding: 16px;
  position: relative;
  width: 100%;
  z-index: 1;

  ${media.s`padding: 32px 24px;`}

  ${media.ms`padding: 48px 32px;`}

  ${media.m`
    font-size: 1rem;
    padding: 48px 64px;
  `}

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

    ${media.s`
      left: -8px;
      top: -48px;
    `}

    ${media.ms`left: 0px;`}

    ${media.m`
      font-size: 10rem
      left: -16px;
      top: -64px;
    `}

    ${media.l`
      font-size: 12rem
      top: -80px;
    `}
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

export default function PostHeader({ headerData }) {
  const siteData = useStaticQuery(graphql`
    query PostHeaderQuery {
      site {
        siteMetadata {
          siteUrl
          author
        }
      }
    }
  `)

  const date = dayjs(headerData.date).format('YYYY.MM.DD ddd')
  const title = headerData.title
  const author = siteData.site.siteMetadata.author

  const headerShare = {
    title: title,
    url: siteData.site.siteMetadata.siteUrl + '/' + headerData.url
  }

  const hederTags = headerData.tag.map((edge, i) => (
    <PostTag key={i} to={`/${edge.slug}`}>
      {edge.name}
    </PostTag>
  ))

  return (
    <header>
      <PostHeaderFig>
        <Hero imgSrc={headerData.src} imgAlt={title} />
      </PostHeaderFig>
      <PostHeaderInner>
        <PostTagContainer>{hederTags}</PostTagContainer>
        <PostTitle>{title}</PostTitle>
        <PostMeta>
          <PostPhoto data-src={Photo} width="80" height="80" alt={author} loading="lazy" decoding="async" />
          <PostName to="/about">{author}</PostName>
          <PostTime dateTime={headerData.date}>{date}</PostTime>
        </PostMeta>
        <Share shareData={headerShare} />
      </PostHeaderInner>
      <PostPrefaces
        dangerouslySetInnerHTML={{
          __html: headerData.desc
        }}
      />
    </header>
  )
}

PostHeader.propTypes = {
  headerData: PropTypes.object
}
