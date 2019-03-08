import React from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'
import styled from 'styled-components'
import { font, media } from '../../components/variable/mixin'
import Hero from '../../components/atoms/hero'

const PostHeaderFig = styled.figure`
  border-radius: 8px 8px 0 0;
  overflow: hidden;
`

const PostHeaderInner = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: auto 1fr;
  padding: 32px 24px;
  ${media.m`
    padding: 48px 64px;
  `}
  ${media.l`gap: 24px;`}
`

const PostTitle = styled.h1`
  font: bold 1.3rem / 1.5 ${font.$f_1};
  grid-column: 1 / 3;
  letter-spacing: 0.08rem;
  ${media.xs`
    font-size: 1.5rem;
  `}
  ${media.l`
    font-size: 2rem;
  `}
`

const PostTime = styled.time`
  align-self: flex-end;
  color: var(--c_0);
  font: 0.8rem / 1 ${font.$f_0};
  margin: 0 0 0 auto;
  ${media.m`
    font-size: 1rem;
  `}
`

const PostPrefaces = styled.div`
  border-top: 1px solid var(--c_3);
  box-sizing: border-box;
  font-size: 1rem;
  line-height: 1.8;
  padding: 32px 24px;
  width: 100%;
  ${media.ms`
    padding: 32px 32px;
  `}
  ${media.m`
    padding: 48px 64px;
  `}
  p {
    letter-spacing: 0.05rem;
    margin: 24px 0 0;
    overflow: hidden;
    &:first-of-type {
      margin: 0;
    }
  }
`

function PostHeader({ headerData }) {
  const date = dayjs(headerData.date).format('YYYY.MM.DD ddd')
  return (
    <header>
      <PostHeaderFig>
        <Hero imgSrc={headerData.src} imgAlt={headerData.title} />
      </PostHeaderFig>
      <PostHeaderInner>
        <PostTitle>{headerData.title}</PostTitle>
        <PostTime dateTime={headerData.date}>{date}</PostTime>
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

export default PostHeader
