import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import OgImg from '../images/main/ogp.png'

function SEO({ meta }) {
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
  const metaTitle = meta.title ? meta.title : data.title
  const metaDescription = meta.description ? meta.description : data.description
  const metaUrl = meta.url ? data.siteUrl + '/' + meta.url : data.siteUrl
  const metaDomain = data.domain
  const metaTwitter = data.twitter
  const metaFacebook = data.facebook
  const metaOgImg = meta.img ? 'https:' + meta.img : data.siteUrl + OgImg
  const verification = data.verification

  return (
    <Helmet
      htmlAttributes={{ lang: 'ja' }}
      title={metaTitle}
      meta={[
        { charset: 'utf-8' },
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
        { name: 'format-detection', content: 'telephone=no, email=no,address=no' },
        { name: 'description', content: metaDescription },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@' + metaTwitter },
        { name: 'twitter:domain', content: metaDomain },
        { name: 'twitter:creator', content: '@' + metaTwitter },
        { name: 'viewport', content: 'initial-scale=1, viewport-fit=cover' },
        { property: 'article:publisher', content: 'https://www.facebook.com/' + metaFacebook },
        { property: 'fb:app_id', content: '130788987000950' },
        { property: 'og:site_name', content: data.title },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: metaOgImg },
        { property: 'og:title', content: metaTitle },
        { property: 'og:description', content: metaDescription },
        { property: 'og:url', content: metaUrl },
        { name: 'apple-mobile-web-app-title', content: metaTitle },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        { name: 'application-name', content: metaTitle },
        { name: 'msapplication-TileColor', content: '#404040' },
        { name: 'theme-color', content: '#fcfcfc' },
        { name: 'google-site-verification', content: verification }
      ]}
      link={[
        { rel: 'canonical', href: metaUrl },
        { rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/img/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/img/favicon-16x16.png' },
        { rel: 'mask-icon', href: '/img/safari-pinned-tab.svg', color: '#404040' },
        { rel: 'preconnect dns-prefetch', href: 'https://www.google-analytics.com' },
        { rel: 'preconnect dns-prefetch', href: 'https://googleads.g.doubleclick.net' },
        { rel: 'preconnect dns-prefetch', href: 'https://adservice.google.com' },
        { rel: 'preconnect dns-prefetch', href: 'https://adservice.google.co.jp' }
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

export default SEO
