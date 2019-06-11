import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { media } from '../../components/variable/mixin'
import modal from '../../plugins/modal'
import Twitter from '../../images/icon/twitter.svg'
import Facebook from '../../images/icon/facebook.svg'
import Hatebu from '../../images/icon/hatebu.svg'
import Line from '../../images/icon/line.svg'
import Pocket from '../../images/icon/pocket.svg'
import Feedly from '../../images/icon/feedly.svg'

const Css = css`
  align-items: center;
  background: var(--c_3);
  border-radius: 6px;
  display: flex;
  height: 40px;
  justify-content: center;
  text-align: center;
  transition: 0.3s linear;
  width: 40px;

  &:hover,
  &:focus {
    transition: 0.3s;

    .icon {
      fill: #fff;
      transition: 0.2s;
    }
  }

  .icon {
    fill: var(--c_7);
    transition: 0.5s linear;
  }
`
const TwitterIcon = styled.a`
  ${Css}

  &:hover, &:focus {
    background: #1da1f2;
  }
`

const FacebookIcon = styled.a`
  ${Css}

  &:hover, &:focus {
    background: #3b5998;
  }
`
const HatebuIcon = styled.a`
  ${Css}

  &:hover, &:focus {
    background: #00a4de;
  }
`

const LineIcon = styled.a`
  ${Css}

  &:hover, &:focus {
    background: #00c300;
  }
`

const PocketIcon = styled.a`
  ${Css}

  &:hover, &:focus {
    background: #ef3f56;
  }
`

const FeedlyIcon = styled.a`
  ${Css}

  display: none;

  ${media.ms`display: flex;`}

  &:hover, &:focus {
    background: #2bb24c;
  }
`

export default function Icon({ icon }) {
  const type = icon.type
  const url = icon.url

  const box = () => {
    modal(url, event)
  }

  return (
    <>
      {type === 'Twitter' ? (
        <TwitterIcon href={url} target="_blank" rel="noopener noreferrer" aria-label="Twitterでシェア" onClick={box}>
          <Twitter />
        </TwitterIcon>
      ) : type === 'Facebook' ? (
        <FacebookIcon href={url} target="_blank" rel="noopener noreferrer" aria-label="Facebookでシェア" onClick={box}>
          <Facebook />
        </FacebookIcon>
      ) : type === 'Hatebu' ? (
        <HatebuIcon href={url} target="_blank" rel="noopener noreferrer" aria-label="はてブでシェア" onClick={box}>
          <Hatebu />
        </HatebuIcon>
      ) : type === 'Line' ? (
        <LineIcon href={url} target="_blank" rel="noopener noreferrer" aria-label="LINEでシェア" onClick={box}>
          <Line />
        </LineIcon>
      ) : type === 'Pocket' ? (
        <PocketIcon href={url} target="_blank" rel="noopener noreferrer" aria-label="Pocketに保存" onClick={box}>
          <Pocket />
        </PocketIcon>
      ) : (
        type === 'Feedly' && (
          <FeedlyIcon href={url} target="_blank" rel="noopener noreferrer" aria-label="Feedlyに登録" onClick={box}>
            <Feedly />
          </FeedlyIcon>
        )
      )}
    </>
  )
}

Icon.propTypes = {
  icon: PropTypes.object
}
