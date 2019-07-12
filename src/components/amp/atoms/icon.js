import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { media } from '../../../components/variable/mixin'
import Twitter from '../../../images/icon/twitter.svg'
import Facebook from '../../../images/icon/facebook.svg'
import Hatebu from '../../../images/icon/hatebu.svg'
import Line from '../../../images/icon/line.svg'
import Pocket from '../../../images/icon/pocket.svg'
import Note from '../../../images/icon/note.svg'
import Feedly from '../../../images/icon/feedly.svg'

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
const TwitterIcon = styled.div`
  .iconTwitter {
    ${Css}

    &:hover, &:focus {
      background: #1da1f2;
    }
  }
`

const FacebookIcon = styled.div`
  .iconFacebook {
    ${Css}

    &:hover, &:focus {
      background: #3b5998;
    }
  }
`
const HatebuIcon = styled.div`
  .iconHatebu {
    ${Css}

    &:hover, &:focus {
      background: #00a4de;
    }
  }
`

const LineIcon = styled.div`
  .iconLine {
    ${Css}

    &:hover, &:focus {
      background: #00c300;
    }
  }
`

const PocketIcon = styled.div`
  .iconPocket {
    ${Css}

    &:hover, &:focus {
      background: #ef3f56;
    }
  }
`

const NoteIcon = styled.div`
  display: none;

  ${media.ms`display: flex;`}

  .iconNote {
    ${Css}

    &:hover, &:focus {
      background: #41c9b4;
    }
  }
`

const FeedlyIcon = styled.div`
  display: none;

  ${media.ms`display: flex;`}

  .iconFeedly {
    ${Css}

    &:hover, &:focus {
      background: #2bb24c;
    }
  }
`

export default function Icon({ icon }) {
  const type = icon.type
  const url = icon.url
  const title = icon.title

  return (
    <>
      {type === 'twitter' ? (
        <TwitterIcon>
          <amp-social-share
            type={type}
            width="40"
            height="40"
            data-param-text={title}
            data-param-url={url}
            class="iconTwitter"
            aria-label="Twitterでシェア"
          >
            <Twitter />
          </amp-social-share>
        </TwitterIcon>
      ) : type === 'facebook' ? (
        <FacebookIcon>
          <amp-social-share
            type={type}
            width="40"
            height="40"
            data-param-text={title}
            data-param-url={url}
            data-param-app_id="450276249148867"
            class="iconFacebook"
            aria-label="Facebookでシェア"
          >
            <Facebook />
          </amp-social-share>
        </FacebookIcon>
      ) : type === 'hatebu' ? (
        <HatebuIcon>
          <amp-social-share
            type={type}
            width="40"
            height="40"
            data-share-endpoint={url}
            class="iconHatebu"
            aria-label="はてブでシェア"
          >
            <Hatebu />
          </amp-social-share>
        </HatebuIcon>
      ) : type === 'line' ? (
        <LineIcon>
          <amp-social-share
            type={type}
            width="40"
            height="40"
            data-param-text={title}
            data-param-url={url}
            class="iconLine"
            aria-label="LINEでシェア"
          >
            <Line />
          </amp-social-share>
        </LineIcon>
      ) : type === 'pocket' ? (
        <PocketIcon>
          <amp-social-share
            type={type}
            width="40"
            height="40"
            data-share-endpoint={url}
            class="iconPocket"
            aria-label="Pocketに保存"
          >
            <Pocket />
          </amp-social-share>
        </PocketIcon>
      ) : type === 'note' ? (
        <NoteIcon>
          <amp-social-share
            type={type}
            width="40"
            height="40"
            data-share-endpoint={url}
            class="iconNote"
            aria-label="noteで書く"
          >
            <Note />
          </amp-social-share>
        </NoteIcon>
      ) : (
        type === 'feedly' && (
          <FeedlyIcon>
            <amp-social-share
              type={type}
              width="40"
              height="40"
              data-share-endpoint={url}
              class="iconFeedly"
              aria-label="Feedlyに登録"
            >
              <Feedly />
            </amp-social-share>
          </FeedlyIcon>
        )
      )}
    </>
  )
}

Icon.propTypes = {
  icon: PropTypes.object
}
