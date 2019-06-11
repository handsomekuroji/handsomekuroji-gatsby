import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { media } from '../components/variable/mixin'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Header from '../components/organisms/header'
import Footer from '../components/organisms/footer'
import Best from '../components/organisms/best'
import Loop from '../components/organisms/loop'
import Pagination from '../components/molecules/pagination'
import Ads from '../components/atoms/ads'
import lozad from '../plugins/lozad'

const Main = styled.main`
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

export default function Index({ data, pageContext }) {
  React.useEffect(() => {
    lozad()
  }, [Main])

  return (
    <Layout>
      <SEO />
      <Header index />
      <Main>
        <Best edges={data.allContentfulBest.edges} />
        <Loop edges={data.allContentfulBlog.edges} />
        <Pagination page={pageContext} />
      </Main>
      <Ads />
      <Footer tag={data.allContentfulTag.edges} />
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
    allContentfulBest(sort: { fields: [updatedAt], order: DESC }) {
      edges {
        node {
          title
          slug
          icon
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
