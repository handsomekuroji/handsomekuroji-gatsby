import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Figure = styled.figure`
  border-radius: 8px 8px 0 0;
  overflow: hidden;

  amp-img {
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
  return (
    <Figure>
      <amp-img src={src.srcWebp} srcset={src.srcSetWebp} width="640" height="360" alt={alt} layout="responsive">
        <amp-img
          src={src.src}
          srcset={src.srcSet}
          width="640"
          height="360"
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
