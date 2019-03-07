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
      bottom: -16px;
      color: var(--c_2);
      counter-increment: section;
      content: counter(section, decimal-leading-zero);
      font: italic bold 7rem / 1.1 'Georgia', serif;
      left: -32px;
      opacity: 0.5;
      position: absolute;
      text-indent: 0.1rem;
      -webkit-text-stroke: 0;
      white-space: pre;
      z-index: -1;
      ${media.m`
        bottom: -32px;
        font-size: 10rem
        left: -80px;
      `}
      ${media.l`
        bottom: -48px;
        font-size: 12rem
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
  hr {
    border: 0;
    border-top: 2px solid var(--c_5);
    margin: 32px -32px;
    @include media(ms) {
      margin: 48px -32px;
    }
    @include media(m) {
      margin: 48px -64px;
    }
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
