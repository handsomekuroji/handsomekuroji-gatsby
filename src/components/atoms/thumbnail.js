import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media } from '~src/components/variable/mixin'

const Img = styled.img`
  background: var(--c_3);
  height: 100%;
  object-fit: cover;
  transition: background 0.2s ease 0.4s;
  vertical-align: bottom;
  width: 100%;

  ${media.s} {
    height: auto;
    left: 0;
    position: absolute;
    top: 0;
  }

  .dark & {
    filter: brightness(80%);
  }
`

export default function Thumbnail({ src, alt }) {
  return (
    <picture>
      <source type="image/webp" src={src.srcWebp} srcSet={src.srcSetWebp} sizes="30vw" />
      <Img
        src={src.src}
        srcSet={src.srcSet}
        sizes="30vw"
        width={src.presentationWidth}
        height={src.presentationHeight}
        alt={alt}
        loading="lazy"
        decoding="async"
      />
    </picture>
  )
}

Thumbnail.propTypes = {
  src: PropTypes.object,
  alt: PropTypes.string
}
