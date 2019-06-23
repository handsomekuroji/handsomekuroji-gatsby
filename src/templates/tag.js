import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { media } from '../components/variable/mixin'
import Seo from '../components/seo'
import Layout from '../components/layout'
import Header from '../components/organisms/header'
import Footer from '../components/organisms/footer'
import TagHeader from '../components/organisms/tagHeader'
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

export default function Tag({ data, pageContext }) {
  const tag = data.contentfulTag
  const edges = data.allContentfulBlog.edges
  const name = tag.name

  const seo = {
    title: name,
    url: tag.slug,
    description: tag.description.description.replace(/\r?\n/g, '')
  }

  const meta = {
    img: edges.slice(-1)[0].node.thumbnail.file.url,
    title: name,
    count: `投稿数 ${data.allContentfulBlog.totalCount} 件`
  }

  React.useEffect(() => {
    lozad()
  }, [Main])

  return (
    <Layout>
      <Seo meta={seo} />
      <Header />
      <Main>
        <TagHeader header={meta} />
        <Loop edges={edges} tag />
        <Pagination page={pageContext} />
      </Main>
      <Ads />
      <Footer tag={data.allContentfulTag.edges} />
    </Layout>
  )
}

export const query = graphql`
  query TagBySlug($slug: String!, $skip: Int!, $limit: Int!) {
    contentfulTag(slug: { eq: $slug }) {
      slug
      name
      description {
        description
      }
    }
    allContentfulBlog(
      filter: { tag: { elemMatch: { slug: { eq: $slug } } } }
      sort: { fields: [createdAt], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      totalCount
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
