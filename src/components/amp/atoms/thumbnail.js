import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media } from '../../variable/mixin'

const Figure = styled.figure`
  border-radius: 8px 0 0 8px;
  height: 100%;
  object-fit: cover;
  overflow: hidden;

  ${media.s`
    border-radius: 8px 8px 0 0;
    height: auto;
  `}

  amp-img {
    height: 100%;
    transition: background 0.4s ease 0.4s;
    vertical-align: bottom;
    width: 100%;

    .dark & {
      filter: brightness(80%);
    }

    img {
      object-fit: cover;
    }
  }
`

export default function Thumbnail({ src, alt }) {
  return (
    <Figure>
      <amp-img
        src={src.srcWebp}
        srcSet={src.srcSetWebp}
        sizes="30vw"
        width="640"
        height="360"
        alt={alt}
        layout="responsive"
      >
        <amp-img
          src={src.src}
          srcSet={src.srcSet}
          sizes="30vw"
          width="640"
          height="360"
          alt={alt}
          fallback="fallback"
          layout="responsive"
        ></amp-img>
      </amp-img>
    </Figure>
  )
}

Thumbnail.propTypes = {
  src: PropTypes.object,
  alt: PropTypes.string
}
