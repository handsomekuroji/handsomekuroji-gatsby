import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { media } from '../components/variable/mixin'
import Seo from '../components/seo'
import Structured from '../components/structured/index'
import Layout from '../components/layout'
import Header from '../components/organisms/header'
import Footer from '../components/organisms/footer'
import Splash from '../components/atoms/splash'
import BestList from '../components/organisms/list'
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
  const edges = data.allContentfulBlog.edges
  const Image = pageContext.number === 1 ? <Splash /> : ''

  React.useEffect(() => {
    lozad()
    console.log(pageContext)
  }, [Main])

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
    allContentfulBlog(sort: { fields: [createdAt], order: DESC }, limit: $limit, skip: $skip) {
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
                  srcSetWebp
                }
              }
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
