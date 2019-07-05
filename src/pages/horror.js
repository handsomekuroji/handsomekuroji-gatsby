import React from 'react'
import { graphql } from 'gatsby'
import dayjs from 'dayjs'
import styled from 'styled-components'
import { media } from '../components/variable/mixin'
import Seo from '../components/seo'
import Layout from '../components/layout'
import Header from '../components/organisms/header'
import Footer from '../components/organisms/footer'
import lozad from '../plugins/lozad'

const Main = styled.main`
  margin: 32px auto 0;
  max-width: 640px;
  width: calc(100% - 16px);

  ${media.xs`width: calc(100% - 32px);`}

  ${media.s`width: calc(100% - 48px);`}

  ${media.ms`
    max-width: 690px;
    width: calc(100% - 64px);
  `}

  ${media.ls`margin: 48px auto 0;`}

  ${media.l`max-width: 960px;`}
`

export default function Horror({ data }) {
  const [active, setActive] = React.useState(false)
  const title = '怖い話'

  const seo = {
    title: title,
    url: 'horror',
    description: '夜じゃないと読めない怖い話'
  }

  React.useEffect(() => {
    lozad()
  }, [Main])

  React.useLayoutEffect(() => {
    const time = dayjs(new Date()).format('HH')
    setActive(!!(time >= 19 || time <= 4))
  }, [Main])

  const content = active ? <p></p> : ''

  return (
    <Layout>
      <Seo meta={seo} />
      <Header title={title} />
      <Main>{content}</Main>
      <Footer tag={data.allContentfulTag.edges} />
    </Layout>
  )
}

export const query = graphql`
  query Horror {
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
