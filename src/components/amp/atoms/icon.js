import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import { media } from '~src/components/variable/mixin'
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
  transition: 0.3s linear;
  width: 40px;

  @media (hover: hover) {
    &:hover {
      transition: 0.3s;

      .icon {
        fill: #fff;
        transition: 0.2s;
      }
    }
  }

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
  amp-social-share {
    ${Css}

    @media (hover: hover) {
      &:hover {
        background: #1da1f2;
      }
    }

    &:focus {
      background: #1da1f2;
    }
  }
`

const FacebookIcon = styled.div`
  amp-social-share {
    ${Css}

    @media (hover: hover) {
      &:hover {
        background: #3b5998;
      }
    }

    &:focus {
      background: #3b5998;
    }
  }
`
const HatebuIcon = styled.div`
  amp-social-share {
    ${Css}

    @media (hover: hover) {
      &:hover {
        background: #00a4de;
      }
    }

    &:focus {
      background: #00a4de;
    }
  }
`

const LineIcon = styled.div`
  amp-social-share {
    ${Css}

    @media (hover: hover) {
      &:hover {
        background: #00c300;
      }
    }

    &:focus {
      background: #00c300;
    }
  }
`

const PocketIcon = styled.div`
  amp-social-share {
    ${Css}

    @media (hover: hover) {
      &:hover {
        background: #ef3f56;
      }
    }

    &:focus {
      background: #ef3f56;
    }
  }
`

const NoteIcon = styled.div`
  display: none;

  ${media.ms`
    display: flex;
  `}

  amp-social-share {
    ${Css}

    @media (hover: hover) {
      &:hover {
        background: #41c9b4;
      }
    }

    &:focus {
      background: #41c9b4;
    }
  }
`

const FeedlyIcon = styled.div`
  display: none;

  ${media.ms`
    display: flex;
  `}

  amp-social-share {
    ${Css}

    @media (hover: hover) {
      &:hover {
        background: #2bb24c;
      }
    }

    &:focus {
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
            aria-label="Facebookでシェア"
          >
            <Facebook />
          </amp-social-share>
        </FacebookIcon>
      ) : type === 'hatebu' ? (
        <HatebuIcon>
          <amp-social-share type={type} width="40" height="40" data-share-endpoint={url} aria-label="はてブでシェア">
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
            aria-label="LINEでシェア"
          >
            <Line />
          </amp-social-share>
        </LineIcon>
      ) : type === 'pocket' ? (
        <PocketIcon>
          <amp-social-share type={type} width="40" height="40" data-share-endpoint={url} aria-label="Pocketに保存">
            <Pocket />
          </amp-social-share>
        </PocketIcon>
      ) : type === 'note' ? (
        <NoteIcon>
          <amp-social-share type={type} width="40" height="40" data-share-endpoint={url} aria-label="noteで書く">
            <Note />
          </amp-social-share>
        </NoteIcon>
      ) : (
        type === 'feedly' && (
          <FeedlyIcon>
            <amp-social-share type={type} width="40" height="40" data-share-endpoint={url} aria-label="Feedlyに登録">
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
