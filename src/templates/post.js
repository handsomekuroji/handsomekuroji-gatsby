import React from 'react'
import AdSense from 'react-adsense'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { font, media } from '../components/variable/mixin'

import lozad from '../plugins/lozad'
import social from '../plugins/social'
import youtube from '../plugins/youtube'
import Replace from '../plugins/replace'

import SEO from '../components/seo'
import Layout from '../components/layout'
import Header from '../components/organisms/header'
import Footer from '../components/organisms/footer'
import PostHeader from '../components/organisms/postHeader'
import PostFooter from '../components/organisms/postFooter'

import PlayIcon from '../images/main/play.svg'

const PostMain = styled.main`
  background: var(--c_4);
  border-radius: 8px;
  margin: 32px auto 0;
  max-width: 620px;
  overflow: hidden;
  width: calc(100% - 32px);
  ${media.xs`
    width: calc(100% - 48px);
  `}
  ${media.ms`
    max-width: 690px;
    width: calc(100% - 64px);
  `}
  ${media.ls`
    margin: 48px auto 0;
  `}
`

const PostContent = styled.div`
  border: 1px solid var(--c_2);
  border-top: 0;
  counter-reset: section;
  font-size: 1rem;
  line-height: 1.8;
  padding: 0 0 32px;
  transition: 0.3s all;
  ${media.m`
    padding: 0 0 48px;
  `}
  section {
    margin: 32px 0 0;
    overflow: hidden;
    padding: 0 24px;
    ${media.ms`
      margin: 48px 0 0;
      padding: 0 32px;
    `}
    ${media.m`
      padding: 0 64px;
    `}
    &:first-of-type {
      margin: 0;
    }
    &::before {
      border-top: 1px solid var(--c_2);
      content: '';
      display: block;
      margin: 0 -24px;
      padding: 0 0 32px;
      ${media.ms`
        margin: 0 -32px;
      `}
      ${media.m`
        margin: 0 -64px;
        padding: 0 0 48px;
      `}
    }
  }
  h2 {
    font: bold 1.3rem / 1.5 ${font.$f_1};
    letter-spacing: 0.1rem;
    position: relative;
    z-index: 1;
    ${media.l`
      font-size: 1.5rem;
    `}
    &::before {
      color: var(--c_2);
      counter-increment: section;
      content: counter(section, decimal-leading-zero);
      font: italic bold 7rem / 1.1 'Georgia', serif;
      left: -32px;
      opacity: 0.5;
      position: absolute;
      text-indent: 0.1rem;
      top: -80px;
      -webkit-text-stroke: 0;
      white-space: pre;
      z-index: -1;
      ${media.m`
        font-size: 10rem
        left: -80px;
        top: -112px;
      `}
      ${media.l`
        font-size: 12rem
        top: -128px;
      `}
    }
  }
  p {
    letter-spacing: 0.05rem;
    margin: 24px 0 0;
    overflow: hidden;
  }
  ul {
    list-style: disc;
    margin: 24px 0 0;
    padding: 0 0 0 20px;
  }
  figure {
    border-radius: 12px;
    margin: 32px 0;
    overflow: hidden;
    &:last-child {
      margin: 32px 0 0;
    }
  }
  figcaption {
    background: var(--c_5);
    box-sizing: border-box;
    color: var(--c_2);
    font-size: 0.8rem;
    font-weight: bold;
    overflow: hidden;
    padding: 8px 12px;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
  }
  img {
    background: #dfdfdf;
    height: auto;
    vertical-align: bottom;
    width: 100%;
    &.fade {
      background: 0;
    }
  }

  blockquote {
    background: rgba(235, 235, 235, 0.5);
    padding: 16px 32px 24px;
    position: relative;
    margin: 0 -32px;
    ${media.m`
      margin: 0;
    `}
    &[data-title] {
      margin: 0;
      padding: 16px;
      z-index: 1;
      ${media.ms`
        padding: 24px 32px;
      `}
      &::before {
        color: var(--c_4);
        content: attr(data-title);
        font: italic bold 4rem / 1.1 'Georgia', serif;
        left: -8px;
        position: absolute;
        text-indent: 0.1rem;
        top: -16px;
        -webkit-text-stroke: 0;
        white-space: pre;
        z-index: -1;
        ${media.m`
          font-size: 5rem
          left: -16px;
          top: -24px;
        `}
      }
    }

    p {
      font-size: 0.9rem;
      &:first-of-type {
        margin: 0;
        &:first-letter {
          font-size: 2.2rem;
          font-weight: bold;
          float: left;
          line-height: 1.4;
          letter-spacing: 0.2em;
        }
      }
    }
  }
  hr {
    border: 0;
    border-top: 1px solid var(--c_2);
    margin: 32px -32px;
    ${media.m`
      margin: 48px -64px;
    `}
  }
  .twitter-tweet {
    display: grid !important;
    justify-content: center;
    margin: 32px auto 0 !important;
    width: 100% !important;
  }
  .instagram-media {
    box-sizing: border-box;
    margin: 32px auto 0 !important;
    min-width: unset !important;
  }

  .youtube {
    background: var(--c_0);
    position: relative;
    z-index: 1;
    &::before {
      content: '';
      display: block;
      padding: 56.25% 0 0;
    }
    iframe {
      border: 0;
      height: 100%;
      position: absolute;
      top: 0;
      width: 100%;
    }
  }

  .youtube__img {
    object-fit: cover;
    height: 100%;
    position: absolute;
    top: 0;
    transition: 0.2s ease;
    width: 100%;
  }

  .youtube__button {
    bottom: 0;
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
    &::before {
      align-items: center;
      background: url(${PlayIcon}) 50% / 16px 16px rgba(19, 27, 54, 0.8) no-repeat;
      border-radius: 50%;
      bottom: 0;
      content: '';
      display: flex;
      height: 48px;
      justify-content: center;
      left: 0;
      margin: auto;
      opacity: 0.6;
      right: 0;
      transition: 0.2s ease;
      width: 48px;
    }
    &:hover::before {
      background-color: rgba(19, 27, 54, 0.8);
      opacity: 0.8;
    }
  }

  .youtube__icon {
    height: 16px;
    width: 16px;
  }

  .storyline {
    border-radius: 12px;
    margin: 32px 0;
    overflow: hidden;
    position: relative;
    [data-youtube] {
      border-radius: 12px 12px 0 0;
      margin: 0;
      z-index: 2;
    }
    ${media.m`
      [data-youtube] {
        margin: 0;
      }
    `}
  }

  .item {
    background: rgba(235, 235, 235, .5);
    border-radius: 12px;
    display: grid;
    grid-gap: 16px;
    margin: 24px 0 0;
    padding: 32px 16px;
    ${media.ls`
      grid-auto-flow: column;
      grid-gap: 32px;
      padding: 32px;
    `}
  }

  .item__figure {
    margin: 0 auto;
    position: relative;
    width: 160px;
    &::before {
      backface-visibility: hidden;
      background: rgba(19, 27, 54, 0.8);
      border-radius: 24px;
      bottom: 0;
      content: '';
      display: block;
      filter: blur(8px);
      height: 16px;
      left: 0;
      margin: auto;
      min-width: 80px;
      position: absolute;
      right: 0;
      width: calc(100% - 48px);
    }
    ${media.ls`
      margin: 0 0 0 auto;
    `}
  }

  .item__img {
    border-radius: 6px;
    height: auto;
    position: relative;
    width: 100%;
  }

  .item__name {
    font-weight: bold;
    text-align: center;
    ${media.ls`
      text-align: left;
    `}
  }

  .item__title {
    display: inline-block;
    font: bold 1rem / 1.6 ${font.$f_1};
    margin: 0 8px 0 0;
    &:last-of-type {
      margin: 0;
    }
    ${media.ls`
      font-size: 1.2rem;
    `}
  }

  .item__button {
    display: grid;
    grid-gap: 8px;
    justify-content: center;
    margin: 16px 0 0;
    ${media.s`
      grid-auto-flow: column;
    `}
    ${media.ms`
      grid-gap: 16px;
    `}
    ${media.ls`
      grid-gap: 8px;
      justify-content: flex-start;
    `}
  }

  .item__a {
    align-items: center;
    background: var(--c_0);
    border-radius: 4px;
    box-sizing: border-box;
    color: var(--c_4);
    display: flex;
    font: italic bold 1rem / 1 ${font.$f_1};
    justify-content: center;
    padding: 10px 12px 11px;
    position: relative;
    text-decoration: none;
    width: 160px;
    z-index: 1;
    ${media.s`
      width: 96px;
    `}
    ${media.sm`
      width: 112px;
    `}
    ${media.ms`
      width: 120px;
    `}
    ${media.ls`
      width: 96px;
    `}
    &:hover {
      background: var(--c_7);
      color: var(--c_4);
    }
    &:visited {
      color: var(--c_4);
      &:hover {
        color: var(--c_4);
      }
    }
  }

  .iframe {
    position: relative;
    &::before {
      content: '';
      display: block;
      padding: 56.25% 0 0;
    }
  }

  .iframe__data {
    border: 0;
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
  }
`

