import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Figure = styled.figure`
  border-radius: 8px 8px 0 0;
  overflow: hidden;

  amp-img {
    height: auto;
    max-width: 100%;
    transition: background 0.4s ease 0.4s;
    vertical-align: bottom;
    width: 100%;

    .dark & {
      filter: brightness(80%);
    }
  }
`

export default function Hero({ src, alt }) {
  return (
    <Figure>
      <amp-img
        src={src.srcWebp}
        srcSet={src.srcSetWebp}
        sizes="100vw"
        width={src.presentationWidth}
        height={src.presentationHeight}
        alt={alt}
        layout="responsive"
      >
        <amp-img
          src={src.src}
          srcSet={src.srcSet}
          sizes="100vw"
          width={src.presentationWidth}
          height={src.presentationHeight}
          alt={alt}
          fallback="fallback"
          layout="responsive"
        ></amp-img>
      </amp-img>
    </Figure>
  )
}

Hero.propTypes = {
  src: PropTypes.object,
  alt: PropTypes.string
}
