import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import dummy from '../../images/main/dummy.svg'

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
  const srcset = bool => {
    const webp = bool ? 'fm=webp&' : ''
    return `${src}?${webp}w=320 640w, ${src}?${webp}w=640 760w, ${src}?${webp}w=1280 1280w`
  }

  return (
    <picture>
      <source type="image/webp" data-src={dummy} data-srcset={srcset(true)} data-sizes="100w" />
      <Img
        src={dummy}
        data-src={src}
        data-srcset={srcset(true)}
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
