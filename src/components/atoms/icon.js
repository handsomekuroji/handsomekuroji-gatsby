import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { media } from '~src/components/variable/mixin'
import modal from '~src/plugins/modal'
import Twitter from '~src/images/icon/twitter.svg'
import Facebook from '~src/images/icon/facebook.svg'
import Hatebu from '~src/images/icon/hatebu.svg'
import Line from '~src/images/icon/line.svg'
import Pocket from '~src/images/icon/pocket.svg'
import Note from '~src/images/icon/note.svg'
import Feedly from '~src/images/icon/feedly.svg'

const Css = css`
  align-items: center;
  background: var(--c_3);
  border-radius: 6px;
  display: flex;
  height: 40px;
  justify-content: center;
  text-align: center;
  transition: background 0.2s ease;
  width: 40px;

  @media (hover: hover) {
    &:hover {
      .icon {
        fill: #fff;
      }
    }
  }

  &:focus {
    .icon {
      fill: #fff;
    }
  }

  .icon {
    fill: var(--c_7);
    transition: fill 0.2s ease;
  }
`
const TwitterIcon = styled.a`
  ${Css}

  @media (hover: hover) {
    &:hover {
      background: #1da1f2;
    }
  }

  &:focus {
    background: #1da1f2;
  }
`

const FacebookIcon = styled.a`
  ${Css}

  @media (hover: hover) {
    &:hover {
      background: #3b5998;
    }
  }

  &:focus {
    background: #3b5998;
  }
`
const HatebuIcon = styled.a`
  ${Css}

  @media (hover: hover) {
    &:hover {
      background: #00a4de;
    }
  }

  &:focus {
    background: #00a4de;
  }
`

const LineIcon = styled.a`
  ${Css}

  @media (hover: hover) {
    &:hover {
      background: #00c300;
    }
  }

  &:focus {
    background: #00c300;
  }
`

const PocketIcon = styled.a`
  ${Css}

  @media (hover: hover) {
    &:hover {
      background: #ef3f56;
    }
  }

  &:focus {
    background: #ef3f56;
  }
`

const NoteIcon = styled.a`
  ${Css}

  display: none;

  ${media.ms`
    display: flex;
  `}

  @media (hover: hover) {
    &:hover {
      background: #41c9b4;
    }
  }

  &:focus {
    background: #41c9b4;
  }
`

const FeedlyIcon = styled.a`
  ${Css}

  display: none;

  ${media.ms`
    display: flex;
  `}

  @media (hover: hover) {
    &:hover {
      background: #2bb24c;
    }
  }

  &:focus {
    background: #2bb24c;
  }
`

export default function Icon({ icon }) {
  const type = icon.type
  const url = icon.url

  const box = () => {
    modal(url, event)
  }

  const icons =
    type === 'Twitter' ? (
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
    ) : type === 'Note' ? (
      <NoteIcon href={url} target="_blank" rel="noopener noreferrer" aria-label="noteで書く">
        <Note />
      </NoteIcon>
    ) : (
      type === 'Feedly' && (
        <FeedlyIcon href={url} target="_blank" rel="noopener noreferrer" aria-label="Feedlyに登録" onClick={box}>
          <Feedly />
        </FeedlyIcon>
      )
    )

  return icons
}

Icon.propTypes = {
  icon: PropTypes.object
}
