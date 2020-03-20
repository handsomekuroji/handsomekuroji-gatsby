import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media } from '~src/components/variable/mixin'

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
    max-width: 100%;
    vertical-align: bottom;
    width: 100%;

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
        width={src.presentationWidth}
        height={src.presentationHeight}
        alt={alt}
        layout="responsive"
      >
        <amp-img
          src={src.src}
          srcSet={src.srcSet}
          width={src.presentationWidth}
          height={src.presentationHeight}
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
