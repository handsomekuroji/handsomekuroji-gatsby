import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { media } from '../components/variable/mixin'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Header from '../components/organisms/header'
import Footer from '../components/organisms/footer'
import Loop from '../components/organisms/loop'
import Pagination from '../components/molecules/pagination'
import Ads from '../components/atoms/ads'

const SiteMain = styled.main`
  margin: 32px auto 0;
  max-width: 640px;
  width: calc(100% - 16px);

  ${media.xs`width: calc(100% - 32px);`}

  ${media.s`width: calc(100% - 48px);`}

  ${media.ms`
    max-width: 690px;
    width: calc(100% - 64px);
  `}

  ${media.ls`margin: 48px auto 0;`}

  ${media.l`max-width: 960px;`}
`

export default function IndexPage({ data, pageContext }) {
  return (
    <Layout>
      <SEO />
      <Header inIndex />
      <SiteMain>
        <Loop allPosts={data.allContentfulBlog.edges} />
        <Pagination pagesData={pageContext} />
      </SiteMain>
      <Ads />
      <Footer alltags={data.allContentfulTag.edges} />
    </Layout>
  )
}

export const query = graphql`
  query Index($skip: Int!, $limit: Int!) {
    allContentfulBlog(sort: { fields: [createdAt], order: DESC }, limit: $limit, skip: $skip) {
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
