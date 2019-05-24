import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import dayjs from 'dayjs'
import { font, media } from '../variable/mixin'
import Thumbnail from '../../components/atoms/thumbnail'

const ArticleLink = styled(Link)`
  border-radius: 8px;
  box-shadow: rgba(var(--c_9-rgb), 0.1) 0px 1px 6px;
  color: var(--c_0);
  display: grid;
  font-size: 0.95rem;
  grid-template-rows: auto 1fr;
  height: 100%;
  position: relative;
  text-decoration: none;
  transition: 0.3s linear;

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

  &:hover {
    transform: translate(0, -2px);
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

const ArticleFigure = styled.figure`
  border-radius: 8px 8px 0 0;
  overflow: hidden;
`

const ArticleInner = styled.div`
  background: var(--c_4);
  border-radius: 0 0 8px 8px;
  box-sizing: border-box;
  display: grid;
  gap: 16px;
  padding: 24px;
  position: relative;
  transition: background 0.3s;
`

const ArticleTitle = styled.h2`
  color: var(--c_1);
  font: bold 0.95rem / 1.5 ${font.$f_1};

  ${media.m`font-size: 1rem;`}
`

const ArticleTime = styled.time`
  color: var(--c_7);
  font-family: ${font.$f_1};
  font-size: 0.8rem;
  margin: auto 0 0;
`

export default function Article({ postsData }) {
  const post = postsData.node ? postsData.node : postsData
  const time = post.createdAt
  const date = dayjs(time).format('YYYY.MM.DD ddd')
  const title = post.title

  return (
    <article>
      <ArticleLink to={'/' + post.slug}>
        <ArticleFigure>
          <Thumbnail imgSrc={post.thumbnail.file.url} imgAlt={title} />
        </ArticleFigure>
        <ArticleInner>
          <ArticleTitle>{title}</ArticleTitle>
          <ArticleTime dateTime={time}>{date}</ArticleTime>
        </ArticleInner>
      </ArticleLink>
    </article>
  )
}

Article.propTypes = {
  postsData: PropTypes.object
}
