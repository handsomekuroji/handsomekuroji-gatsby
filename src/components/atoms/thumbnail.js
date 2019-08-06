import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
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

export default function Thumbnail({ src, alt }) {
  const srcset = bool => {
    return bool ? src.srcSetWebp : src.srcSet
  }

  return (
    <picture>
      <source type="image/webp" data-src={dummy} data-srcset={srcset(true)} data-sizes="100w" />
      <Img
        src={dummy}
        data-src={src.src}
        data-srcset={srcset(false)}
        content={src.src}
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
