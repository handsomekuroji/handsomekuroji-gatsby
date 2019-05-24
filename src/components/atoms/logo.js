import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import BigIcon from '../../images/main/handsomekuroji.svg'
import SmallIcon from '../../images/main/hk.svg'

const LogoImg = styled.img`
  height: auto;
  transition: 0.3s;
  vertical-align: bottom;
  width: 100%;

  .dark & {
    filter: invert(100%);
  }
`

export default function Logo() {
  const siteData = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const title = siteData.site.siteMetadata.title

  return (
    <picture>
      <source media="(min-width: 600px)" srcSet={BigIcon} />
      <LogoImg src={SmallIcon} width="180" height="60" alt={title} loading="lazy" decoding="async" />
    </picture>
  )
}
