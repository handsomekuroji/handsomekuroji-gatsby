import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media } from '../../variable/mixin'

const Figure = styled.figure`
  border-radius: 8px 0 0 8px;
  height: 100%;
  object-fit: cover;
  overflow: hidden;

  ${media.s`
    border-radius: 8px 8px 0 0;
    height: auto;
  `}

  amp-img {
    height: 100%;
    max-width: 100%;
    transition: background 0.4s ease 0.4s;
    vertical-align: bottom;
    width: 100%;

    .dark & {
      filter: brightness(80%);
    }

    img {
      object-fit: cover;
    }
  }
`

export default function Thumbnail({ src, alt }) {
  const fluid = src.fluid
  const file = src.file.details.image

  return (
    <Figure>
      <amp-img
        src={fluid.srcWebp}
        srcSet={fluid.srcSetWebp}
        sizes="30vw"
        width={file.width}
        height={file.height}
        alt={alt}
        layout="responsive"
      >
        <amp-img
          src={fluid.src}
          srcSet={fluid.srcSet}
          sizes="30vw"
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

Thumbnail.propTypes = {
  src: PropTypes.object,
  alt: PropTypes.string
}
