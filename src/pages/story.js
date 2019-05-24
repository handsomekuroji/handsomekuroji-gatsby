import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { media } from '../components/variable/mixin'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Header from '../components/organisms/header'
import Footer from '../components/organisms/footer'
import Balloon from '../components/molecules/balloon'
import lozad from '../plugins/lozad'

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

  ${media.xs`width: calc(100% - 32px);`}

  ${media.s`
    padding: 24px;
    width: calc(100% - 48px);
  `}

  ${media.ms`
    max-width: 690px;
    padding: 32px;
    width: calc(100% - 64px);
  `}

  ${media.m`padding: 64px;`}

  ${media.ls`margin: 48px auto 0;`}
`

export default function NotFoundPage({ data }) {
  const loopStory = data.allContentfulStory.edges.map((edge, i) => <Balloon key={i} balloonData={edge} />)

  const metaData = {
    title: 'Story',
    description: 'ぼくの物語',
    url: 'story'
  }

  React.useEffect(() => {
    lozad()
  }, [StoryMain])

  return (
    <Layout>
      <SEO meta={metaData} />
      <Header inContent="Story" />
      <StoryMain>{loopStory}</StoryMain>
      <Footer />
    </Layout>
  )
}

export const pageQuery = graphql`
  query Story {
    allContentfulStory(sort: { fields: [createdAt], order: DESC }) {
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
  }
`
