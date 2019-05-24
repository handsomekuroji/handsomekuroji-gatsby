import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import dummy from '../../images/main/dummy.svg'

const HeroImg = styled.img`
  background: var(--c_2);
  height: auto;
  vertical-align: bottom;
  width: 100%;

  .dark & {
    filter: brightness(80%);
  }
`

export default function Hero({ imgSrc, imgAlt }) {
  const srcSet = `${imgSrc}?fm=webp&w=320 640w, ${imgSrc}?fm=webp&w=640 760w, ${imgSrc}?fm=webp&w=1280 1280w`

  return (
    <picture>
      <source type="image/webp" data-srcset={srcSet} data-sizes="100w" />
      <HeroImg
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

Hero.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string
}
