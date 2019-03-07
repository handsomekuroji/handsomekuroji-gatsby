import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import dummy from '../../images/main/dummy.svg'

const HeroImg = styled.img`
  background: #dfdfdf;
  height: auto;
  vertical-align: bottom;
  width: 100%;
`

function Hero({ imgSrc, imgAlt }) {
  return (
    <picture>
      <source
        type="image/webp"
        data-srcset={imgSrc + '?fm=webp&w=640 640w, ' + imgSrc + '?fm=webp&w=1280 1280w'}
        data-sizes="100w"
      />
      <HeroImg
        src={dummy}
        data-src={imgSrc}
        data-srcset={imgSrc + '?w=640 640w, ' + imgSrc + '?w=1280 1280w'}
        content={imgSrc}
        alt={imgAlt}
        width="640"
        height="360"
      />
    </picture>
  )
}

Hero.propTypes = {
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string
}

export default Hero
