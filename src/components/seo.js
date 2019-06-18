import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import ogImg from '../images/main/ogp.png'

export default function SEO({ meta }) {
  const { site } = useStaticQuery(
    graphql`
      query {
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
    `
  )

  const data = site.siteMetadata
  const title = meta.title ? meta.title : data.title
  const description = meta.description ? meta.description : data.description
  const url = meta.url ? `${data.siteUrl}/${meta.url}` : data.siteUrl
  const domain = data.domain
  const twitter = data.twitter
  const facebook = data.facebook
  const img = meta.img ? `https:${meta.img}` : data.siteUrl + ogImg
  const verification = data.verification

  return (
    <Helmet
      htmlAttributes={{ lang: 'ja' }}
      title={title}
      meta={[
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        { name: 'format-detection', content: 'telephone=no, email=no,address=no' },
        { name: 'description', content: description },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: `@${twitter}` },
        { name: 'twitter:domain', content: domain },
        { name: 'twitter:creator', content: '@' + twitter },
        { property: 'article:publisher', content: `https://www.facebook.com/${facebook}` },
        { property: 'fb:app_id', content: '130788987000950' },
        { property: 'og:site_name', content: data.title },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: img },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'thumbnail', content: img },
        { name: 'google-site-verification', content: verification },
        { name: 'apple-mobile-web-app-title', content: title },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'application-name', content: title },
        { name: 'msapplication-TileColor', content: '#404040' },
        { name: 'theme-color', content: '#fcfcfc' },
        { name: 'google-site-verification', content: verification }
      ]}
      link={[
        { rel: 'canonical', href: url },
        { rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/img/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/img/favicon-16x16.png' },
        { rel: 'mask-icon', href: '/img/safari-pinned-tab.svg', color: '#404040' },
        { rel: 'preconnect dns-prefetch', href: 'https://www.google-analytics.com' }
      ]}
      script={[{ src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', async: true }]}
    />
  )
}

SEO.propTypes = {
  meta: PropTypes.object
}

SEO.defaultProps = {
  meta: {}
}
