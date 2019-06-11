import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media } from '../../components/variable/mixin'
import Icon from '../../components/atoms/icon'

const Footer = styled.footer`
  border-top: 1px solid var(--c_8);
  border-radius: 0 0 8px 8px;
  padding: 16px;

  ${media.s`padding: 32px 24px;`}

  ${media.ms`padding: 48px 32px;`}

  ${media.m`padding: 48px 64px;`}
`

const Container = styled.div`
  display: grid;
  gap: 12px;
  grid-auto-flow: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 320px;

  ${media.xs`gap: 16px;`}

  ${media.m`
    gap: 24px;
    max-width: 360px;
  `}
`

export default function PostFooter({ footer }) {
  const data = useStaticQuery(graphql`
    query PostFooterQuery {
      site {
        siteMetadata {
          siteUrl
          domain
          twitter
        }
      }
    }
  `)

  const meta = data.site.siteMetadata
  const url = `${meta.siteUrl}/${footer.url}`
  const title = footer.title.replace('&#038;', '%26')
  const domain = meta.domain
  const account = meta.twitter

  const icons = [
    {
      type: 'Twitter',
      url: `https://twitter.com/share?count=horizontal&lang=en&url=${url}&text=${title}&via=${account}`
    },
    {
      type: 'Facebook',
      url: `https://www.facebook.com/share.php?u=${url}`
    },
    {
      type: 'Hatebu',
      url: `http://b.hatena.ne.jp/add?mode=confirm&url=${url}`
    },
    {
      type: 'Line',
      url: `https://line.me/R/msg/text/?${title}&nbsp;${url}`
    },
    {
      type: 'Pocket',
      url: `https://getpocket.com/edit?url=${url}&title=${title}`
    },
    {
      type: 'Feedly',
      url: `https://feedly.com/i/subscription/feed%2Fhttps%3A%2F%2F${domain}%2Ffeed.xml`
    }
  ]

  const list = icons.map((edge, i) => <Icon key={i} icon={edge} />)

  return (
    <Footer>
      <Container>{list}</Container>
    </Footer>
  )
}

PostFooter.propTypes = {
  footer: PropTypes.object
}
