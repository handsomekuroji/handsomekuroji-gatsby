import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media } from '../variable/mixin'

const Img = styled.img`
  background: var(--c_3);
  height: 100%;
  object-fit: cover;
  transition: background 0.4s ease 0.4s;
  vertical-align: bottom;
  width: 100%;

  ${media.s`
    height: auto;
    left: 0;
    position: absolute;
    top: 0;
  `}

  &.fade {
    background: 0;
  }

  .dark & {
    filter: brightness(80%);
  }
`

export default function Thumbnail({ src, alt }) {
  const fluid = src.fluid
  const file = src.file.details.image

  return (
    <picture>
      <source type="image/webp" src={fluid.srcWebp} srcSet={fluid.srcSetWebp} sizes="30vw" />
      <Img
        src={fluid.src}
        srcSet={fluid.srcSet}
        sizes="30vw"
        width={file.width}
        height={file.height}
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
