import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

/* micorCMS用 */
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
      <source
        type="image/webp"
        src={`${src}?fm=webp`}
        srcSet={`${src}?w=200&fm=webp 200w, ${src}?w=400&fm=webp 400w, ${src}?w=800&fm=webp 800w, ${src}?w=1200&fm=webp 1200w,`}
        sizes="100w"
      />
      <Img
        src={src}
        srcSet={`${src}?w=200 200w, ${src}?w=400 400w, ${src}?w=800 800w, ${src}?w=1200 1200w,`}
        sizes="100w"
        alt={alt}
        loading="lazy"
        decoding="async"
      />
    </picture>
  )
}

Hero.propTypes = {
  src: PropTypes.object,
  alt: PropTypes.string,
}
