import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Figure = styled.figure`
  border-radius: 8px 8px 0 0;
  overflow: hidden;

  .heroImg {
    height: auto;
    transition: background 0.4s ease 0.4s;
    vertical-align: bottom;
    width: 100%;

    .dark & {
      filter: brightness(80%);
    }
  }
`

export default function Hero({ src, alt }) {
  const srcset = bool => {
    const webp = bool ? 'fm=webp&' : ''
    return `${src}?${webp}w=320 640w, ${src}?${webp}w=640 760w, ${src}?${webp}w=1280 1280w`
  }

  return (
    <Figure>
      <amp-img
        src={`${src}?fm=webp`}
        srcset={srcset(true)}
        width="640"
        height="360"
        alt={alt}
        class="heroImg"
        layout="responsive"
      >
        <amp-img
          src={src}
          srcset={srcset(false)}
          width="640"
          height="360"
          alt={alt}
          fallback="fallback"
          class="heroImg"
          layout="responsive"
        ></amp-img>
      </amp-img>
    </Figure>
  )
}

Hero.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string
}
