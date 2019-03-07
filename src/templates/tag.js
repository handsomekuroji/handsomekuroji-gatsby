import React from 'react'
import AdSense from 'react-adsense'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { media } from '../components/variable/mixin'

import Layout from '../components/layout'
import Header from '../components/organisms/header'
import Loop from '../components/organisms/loop'

const SiteMain = styled.main`
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

  return (
    <Layout>
      <Helmet title={tag.name}>
        <script src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" async />
      </Helmet>
      <Header inIndex />
      <SiteMain>
        <Loop allPosts={tag.blog} />
      </SiteMain>
      <AdSenseContainer>
        <AdSense.Google
          client="ca-pub-3005738200116146"
          slot="2919591828"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </AdSenseContainer>
    </Layout>
  )
}

export default tagTemplate

export const query = graphql`
  query TagBySlug($slug: String!) {
    contentfulTag(slug: { eq: $slug }) {
      slug
      name
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
  }
`
