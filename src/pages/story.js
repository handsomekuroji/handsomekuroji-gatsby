import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { media } from '~src/components/variable/mixin'
import Seo from '~src/components/seo'
import Layout from '~src/components/layout'
import Header from '~src/components/organisms/header'
import Footer from '~src/components/organisms/footer'
import Balloon from '~src/components/molecules/balloon'

const Main = styled.main`
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
    margin: 48px auto 0;
  `}
`

export default function NotFoundPage({ data }) {
  const title = 'Story'
  const story = data.allContentfulStory.edges.map((edge, i) => <Balloon key={i} edge={edge} />)

  const seo = {
    title: title,
    url: 'story',
    description: 'ぼくの物語'
  }

  return (
    <Layout>
      <Seo meta={seo} />
      <Header title={title} />
      <Main>{story}</Main>
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query Story {
    allContentfulStory(filter: { node_locale: { eq: "ja-JP" } }, sort: { fields: [createdAt], order: DESC }) {
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
