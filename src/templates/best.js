import React from 'react'
import { graphql } from 'gatsby'
import lozad from '../plugins/lozad'
import styled from 'styled-components'
import { media } from '../components/variable/mixin'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Header from '../components/organisms/header'
import Footer from '../components/organisms/footer'
import Box from '../components/molecules/box'
import Ads from '../components/atoms/ads'

const BestMain = styled.main`
  display: grid;
  grid-gap: 24px;
  margin: 32px auto 0;
  max-width: 620px;
  width: calc(100% - 16px);

  ${media.xs`width: calc(100% - 32px);`}

  ${media.s`width: calc(100% - 48px);`}

  ${media.ms`
    grid-gap: 32px;
    grid-gap: 24px;
    max-width: 690px;
    width: calc(100% - 64px);
  `}

  ${media.m`grid-template-columns: 1fr 1fr;`}

  ${media.ls`margin: 48px auto 0;`}

  ${media.l`
    grid-template-columns: 1fr 1fr 1fr;
    max-width: 960px;
  `}
`

export default function bestTemplate({ data }) {
  const best = data.contentfulBest
  const slug = best.slug
  const title = `ぼくが好きな「${best.title}」まとめ`
  const desc = best.content.content.replace(/\r?\n/g, '')

  const loopBox = data.allContentfulFaves.edges.map((edge, i) => (
    <Box key={i} boxData={edge} boxCount={i} boxSlug={slug} />
  ))

  const metaData = {
    title: title,
    description: desc,
    url: `best/${slug}`
  }

  React.useEffect(() => {
    lozad()
  }, [loopBox])

  return (
    <Layout>
      <SEO meta={metaData} />
      <Header inContent={title} />
      <BestMain>{loopBox}</BestMain>
      <Ads />
      <Footer />
    </Layout>
  )
}

export const bestQuery = graphql`
  query BestBySlug($slug: String!) {
    contentfulBest(slug: { eq: $slug }) {
      slug
      title
      thumbnail {
        file {
          url
        }
      }
      content {
        content
        childMarkdownRemark {
          html
        }
      }
    }
    allContentfulFaves(filter: { best: { slug: { eq: $slug } } }, sort: { fields: [createdAt], order: DESC }) {
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
