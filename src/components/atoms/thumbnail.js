import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import dummy from '../../images/main/dummy.svg'

const ThumbImg = styled.img`
  background: var(--c_2);
  height: auto;
  vertical-align: bottom;
  width: 100%;

  .dark & {
    filter: brightness(80%);
  }
`

export default function Thumbnail({ imgSrc, imgAlt }) {
  const srcSet = `${imgSrc}?fm=webp&w=320 600w, ${imgSrc}?fm=webp&w=330 1040w, ${imgSrc}?fm=webp&w=300 1280w`

  return (
    <picture>
      <source type="image/webp" data-srcset={srcSet} data-sizes="100w" />
      <ThumbImg
        src={dummy}
        data-src={imgSrc}
        data-srcset={srcSet}
        content={imgSrc}
        width="640"
        height="360"
        alt={imgAlt}
        loading="lazy"
        decoding="async"
      />
    </picture>
  )
}

Thumbnail.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string
}
