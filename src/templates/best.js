import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { media } from '~src/components/variable/mixin'
import Seo from '~src/components/seo'
import Layout from '~src/components/layout'
import Header from '~src/components/organisms/header'
import Footer from '~src/components/organisms/footer'
import Box from '~src/components/molecules/box'
import Breadcrumb from '~src/components/organisms/breadcrumb'
import Ads from '~src/components/atoms/ads'

const Main = styled.main`
  display: grid;
  grid-gap: 24px;
  margin: 32px auto 0;
  max-width: 620px;
  width: calc(100% - 16px);

  ${media.xs} {
    width: calc(100% - 32px);
  }

  ${media.s} {
    width: calc(100% - 48px);
  }

  ${media.ms} {
    grid-gap: 32px;
    grid-gap: 24px;
    max-width: 690px;
    width: calc(100% - 64px);
  }

  ${media.m} {
    grid-template-columns: 1fr 1fr;
  }

  ${media.ls} {
    margin: 48px auto 0;
  }

  ${media.l} {
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 960px;
  }
`

export default function Best({ data }) {
  const best = data.contentfulBest
  const title = `ぼくが好きな「${best.title}」まとめ`
  const slug = best.slug

  const loop = data.allContentfulFaves.edges.map((edge, i) => <Box key={i} edge={edge} count={i} />)

  const seo = {
    title: title,
    url: `best/${slug}`,
    description: best.content.content.replace(/\r?\n/g, ''),
    best: true
  }

  return (
    <Layout>
      <Seo meta={seo} />
      <Header title={title} />
      <Main>
        {loop}
        <Breadcrumb breadcrumb={seo} />
      </Main>
      <Ads />
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query BestBySlug($slug: String!) {
    contentfulBest(slug: { eq: $slug }) {
      title
      slug
      icon
      content {
        content
        childMarkdownRemark {
          html
        }
      }
    }
    allContentfulFaves(
      filter: { best: { slug: { eq: $slug } }, node_locale: { eq: "ja-JP" } }
      sort: { fields: [createdAt], order: DESC }
    ) {
      totalCount
      edges {
        node {
          title
          text
          url
          content {
            childMarkdownRemark {
              html
            }
          }
          embed
          affiliate
        }
      }
    }
  }
`
