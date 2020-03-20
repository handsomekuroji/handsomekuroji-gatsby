import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Img = styled.img`
  background: var(--c_3);
  height: auto;
  transition: background 0.2s ease 0.4s;
  vertical-align: bottom;
  width: 100%;

  .dark & {
    filter: brightness(80%);
  }
`

export default function Hero({ src, alt }) {
  return (
    <picture>
      <source type="image/webp" src={src.srcWebp} srcSet={src.srcSetWebp} sizes="100w" />
      <Img
        src={src.src}
        srcSet={src.srcSet}
        sizes="100w"
        width={src.presentationWidth}
        height={src.presentationHeight}
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
