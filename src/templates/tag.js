import React from 'react'
import AdSense from 'react-adsense'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { font, media } from '../components/variable/mixin'

import SEO from '../components/seo'
import Layout from '../components/layout'
import Header from '../components/organisms/header'
import Footer from '../components/organisms/footer'
import Loop from '../components/organisms/loop'

const TagMain = styled.main`
  margin: 32px auto 0;
  max-width: 640px;
  width: calc(100% - 32px);
  ${media.xs`
    width: calc(100% - 48px);
  `}
  ${media.ms`
    max-width: 690px;
  `}
  ${media.ls`
    margin: 48px auto 0;
  `}
  ${media.l`
    max-width: 960px;
  `}
`

const TagHeader = styled.header`
  display: grid;
  gap: 8px;
  grid-template-columns: auto 1fr;
  ${media.l`
    gap: 12px 16px;
  `}
`

const TagImage = styled.img`
  border-radius: 50%;
  grid-row: 1 / 3;
  height: 48px;
  object-fit: cover;
  width: 48px;
  ${media.l`
    height: 64px;
    width: 64px;
  `}
`

const TagTitle = styled.h1`
  align-self: flex-end;
  font: italic bold 1.5rem / 1 ${font.$f_1};
  &::before {
    content: '#';
  }
  ${media.l`
    font-size: 2rem;
  `}
`

const TagCount = styled.div`
  font: bold 0.8rem / 1 ${font.$f_1};
  margin: 0 0 0 2px;
  ${media.l`
    font-size: 0.9rem;
  `}
`

const AdSenseContainer = styled.div`
  margin: 32px auto 0;
  max-width: 620px;
  width: 100%;
  ${media.m`
    margin: 48px auto 0;
    max-width: 690px;
    width: calc(100% - 128px);
  `}
`

function tagTemplate({ data }) {
  const tag = data.contentfulTag
  const tagImg = tag.blog.slice(-1)[0].thumbnail.file.url
  const tagCount = '投稿数 ' + tag.blog.length + ' 件'

  const metaData = {
    title: tag.name,
    description: tag.description.description.replace(/\r?\n/g, ''),
    url: tag.slug
  }

  return (
    <Layout>
      <SEO meta={metaData} />
      <Header />
      <TagMain>
        <TagHeader>
          <TagImage
            src={tagImg + '?w=96'}
            data-srcset={tagImg + '?w=128 1040w'}
            alt={tag.name}
            width="48"
            height="48"
          />
          <TagTitle>{tag.name}</TagTitle>
          <TagCount>{tagCount}</TagCount>
        </TagHeader>
        <Loop allPosts={tag.blog} inTags />
      </TagMain>
      <AdSenseContainer>
        <AdSense.Google
          client="ca-pub-3005738200116146"
          slot="2919591828"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </AdSenseContainer>
      <Footer alltags={data.allContentfulTag.edges} />
    </Layout>
  )
}

export default tagTemplate

export const query = graphql`
  query TagBySlug($slug: String!) {
    contentfulTag(slug: { eq: $slug }) {
      slug
      name
      description {
        description
      }
      blog {
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
