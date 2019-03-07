import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import dayjs from 'dayjs'
import { font, color } from '../variable/mixin'
import Thumbnail from '../../components/atoms/thumbnail'

const ArticleBlock = styled.article``

const ArticleLink = styled(Link)`
  border-radius: 8px;
  box-shadow: rgba(19, 27, 54, 0.1) 0px 1px 6px;
  color: ${color.$c_0};
  display: grid;
  font-size: 1rem;
  grid-template-rows: auto 1fr;
  height: 100%;
  position: relative;
  text-decoration: none;
  transition: 0.3s linear;
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
    transition: 0.3s all;
    &::before {
      background: rgba(19, 27, 54, 0.1);
      transition: 0.3s all;
    }
  }
  &:visited {
    color: ${color.$c_0};
  }
`

const ArticleFigure = styled.figure`
  border-radius: 8px 8px 0 0;
  overflow: hidden;
`

const ArticleInner = styled.div`
  background: ${color.$c_4};
  border-radius: 0 0 8px 8px;
  box-sizing: border-box;
  display: grid;
  gap: 16px;
  padding: 24px;
  position: relative;
`

const ArticleTitle = styled.h2`
  font: bold 1rem / 1.5 ${font.$f_1};
`

const ArticleTime = styled.time`
  font-size: 0.8rem;
  margin: auto 0 0;
`

function Article({ postsData }) {
  const post = postsData.node ? postsData.node : postsData
  const date = dayjs(post.createdAt).format('YYYY.MM.DD ddd')
  return (
    <ArticleBlock>
      <ArticleLink to={'/' + post.slug}>
        <ArticleFigure>
          <Thumbnail imgSrc={post.thumbnail.file.url} imgAlt={post.title} />
        </ArticleFigure>
        <ArticleInner>
          <ArticleTitle>{post.title}</ArticleTitle>
          <ArticleTime dateTime={post.createdAt}>{date}</ArticleTime>
        </ArticleInner>
      </ArticleLink>
    </ArticleBlock>
  )
}

Article.propTypes = {
  postsData: PropTypes.object
}

export default Article