const AdSenseContainer = styled.div`
  margin: 32px auto 0;
  max-width: 620px;
  width: 100%;
  ${media.m`
    margin: 48px auto 0;
    max-width: 690px;
    width: calc(100% - 128px);
  `}
`

function postTemplate({ data }) {
  const post = data.contentfulBlog
  const html = Replace(post.content.childMarkdownRemark.html)
  const content = React.useRef()

  const metaData = {
    img: post.thumbnail.file.url,
    title: post.title,
    description: post.description.description,
    url: post.slug
  }

  const headerData = {
    src: post.thumbnail.file.url,
    title: post.title,
    date: post.createdAt,
    desc: Replace(post.description.childMarkdownRemark.html)
  }

  const footerData = {
    title: post.title,
    url: post.slug
  }

  React.useEffect(() => {
    lozad()
    youtube(content.current)
    social('https://platform.twitter.com/widgets.js', 'twitter-tweet', content.current)
  }, [content])

  return (
    <Layout>
      <SEO meta={metaData} />
      <Header />
      <PostMain>
        <article>
          <PostHeader headerData={headerData} />
          <PostContent
            ref={content}
            dangerouslySetInnerHTML={{
              __html: html
            }}
          />
          <PostFooter footerData={footerData} />
        </article>
      </PostMain>
      <AdSenseContainer>
        <AdSense.Google
          client="ca-pub-3005738200116146"
          slot="2919591828"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </AdSenseContainer>
      <Footer alltags={data.allContentfulTag.edges} />
    </Layout>
  )
}

export default postTemplate

export const query = graphql`
  query BlogBySlug($slug: String!) {
    contentfulBlog(slug: { eq: $slug }) {
      slug
      title
      createdAt
      description {
        description
        childMarkdownRemark {
          html
        }
      }
      thumbnail {
        file {
          url
        }
      }
      content {
        childMarkdownRemark {
          html
        }
      }
    }
    allContentfulTag {
      edges {
        node {
          name
          slug
        }
      }
    }
  }
`
