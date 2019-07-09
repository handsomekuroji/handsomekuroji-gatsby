import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { media } from '../components/variable/mixin'
import Seo from '../components/seo'
import Layout from '../components/layout'
import Header from '../components/organisms/header'
import Footer from '../components/organisms/footer'
import PostHeader from '../components/organisms/postHeader'
import PostFooter from '../components/organisms/postFooter'
import Content from '../components/molecules/content'
import Breadcrumb from '../components/organisms/breadcrumb'
import Recommend from '../components/organisms/recommend'
import Favorite from '../components/organisms/favorite'
import Ads from '../components/atoms/ads'
import lozad from '../plugins/lozad'
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

export default function Post({ data }) {
  const post = data.contentfulBlog
  const html = Replace(post.content.childMarkdownRemark.html)
  const img = post.thumbnail.file.url
  const title = post.title
  const slug = post.slug
  const posts = data.allContentfulBlog.edges
  const faves = post.faves

  const seo = {
    img: img,
    title: title,
    url: slug,
    description: post.description.description
  }

  const meta = Object.assign(seo, {
    description: Replace(post.description.childMarkdownRemark.html),
    date: post.createdAt,
    tag: post.tag
  })

  const recommend = posts ? <Recommend edges={posts} /> : ''
  const favorite = faves ? <Favorite edges={faves} /> : ''

  React.useEffect(() => {
    lozad()
  }, [Content])

  return (
    <Layout>
      <Seo meta={seo} />
      <Header />
      <Main>
        <Article>
          <PostHeader header={meta} />
          <Content content={html} />
          <PostFooter footer={meta} />
        </Article>
        {favorite}
        {recommend}
        <Breadcrumb breadcrumb={meta} />
      </Main>
      <Ads />
      <Footer tag={data.allContentfulTag.edges} />
    </Layout>
  )
}

export const query = graphql`
  query BlogBySlug($slug: String!, $tag: [String!]) {
    contentfulBlog(slug: { eq: $slug }) {
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
      tag {
        name
        slug
      }
      faves {
        affiliate
        title
        url
      }
    }
    allContentfulBlog(
      filter: { tag: { elemMatch: { slug: { in: $tag } } }, slug: { ne: $slug } }
      sort: { fields: [createdAt], order: DESC }
      limit: 6
    ) {
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
