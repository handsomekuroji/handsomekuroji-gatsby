import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media } from '../../components/variable/mixin'
import Icon from '../../components/atoms/icon'

const FooterContainer = styled.footer`
  border-top: 1px solid var(--c_3);
  border-radius: 0 0 8px 8px;
  padding: 32px 16px;
  ${media.s`
    padding: 32px 24px;
  `}
  ${media.ms`
    padding: 48px 32px;
  `}
  ${media.m`
    padding: 48px 64px;
  `}
`

const FooterInner = styled.div`
  display: grid;
  gap: 8px;
  grid-auto-flow: column;
  margin: 0 auto;
  max-width: 320px;
  ${media.xs`
    gap: 16px;
  `}
  ${media.m`
    gap: 24px;
    max-width: 360px;
  `}
`

function PostFooter({ footerData }) {
  const siteData = useStaticQuery(graphql`
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
  const url = siteData.site.siteMetadata.siteUrl + '/' + footerData.url
  const title = footerData.title.replace('&#038;', '%26')
  const domain = siteData.site.siteMetadata.domain
  const account = siteData.site.siteMetadata.twitter

  const shareIcons = [
    {
      type: 'Twitter',
      url: 'https://twitter.com/share?count=horizontal&lang=en&url=' + url + '&text=' + title + '&via=' + account
    },
    {
      type: 'Facebook',
      url: 'https://www.facebook.com/share.php?u=' + url
    },
    {
      type: 'Hatebu',
      url: 'http://b.hatena.ne.jp/add?mode=confirm&url=' + url
    },
    {
      type: 'Line',
      url: 'https://line.me/R/msg/text/?' + title + '&nbsp;' + url
    },
    {
      type: 'Pocket',
      url: 'https://getpocket.com/edit?url=' + url + '&title=' + title
    },
    {
      type: 'Feedly',
      url: 'https://feedly.com/i/subscription/feed%2Fhttps%3A%2F%2F' + domain + '%2Ffeed.xml'
    }
  ]

  return (
    <FooterContainer>
      <FooterInner>
        {shareIcons.map((edge, i) => (
          <Icon iconData={edge} key={i} />
        ))}
      </FooterInner>
    </FooterContainer>
  )
}

PostFooter.propTypes = {
  footerData: PropTypes.object
}

export default PostFooter
