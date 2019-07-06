import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import dayjs from 'dayjs'
import styled from 'styled-components'
import { font, media } from '../components/variable/mixin'
import Seo from '../components/seo'
import Layout from '../components/layout'
import Header from '../components/organisms/header'
import Footer from '../components/organisms/footer'
import HorrorHeader from '../components/organisms/horrorHeader'
import PostFooter from '../components/organisms/postFooter'
import Section from '../components/molecules/section'
import Breadcrumb from '../components/organisms/breadcrumb'
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

const Alert = styled.div`
  align-items: center;
  animation: fade 4s ease 0s 1 normal;
  background: var(--c_4);
  border-top: 1px solid var(--c_8);
  box-shadow: rgba(var(--c_9-rgb), 0.1) 0 1px 6px;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  font: bold 1.3rem / 1 ${font.$f_1};
  height: 360px;
  justify-content: center;
  line-height: 1.8;
  margin: auto;
  max-width: 690px;
  overflow: hidden;
  padding: 16px;
  text-align: center;
  transition: 0.3s;

  ${media.s`
    height: 392px;
    padding: 24px;
  `}

  ${media.ms`padding: 32px;`}

  ${media.m`
    height: 436px;
    padding: 48px;
  `}
`

export default function Horror({ data }) {
  const [active, setActive] = React.useState(0)
  const dark = { class: 'dark' }
  const time = dayjs(new Date()).format('HH')

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

  React.useEffect(() => {
    lozad()
  }, [Main])

  React.useLayoutEffect(() => {
    setActive(time >= 19 || time <= 4 ? 1 : 2)
  }, [Main])

  const content =
    active === 1 ? (
      <Section content={html} />
    ) : active === 2 ? (
      <Alert>
        怖い話が読めるのは
        <br />
        夜だけです
      </Alert>
    ) : (
      ''
    )

  return (
    <Layout horror>
      <Seo meta={seo} />
      <Helmet bodyAttributes={dark} />
      <Header horror />
      <Main>
        <Article>
          <HorrorHeader header={meta} />
          {content}
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
