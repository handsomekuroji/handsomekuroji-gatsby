import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
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

export default function Thumbnail({ src, alt }) {
  const srcset = bool => {
    const webp = bool ? 'fm=webp&' : ''
    return `${src}?${webp}w=320 600w, ${src}?${webp}w=330 1040w, ${src}?${webp}w=300 1280w`
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

Thumbnail.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
}
