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
        data-srcset={
          imgSrc + '?fm=webp&w=320 600w, ' + imgSrc + '?fm=webp&w=330 1040w, ' + imgSrc + '?fm=webp&w=300 1280w'
        }
        data-sizes="100w"
      />
      <ThumbImg
        src={dummy}
        data-src={imgSrc}
        data-srcset={imgSrc + '?w=320 600w, ' + imgSrc + '?w=330 1040w, ' + imgSrc + '?w=300 1280w'}
        content={imgSrc}
        width="640"
        height="360"
        alt={imgAlt}
        decoding="async"
      />
    </picture>
  )
}

Thumbnail.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string
}
