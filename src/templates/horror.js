import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { media } from '../components/variable/mixin'
import Seo from '../components/seo'
import Layout from '../components/layout'
import Header from '../components/organisms/header'
import Footer from '../components/organisms/footer'
import HorrorHeader from '../components/organisms/horrorHeader'
import PostFooter from '../components/organisms/postFooter'
import Section from '../components/molecules/section'
import Breadcrumb from '../components/organisms/breadcrumb'
import Ads from '../components/atoms/ads'
import Replace from '../plugins/replace'

const Main = styled.main`
  margin: 32px auto 0;
  max-width: 620px;
  width: calc(100% - 16px);

  ${media.xs`width: calc(100% - 32px);`}

  ${media.s`width: calc(100% - 48px);`}

  ${media.ms`
    max-width: 690px;
    width: calc(100% - 64px);
  `}

  ${media.ls`margin: 48px auto 0;`}
`

const Article = styled.article`
  background: var(--c_4);
  box-shadow: rgba(var(--c_9-rgb), 0.1) 0 1px 6px;
  border-radius: 8px;
  overflow: hidden;
  transition: 0.3s;
`

export default function Horror({ data }) {
  const dark = { class: 'dark' }

  const post = data.contentfulHorror
  const html = Replace(post.content.childMarkdownRemark.html)
  const title = post.title
  const slug = post.slug

  const seo = {
    title: title,
    url: `horror/${slug}`,
    description: post.description.description
  }

  const meta = Object.assign(seo, {
    description: Replace(post.description.childMarkdownRemark.html),
    date: post.createdAt,
    parent: {
      slug: 'horror',
      title: '怖い話'
    }
  })

  return (
    <Layout horror>
      <Seo meta={seo} />
      <Helmet bodyAttributes={dark} />
      <Header horror />
      <Main>
        <Article>
          <HorrorHeader header={meta} />
          <Section content={html} />
          <PostFooter footer={meta} />
        </Article>
        <Breadcrumb breadcrumb={meta} />
      </Main>
      <Ads />
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query HorrorBySlug($slug: String!) {
    contentfulHorror(slug: { eq: $slug }) {
      slug
      title
      createdAt
      description {
        description
        childMarkdownRemark {
          html
        }
      }
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
