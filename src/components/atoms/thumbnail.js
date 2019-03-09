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
  return (
    <picture>
      <source
        type="image/webp"
        data-srcset={imgSrc + '?fm=webp&w=480 640w, ' + imgSrc + '?fm=webp&w=600 1280w'}
        data-sizes="100w"
      />
      <ThumbImg
        src={dummy}
        data-src={imgSrc}
        data-srcset={imgSrc + '?w=480 640w, ' + imgSrc + '?w=600 1280w'}
        content={imgSrc}
        alt={imgAlt}
        width="640"
        height="360"
      />
    </picture>
  )
}

Thumbnail.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string
}
