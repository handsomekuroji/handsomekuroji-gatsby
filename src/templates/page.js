import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { media } from '../components/variable/mixin'

import lozad from '../plugins/lozad'
import Replace from '../plugins/replace'

import SEO from '../components/seo'
import Layout from '../components/layout'
import Header from '../components/organisms/header'
import Footer from '../components/organisms/footer'
import PageHeader from '../components/organisms/pageHeader'
import PostFooter from '../components/organisms/postFooter'
import Content from '../components/molecules/content'
import Form from '../components/organisms/form'
import Breadcrumb from '../components/organisms/breadcrumb'
import Ads from '../components/atoms/ads'

const PostMain = styled.main`
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

const PostArticle = styled.article`
  background: var(--c_4);
  box-shadow: rgba(var(--c_9-rgb), 0.1) 0 1px 6px;
  border-radius: 8px;
  overflow: hidden;
  transition: 0.3s;
`

export default function postTemplate({ data }) {
  const post = data.contentfulPage
  const html = Replace(post.content.childMarkdownRemark.html)
  const img = post.thumbnail.file.url
  const title = post.title
  const slug = post.slug

  const metaData = {
    img: img,
    title: title,
    url: slug
  }

  const headerData = {
    src: img,
    title: title,
    desc: Replace(post.description.childMarkdownRemark.html)
  }

  const footerData = {
    title: title,
    url: slug
  }

  React.useEffect(() => {
    lozad()
  }, [Content])

  return (
    <Layout>
      <SEO meta={metaData} />
      <Header />
      <PostMain>
        <PostArticle>
          <PageHeader headerData={headerData} />
          <Content contentData={html} />
          <Form />
          <PostFooter footerData={footerData} />
        </PostArticle>
        <Breadcrumb breadcrumbData={footerData} />
      </PostMain>
      <Ads />
      <Footer alltags={data.allContentfulTag.edges} />
    </Layout>
  )
}

export const query = graphql`
  query PageBySlug($slug: String!) {
    contentfulPage(slug: { eq: $slug }) {
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
        file {
          url
        }
      }
      content {
        childMarkdownRemark {
          html
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
