import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, media } from '../variable/mixin'
import Hero from '../atoms/hero'

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

const PostTitle = styled.h1`
  color: var(--c_1);
  font: bold 1.3rem / 1.5 ${font.$f_1};
  grid-column: 1 / 3;
  letter-spacing: 0.08rem;

  ${media.xs`font-size: 1.5rem;`}

  ${media.l`font-size: 2rem;`}
`

export default function PostHeader({ headerData }) {
  const title = headerData.title

  return (
    <header>
      <PostHeaderFig>
        <Hero imgSrc={headerData.src} imgAlt={title} />
      </PostHeaderFig>
      <PostHeaderInner>
        <PostTitle>{title}</PostTitle>
      </PostHeaderInner>
    </header>
  )
}

PostHeader.propTypes = {
  headerData: PropTypes.object
}
