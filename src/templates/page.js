import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { media } from '~src/components/variable/mixin'
import Seo from '~src/components/seo'
import Layout from '~src/components/layout'
import Header from '~src/components/organisms/header'
import Footer from '~src/components/organisms/footer'
import PageHeader from '~src/components/organisms/pageHeader'
import PostFooter from '~src/components/organisms/postFooter'
import Content from '~src/components/molecules/content'
import Form from '~src/components/organisms/form'
import Breadcrumb from '~src/components/organisms/breadcrumb'
import Ads from '~src/components/atoms/ads'
import Replace from '~src/plugins/replace'

const Main = styled.main`
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
    max-width: 690px;
    width: calc(100% - 64px);
  }

  ${media.ls} {
    margin: 48px auto 0;
  }
`

const Article = styled.article`
  background: var(--c_4);
  border-radius: 8px;
  box-shadow: rgba(var(--c_9-rgb), 0.1) 0 1px 6px;
  overflow: hidden;
`

export default function Page({ data }) {
  const affiliate = data.site.siteMetadata
  const post = data.contentfulPage
  const html = Replace(post.content.childMarkdownRemark.html, affiliate)
  const img = post.thumbnail.localFile.childImageSharp.fluid
  const title = post.title
  const slug = post.slug

  const seo = {
    img: img.src,
    title: title,
    url: slug,
    description: post.description.description,
  }

  const meta = Object.assign(seo, {
    description: Replace(post.description.childMarkdownRemark.html, affiliate),
  })

  meta.img = img

  return (
    <Layout>
      <Seo meta={seo} />
      <Header />
      <Main>
        <Article>
          <PageHeader header={meta} />
          <Content content={html} />
          <Form />
          <PostFooter footer={meta} />
        </Article>
        <Breadcrumb breadcrumb={meta} />
      </Main>
      <Ads />
      <Footer tag={data.allContentfulTag.edges} />
    </Layout>
  )
}

export const query = graphql`
  query PageBySlug($slug: String!) {
    site {
      siteMetadata {
        amazon
        rakuten
        sid
        pid
      }
    }
    contentfulPage(node_locale: { eq: "ja-JP" }, slug: { eq: $slug }) {
      slug
      title
      createdAt
      description {
        description
        childMarkdownRemark {
          html
        }
      }
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
      content {
        childMarkdownRemark {
          html
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
