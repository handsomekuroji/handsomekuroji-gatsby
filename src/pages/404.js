import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { media } from '~src/components/variable/mixin'
import Seo from '~src/components/seo'
import Layout from '~src/components/layout'
import Header from '~src/components/organisms/header'
import Footer from '~src/components/organisms/footer'
import Loop from '~src/components/organisms/loop'

const Main = styled.main`
  margin: 32px auto 0;
  max-width: 640px;
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

  ${media.l`
    max-width: 960px;
  `}
`

export default function NotFound({ data }) {
  const title = '404 Not Found'

  const seo = {
    title: title,
    url: '404',
    description: 'このページは存在しません'
  }

  return (
    <Layout>
      <Seo meta={seo} />
      <Header title={title} />
      <Main>
        <Loop edges={data.allContentfulBlog.edges} />
      </Main>
      <Footer tag={data.allContentfulTag.edges} />
    </Layout>
  )
}

export const query = graphql`
  query NotFound {
    allContentfulBlog(filter: { node_locale: { eq: "ja-JP" } }, sort: { fields: [createdAt], order: DESC }, limit: 12) {
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
