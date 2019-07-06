import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import dayjs from 'dayjs'
import styled from 'styled-components'
import { font, media } from '../components/variable/mixin'
import Seo from '../components/seo'
import Layout from '../components/layout'
import Header from '../components/organisms/header'
import Storeis from '../components/molecules/stories'
import Footer from '../components/organisms/footer'
import lozad from '../plugins/lozad'

const Main = styled.main`
  background: var(--c_4);
  box-shadow: rgba(var(--c_9-rgb), 0.1) 0 1px 6px;
  box-sizing: border-box;
  border-radius: 8px;
  counter-reset: stories;
  margin: 32px auto 0;
  max-width: 620px;
  overflow: hidden;
  width: calc(100% - 16px);

  ${media.xs`width: calc(100% - 32px);`}

  ${media.s`width: calc(100% - 48px);`}

  ${media.ms`
    max-width: 690px;
    width: calc(100% - 64px);
  `}

  ${media.ls`margin: 48px auto 0;`}
`

const Alert = styled.div`
  animation: fade 4s ease 0s 1 normal;
  background: var(--c_4);
  box-shadow: rgba(var(--c_9-rgb), 0.1) 0 1px 6px;
  box-sizing: border-box;
  border-radius: 8px;
  font: bold 1.3rem / 1 ${font.$f_1};
  line-height: 1.8;
  margin: auto;
  max-width: 690px;
  overflow: hidden;
  padding: 16px;
  text-align: center;
  transition: 0.3s;

  ${media.s`padding: 24px;`}

  ${media.ms`padding: 32px;`}

  ${media.m`padding: 48px;`}
`

export default function Horror({ data }) {
  const [active, setActive] = React.useState(0)
  const dark = { class: 'dark' }
  const title = '怖い話'
  const time = dayjs(new Date()).format('HH')

  const seo = {
    title: title,
    url: 'horror',
    description: '夜じゃないと読めない怖い話'
  }

  React.useEffect(() => {
    lozad()
  }, [Main])

  React.useLayoutEffect(() => {
    setActive(time >= 19 || time <= 4 ? 1 : 2)
  }, [Main])

  const content =
    active === 1 ? (
      data.allContentfulHorror.edges.map((edge, i) => <Storeis key={i} edge={edge} />)
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
      <Header title={title} />
      <Main>{content}</Main>
      <Footer tag={data.allContentfulTag.edges} />
    </Layout>
  )
}

export const query = graphql`
  query Horror {
    allContentfulHorror(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          slug
          title
          createdAt
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
