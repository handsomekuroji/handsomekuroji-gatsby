import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { media } from '~src/components/variable/mixin'
import Seo from '~src/components/seo'
import Structured from '~src/components/structured/tag'
import Layout from '~src/components/layout'
import Header from '~src/components/organisms/header'
import Footer from '~src/components/organisms/footer'
import TagHeader from '~src/components/organisms/tagHeader'
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

export default function Tag({ data, pageContext }) {
  const tag = data.contentfulTag
  const edges = data.allContentfulBlog.edges
  const name = tag.name

  const seo = {
    title: name,
    url: tag.slug,
    description: tag.description.description.replace(/\r?\n/g, ''),
  }

  const meta = {
    img: edges.slice(-1)[0].node.thumbnail.localFile.childImageSharp.fluid.src,
    title: name,
    url: tag.slug,
    description: tag.description.description.replace(/\r?\n/g, ''),
    date: tag.createdAt,
    update: tag.updatedAt,
    count: `投稿数 ${data.allContentfulBlog.totalCount} 件`,
  }

  return (
    <Layout>
      <Seo meta={seo} />
      <Structured edges={edges} page={pageContext} data={meta} />
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
    contentfulTag(node_locale: { eq: "ja-JP" }, slug: { eq: $slug }) {
      slug
      name
      updatedAt
      createdAt
      description {
        description
      }
    }
    allContentfulBlog(
      filter: { node_locale: { eq: "ja-JP" }, tag: { elemMatch: { slug: { eq: $slug } } } }
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
            localFile {
              childImageSharp {
                fluid {
                  src
                  srcSet
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
