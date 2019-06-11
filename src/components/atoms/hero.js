import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import dummy from '../../images/main/dummy.svg'

const Img = styled.img`
  background: var(--c_2);
  height: auto;
  vertical-align: bottom;
  width: 100%;

  .dark & {
    filter: brightness(80%);
  }
`

export default function Hero({ src, alt }) {
  const srcset = bool => {
    const webp = bool ? 'fm=webp&' : ''
    return `${src}?${webp}w=320 640w, ${src}?${webp}w=640 760w, ${src}?${webp}w=1280 1280w`
  }

  return (
    <picture>
      <source type="image/webp" data-srcset={srcset(true)} data-sizes="100w" />
      <Img
        src={dummy}
        data-src={src}
        data-srcset={srcset(false)}
        content={src}
        width="640"
        height="360"
        alt={alt}
        loading="lazy"
        decoding="async"
      />
    </picture>
  )
}

Hero.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
}
