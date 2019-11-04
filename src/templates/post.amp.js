import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { media } from '../components/variable/mixin'
import Seo from '../components/amp/seo'
import Structured from '../components/structured/post'
import Layout from '../components/amp/layout'
import Header from '../components/amp/organisms/header'
import Footer from '../components/amp/organisms/footer'
import PostHeader from '../components/amp/organisms/postHeader'
import PostFooter from '../components/amp/organisms/postFooter'
import Content from '../components/amp/molecules/content'
import Breadcrumb from '../components/amp/organisms/breadcrumb'
import Recommend from '../components/amp/organisms/recommend'
import Favorite from '../components/amp/organisms/favorite'
import Ads from '../components/amp/atoms/ads'
import Ampify from '../plugins/ampify'

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

export default function Amp({ data }) {
  const post = data.contentfulBlog
  const html = Ampify(post.content.childMarkdownRemark.html)
  const img = post.thumbnail.localFile.childImageSharp.fluid
  const title = post.title
  const slug = post.slug
  const posts = data.allContentfulBlog.edges
  const faves = post.faves

  const seo = {
    img: img.src,
    title: title,
    description: Ampify(post.description.childMarkdownRemark.html).replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, '')
  }

  const structured = Object.assign(seo, {
    date: post.createdAt,
    update: post.updatedAt,
    tag: post.tag,
    url: slug
  })

  const meta = Object.assign({}, structured)
  meta.img = img
  meta.description = Ampify(post.description.childMarkdownRemark.html)

  const recommend = posts ? <Recommend edges={posts} /> : ''
  const favorite = faves ? <Favorite edges={faves} /> : ''

  return (
    <Layout>
      <Seo meta={seo} />
      <Structured data={structured} />
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
  query AmpBySlug($slug: String!, $tag: [String!]) {
    contentfulBlog(slug: { eq: $slug }) {
      slug
      title
      createdAt
      updatedAt
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
          title
          createdAt
          thumbnail {
            localFile {
              childImageSharp {
                fluid {
                  src
                  srcWebp
                  srcSet
                  srcSetWebp
                }
              }
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
