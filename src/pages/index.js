import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { media } from '../components/variable/mixin'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Header from '../components/organisms/header'
import Footer from '../components/organisms/footer'
import Loop from '../components/organisms/loop'

const SiteMain = styled.main`
  margin: 32px auto 0;
  max-width: 640px;
  width: calc(100% - 32px);
  ${media.xs`
    width: calc(100% - 48px);
  `}
  ${media.ms`
    max-width: 690px;
  `}
  ${media.ls`
    margin: 48px auto 0;
  `}
  ${media.l`
    max-width: 960px;
  `}
`

function IndexPage({ data }) {
  return (
    <Layout>
      <SEO />
      <Header inIndex />
      <SiteMain>
        <Loop allPosts={data.allContentfulBlog.edges} />
      </SiteMain>
      <Footer alltags={data.allContentfulTag.edges} />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query Index {
    allContentfulBlog(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          slug
          title
          createdAt
          thumbnail {
            file {
              url
            }
          }
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
