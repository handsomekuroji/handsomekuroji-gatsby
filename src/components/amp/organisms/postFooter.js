import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media } from '~src/components/variable/mixin'
import Icon from '~src/components/amp/atoms/icon'

const Footer = styled.footer`
  border-radius: 0 0 8px 8px;
  border-top: 1px solid var(--c_8);
  padding: 16px;

  ${media.s} {
    padding: 32px 24px;
  }

  ${media.ms} {
    padding: 48px 32px;
  }

  ${media.m} {
    padding: 48px 64px;
  }
`

const Container = styled.div`
  display: grid;
  gap: 12px;
  grid-auto-flow: column;
  justify-content: center;
  margin: 0 auto;
  max-width: 320px;

  ${media.xs} {
    gap: 16px;
  }

  ${media.m} {
    gap: 24px;
    max-width: 360px;
  }
`

export default function PostFooter({ footer }) {
  const query = useStaticQuery(graphql`
    query AmpPostFooterQuery {
      site {
        siteMetadata {
          title
          siteUrl
          domain
          twitter
        }
      }
    }
  `).site.siteMetadata

  const name = query.title
  const url = `${query.siteUrl}/${footer.url}`
  const title = footer.title.replace('&#038;', '%26')
  const domain = query.domain

  const icons = [
    {
      type: 'twitter',
      url,
      title
    },
    {
      type: 'facebook',
      url,
      title
    },
    {
      type: 'hatebu',
      url: `https://b.hatena.ne.jp/add?mode=confirm&url=${url}`
    },
    {
      type: 'line',
      url,
      title
    },
    {
      type: 'pocket',
      url: `https://getpocket.com/edit?url=${url}&title=${title}`
    },
    {
      type: 'note',
      url: `https://note.mu/intent/post?url=${url}/&hashtags=${name}`
    },
    {
      type: 'feedly',
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
