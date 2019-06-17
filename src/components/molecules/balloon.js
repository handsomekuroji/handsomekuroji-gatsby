import React from 'react'
import { useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'
import styled from 'styled-components'
import { media } from '../variable/mixin'
import Photo from '../../images/main/handsomekuroji.jpg'

const Article = styled.article`
  display: grid;
  gap: 4px 16px;
  grid-template-columns: auto 1fr;
  margin: 24px 0 0;

  ${media.ms`margin: 32px 0 0;`}

  ${media.m`margin: 48px 0 0;`}

  &:first-of-type {
    margin: 0;
  }
`

const Time = styled.time`
  font-size: 0.8rem;
`

const Img = styled.img`
  border-radius: 50%;
  grid-row: 1 / 3;
  height: auto;
  width: 48px;

  ${media.ms`width: 56px;`}
`

const Container = styled.div`
  background: var(--c_10);
  border-radius: 8px;
  color: var(--c_1);
  font-size: 0.9rem;
  margin: 8px 0 0 8px;
  padding: 12px;
  position: relative;
  text-align: left;
  width: fit-content;

  ${media.ms`
    font-size: 1rem;
    padding: 16px;
  `}

  ${media.m`padding: 32px;`}

  &::after {
    border: 16px solid transparent;
    border-top-color: var(--c_10);
    content: '';
    left: -8px;
    position: absolute;
    top: 0;
  }
`

const Inner = styled.div`
  p {
    letter-spacing: 0.05rem;
    line-height: 1.8;
    margin: 24px 0 0;
    overflow: hidden;
    word-break: break-all;

    &:first-of-type {
      margin: 0;
      position: relative;
      z-index: 1;
    }
  }
`

export default function Balloon({ edge }) {
  const siteData = useStaticQuery(graphql`
    query BalloonQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const date = edge.node.createdAt
  const time = dayjs(date).format('YYYY.MM.DD ddd HH:mm:ss')
  const label = dayjs(date).format('YYYY年M月D日')

  return (
    <Article id={edge.node.text.id}>
      <Img
        data-src={Photo}
        width="80"
        height="80"
        alt={siteData.site.siteMetadata.author}
        loading="lazy"
        decoding="async"
      />
      <Time dateTime={date} aria-label={label}>
        {time}
      </Time>
      <Container>
        <Inner
          dangerouslySetInnerHTML={{
            __html: edge.node.text.childMarkdownRemark.html
          }}
        />
      </Container>
    </Article>
  )
}

Balloon.propTypes = {
  edge: PropTypes.object
}
