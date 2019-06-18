import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import big from '../../images/main/handsomekuroji.svg'
import small from '../../images/main/hk.svg'

const Img = styled.img`
  height: auto;
  transition: 0.3s;
  vertical-align: bottom;
  width: 100%;

  .dark & {
    filter: invert(100%);
  }
`

export default function Logo() {
  const site = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <picture>
      <source media="(min-width: 600px)" srcSet={big} />
      <Img
        src={small}
        width="180"
        height="60"
        title={site.site.siteMetadata.title}
        decoding="async"
        aria-hidden="true"
      />
    </picture>
  )
}
