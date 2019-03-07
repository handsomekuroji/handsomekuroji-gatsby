import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { media } from '../../components/variable/mixin'

import Twitter from '../../images/icon/twitter.svg'
import Facebook from '../../images/icon/facebook.svg'
import Hatebu from '../../images/icon/hatebu.svg'
import Line from '../../images/icon/line.svg'
import Pocket from '../../images/icon/pocket.svg'
import Feedly from '../../images/icon/feedly.svg'

const IconImg = css`
  align-items: center;
  background: var(--c_2);
  border-radius: 6px;
  display: flex;
  height: 40px;
  justify-content: center;
  text-align: center;
  transition: 0.3s linear;
  width: 40px;
  &:hover {
    transition: 0.3s all;
    .icon {
      fill: #ffffff;
      transition: 0.2s all;
    }
  }
  .icon {
    fill: var(--c_7);
    transition: 0.5s linear;
  }
`
const TwitterIcon = styled.a`
  ${IconImg}
  &:hover {
    background: #1da1f2;
  }
`

const FacebookIcon = styled.a`
  ${IconImg}
  &:hover {
    background: #3b5998;
  }
`
const HatebuIcon = styled.a`
  ${IconImg}
  &:hover {
    background: #00a4de;
  }
`

const LineIcon = styled.a`
  ${IconImg}
  &:hover {
    background: #00c300;
  }
`

const PocketIcon = styled.a`
  ${IconImg}
  &:hover {
    background: #ef3f56;
  }
`

const FeedlyIcon = styled.a`
  ${IconImg}
  display: none;
  ${media.ms`display: flex;`}
  &:hover {
    background: #2bb24c;
  }
`

function Icon({ iconData }) {
  const type = iconData.type
  const url = iconData.url
  return (
    <>
      {type === 'Twitter' ? (
        <TwitterIcon href={url} target="_blank" rel="noopener noreferrer">
          <Twitter />
        </TwitterIcon>
      ) : type === 'Facebook' ? (
        <FacebookIcon href={url} target="_blank" rel="noopener noreferrer">
          <Facebook />
        </FacebookIcon>
      ) : type === 'Hatebu' ? (
        <HatebuIcon href={url} target="_blank" rel="noopener noreferrer">
          <Hatebu />
        </HatebuIcon>
      ) : type === 'Line' ? (
        <LineIcon href={url} target="_blank" rel="noopener noreferrer">
          <Line />
        </LineIcon>
      ) : type === 'Pocket' ? (
        <PocketIcon href={url} target="_blank" rel="noopener noreferrer">
          <Pocket />
        </PocketIcon>
      ) : type === 'Feedly' ? (
        <FeedlyIcon href={url} target="_blank" rel="noopener noreferrer">
          <Feedly />
        </FeedlyIcon>
      ) : null}
    </>
  )
}

Icon.propTypes = {
  iconData: PropTypes.object
}

export default Icon
