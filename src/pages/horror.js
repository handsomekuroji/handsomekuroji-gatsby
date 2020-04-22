import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'
import { media } from '~src/components/variable/mixin'
import Seo from '~src/components/seo'
import Layout from '~src/components/layout'
import Header from '~src/components/organisms/header'
import Storeis from '~src/components/molecules/stories'
import Footer from '~src/components/organisms/footer'

const Main = styled.main`
  background: var(--c_4);
  box-shadow: rgba(var(--c_9-rgb), 0.1) 0 1px 6px;
  box-sizing: border-box;
  border-radius: 8px;
  counter-reset: stories;
  margin: 32px auto 0;
  max-width: 620px;
  overflow: hidden;
  width: calc(100% - 16px);

  ${media.xs`
    width: calc(100% - 32px);
  `}

  ${media.s`
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

export default function Horror({ data }) {
  const dark = { class: 'dark' }
  const title = '怖い話'
  const content = data.allContentfulHorror.edges.map((edge, i) => <Storeis key={i} edge={edge} />)

  const seo = {
    title: title,
    url: 'horror',
    description: '夜じゃないと読めない怖い話'
  }

  return (
    <Layout horror>
      <Seo meta={seo} />
      <Helmet bodyAttributes={dark} />
      <Header title={title} />
      <Main>{content}</Main>
      <Footer tag={data.allContentfulTag.edges} />
    </Layout>
  )
}

export const query = graphql`
  query Horror {
    allContentfulHorror(filter: { node_locale: { eq: "ja-JP" } }, sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          slug
          title
          createdAt
        }
      }
    }
    allContentfulTag(filter: { node_locale: { eq: "ja-JP" } }) {
      edges {
        node {
          name
          slug
        }
      }
    }
  }
`
