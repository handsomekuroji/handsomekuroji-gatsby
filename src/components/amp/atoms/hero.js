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
  const fluid = src.fluid
  const file = src.file.details.image

  return (
    <Figure>
      <amp-img
        src={fluid.srcWebp}
        srcSet={fluid.srcSetWebp}
        sizes="100vw"
        width={file.width}
        height={file.height}
        alt={alt}
        layout="responsive"
      >
        <amp-img
          src={fluid.src}
          srcSet={fluid.srcSet}
          sizes="100vw"
          width={file.wdth}
          height={file.height}
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
