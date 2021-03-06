import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { media } from '~src/components/variable/mixin'
import Seo from '~src/components/seo'
import Structured from '~src/components/structured/index'
import Layout from '~src/components/layout'
import Header from '~src/components/organisms/header'
import Footer from '~src/components/organisms/footer'
import Splash from '~src/components/atoms/splash'
import BestList from '~src/components/organisms/list'
import Loop from '~src/components/organisms/loop'
import Pagination from '~src/components/molecules/pagination'
import Ads from '~src/components/atoms/ads'

const Main = styled.main`
  margin: 32px auto 0;
  max-width: 640px;
  width: calc(100% - 16px);

  ${media.xs} {
    width: calc(100% - 32px);
  }

  ${media.s} {
    width: calc(100% - 48px);
  }

  ${media.ms} {
    max-width: 690px;
    width: calc(100% - 64px);
  }

  ${media.ls} {
    margin: 48px auto 0;
  }

  ${media.l} {
    max-width: 960px;
  }
`

export default function Index({ data, pageContext, location }) {
  const { state = {} } = location
  const { splash } = state || false
  const edges = data.allContentfulBlog.edges
  const Image = pageContext.number === 1 && !splash ? <Splash /> : ''

  return (
    <Layout>
      <Seo />
      <Structured edges={edges} page={pageContext} />
      <Header index />
      <Main>
        <BestList edges={data.allContentfulBest.edges} />
        <Loop edges={edges} />
        <Pagination page={pageContext} />
      </Main>
      <Ads />
      <Footer tag={data.allContentfulTag.edges} />
      {Image}
    </Layout>
  )
}

export const query = graphql`
  query Index($skip: Int!, $limit: Int!) {
    allContentfulBlog(
      filter: { node_locale: { eq: "ja-JP" } }
      sort: { fields: [createdAt], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          slug
          title
          createdAt
          thumbnail {
            localFile {
              childImageSharp {
                fluid {
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  presentationHeight
                  presentationWidth
                }
              }
            }
          }
        }
      }
    }
    allContentfulBest(filter: { node_locale: { eq: "ja-JP" } }, sort: { fields: [updatedAt], order: DESC }) {
      edges {
        node {
          title
          slug
          icon
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
