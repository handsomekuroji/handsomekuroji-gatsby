import React from 'react'
import { graphql } from 'gatsby'
import dayjs from 'dayjs'
import styled from 'styled-components'
import { media } from '../components/variable/mixin'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Header from '../components/organisms/header'
import Footer from '../components/organisms/footer'
import Photo from '../images/main/handsomekuroji.jpg'

const StoryMain = styled.main`
  background: var(--c_4);
  box-shadow: rgba(var(--c_9-rgb), 0.1) 0 1px 6px;
  box-sizing: border-box;
  border-radius: 8px;
  margin: 32px auto 0;
  max-width: 620px;
  overflow: hidden;
  padding: 16px;
  width: calc(100% - 16px);
  ${media.xs`
    width: calc(100% - 32px);
  `}
  ${media.s`
    padding: 24px;
    width: calc(100% - 48px);
  `}
  ${media.ms`
    max-width: 690px;
    padding: 32px;
    width: calc(100% - 64px);
  `}
  ${media.m`
    padding: 64px;
  `}
  ${media.ls`
    margin: 0 auto;
  `}
`

const StoryArticle = styled.article`
  display: grid;
  gap: 4px 16px;
  grid-template-columns: auto 1fr;
  margin: 24px 0 0;

  &:first-of-type {
    margin: 0;
  }
`

const StoryBalloon = styled.div`
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

  &::after {
    border: 16px solid transparent;
    border-top-color: var(--c_10);
    content: '';
    left: -8px;
    position: absolute;
    top: 0;
  }
`

const StoryInner = styled.div`
  p {
    letter-spacing: 0.05rem;
    line-height: 1.8;
    margin: 24px 0 0;
    overflow: hidden;
    &:first-of-type {
      margin: 0;
      position: relative;
      z-index: 1;
    }
  }
`

const StoryTime = styled.time`
  font-size: 0.8rem;
`

const StoryIcon = styled.img`
  border-radius: 50%;
  grid-row: 1 / 3;
  height: 48px;
  width: 48px;
  ${media.ms`
    height: 64px;
    width: 64px;
  `}
`

export default function NotFoundPage({ data }) {
  const loopIcon = (
    <StoryIcon src={Photo} width="80" height="80" alt={data.site.siteMetadata.author} loading="lazy" decoding="async" />
  )

  const loopStory = data.allContentfulStory.edges.map((edge, i) => (
    <StoryArticle key={i} id={edge.node.text.id}>
      {loopIcon}
      <StoryTime dateTime={edge.node.createdAt}>
        {dayjs(edge.node.createdAt).format('YYYY.MM.DD ddd HH:mm:ss')}
      </StoryTime>
      <StoryBalloon>
        <StoryInner
          dangerouslySetInnerHTML={{
            __html: edge.node.text.childMarkdownRemark.html
          }}
        />
      </StoryBalloon>
    </StoryArticle>
  ))

  return (
    <Layout>
      <SEO title="Story" />
      <Header inStory />
      <StoryMain>{loopStory}</StoryMain>
      <Footer />
    </Layout>
  )
}

export const pageQuery = graphql`
  query Story {
    allContentfulStory {
      edges {
        node {
          createdAt
          text {
            id
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        author
      }
    }
  }
`
