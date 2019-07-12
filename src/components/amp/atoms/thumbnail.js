import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Figure = styled.figure`
  border-radius: 8px 8px 0 0;
  overflow: hidden;

  .thumbnailImg {
    height: auto;
    transition: background 0.4s ease 0.4s;
    vertical-align: bottom;
    width: 100%;

    .dark & {
      filter: brightness(80%);
    }
  }
`

export default function Thumbnail({ src, alt }) {
  const srcset = bool => {
    const webp = bool ? 'fm=webp&' : ''
    return `${src}?${webp}w=320 600w, ${src}?${webp}w=330 1040w, ${src}?${webp}w=300 1280w`
  }

  return (
    <Figure>
      <amp-img
        src={`${src}?fm=webp`}
        srcset={srcset(true)}
        width="640"
        height="360"
        alt={alt}
        class="thumbnailImg"
        layout="responsive"
      >
        <amp-img
          src={src}
          srcset={srcset(false)}
          width="640"
          height="360"
          alt={alt}
          fallback="fallback"
          class="thumbnailImg"
          layout="responsive"
        ></amp-img>
      </amp-img>
    </Figure>
  )
}

Thumbnail.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
}
