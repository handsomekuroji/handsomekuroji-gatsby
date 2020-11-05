import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import ogImg from '~src/images/main/ogp.png'

export default function Seo({ meta }) {
  const query = useStaticQuery(graphql`
    query AmpSeoQuery {
      site {
        siteMetadata {
          title
          description
          siteUrl
          domain
          twitter
          facebook
          author
          verification
        }
      }
    }
  `).site.siteMetadata

  const title = meta.title ? meta.title : query.title
  const root = query.siteUrl
  const description = meta.description ? meta.description : query.description
  const domain = query.domain
  const twitter = query.twitter
  const facebook = query.facebook
  const img = meta.img ? root + meta.img : root + ogImg
  const verification = query.verification

  return (
    <Helmet
      htmlAttributes={{ lang: 'ja' }}
      title={title}
      meta={[
        { name: 'format-detection', content: 'telephone=no, email=no,address=no' },
        { name: 'description', content: description },
        { name: 'author', content: query.author },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: `@${twitter}` },
        { name: 'twitter:domain', content: domain },
        { name: 'twitter:creator', content: '@' + twitter },
        { property: 'article:publisher', content: `https://www.facebook.com/${facebook}` },
        { property: 'fb:app_id', content: '130788987000950' },
        { property: 'og:locale', content: 'ja_JP' },
        { property: 'og:site_name', content: query.title },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: img },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:url', content: root },
        { property: 'thumbnail', content: img },
        { name: 'google-site-verification', content: verification },
        { name: 'apple-mobile-web-app-title', content: title },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'application-name', content: title },
        { name: 'msapplication-TileColor', content: '#404040' },
        { name: 'theme-color', content: '#fcfcfc' },
        { name: 'google-site-verification', content: verification },
      ]}
      link={[
        { rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/img/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/img/favicon-16x16.png' },
        { rel: 'mask-icon', href: '/img/safari-pinned-tab.svg', color: '#404040' },
      ]}
    />
  )
}

Seo.propTypes = {
  meta: PropTypes.object,
}

Seo.defaultProps = {
  meta: {},
}
