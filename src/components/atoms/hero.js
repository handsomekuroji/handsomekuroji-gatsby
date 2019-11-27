import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Img = styled.img`
  background: var(--c_3);
  height: auto;
  transition: background 0.4s ease 0.4s;
  vertical-align: bottom;
  width: 100%;

  &.fade {
    background: 0;
  }

  .dark & {
    filter: brightness(80%);
  }
`

export default function Hero({ src, alt }) {
  const fluid = src.fluid
  const file = src.file.details.image

  return (
    <picture>
      <source type="image/webp" src={fluid.srcWebp} srcSet={fluid.srcSetWebp} sizes="100w" />
      <Img
        src={fluid.src}
        srcSet={fluid.srcSet}
        sizes="100w"
        width={file.width}
        height={file.height}
        alt={alt}
        loading="lazy"
        decoding="async"
      />
    </picture>
  )
}

Hero.propTypes = {
  src: PropTypes.object,
  alt: PropTypes.string
}
