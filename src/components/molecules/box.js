import React from 'react'
import PropTypes from 'prop-types'
import posed from 'react-pose'
import styled from 'styled-components'
import { media, font } from '../variable/mixin'
import dummy from '../../images/main/dummy.svg'

const BoxWrapper = styled.div`
  box-shadow: rgba(var(--c_9-rgb), 0.1) 0 1px 6px;
  box-sizing: border-box;
  border-radius: 8px;
  cursor: pointer;
  position: relative;
  transition: 0.2s ease-in;

  &::after {
    bottom: 0;
    border-radius: 24px;
    bottom: -7px;
    content: '';
    display: block;
    filter: blur(8px);
    height: 16px;
    left: 0;
    margin: auto;
    min-width: 80px;
    position: absolute;
    right: 0;
    transition: 0.3s linear;
    width: calc(100% - 48px);
    z-index: -1;
  }

  &:hover {
    transform: translate(0, -2px);

    &::after {
      background: rgba(var(--c_9-rgb), 0.1);
    }
  }
`

const BoxContainer = styled.div`
  background: var(--c_4);
  border-radius: 8px;
  display: grid;
  gap: 0 12px;
  grid-template-columns: 96px 1fr;
  overflow: hidden;
  padding: 16px;

  ${media.ms`grid-template-columns: 120px 1fr;`}

  ${media.m`grid-template-columns: 96px 1fr;`}

  &:focus {
    outline: thin solid rgba(var(--c_5-rgb), 0.5);
  }
`

const BoxFigure = styled.figure`
  align-items: center;
  display: flex;
`

const BoxImage = styled.img`
  border-radius: 8px;
  height: auto;
  position: relative;
  width: 100%;
  z-index: 2;
`

const BoxTitle = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`

const BoxCount = styled.span`
  color: var(--c_10);
  font: italic bold 9rem / 1.1 'Georgia', serif;
  left: -24px;
  position: absolute;
  text-indent: 0.1rem;
  top: -68px;
  white-space: pre;
  z-index: 1;
`

const BoxName = styled.h2`
  font: bold 1rem / 1 ${font.$f_1};
  margin: 16px 0 0;
  position: relative;
  z-index: 2;

  ${media.ms`font-size: 1.5rem;`}

  ${media.m`font-size: 1rem;`}
`

const BoxText = styled.p`
  font: 0.7rem / 1 ${font.$f_1};
  margin: 4px 0 auto;
  position: relative;
  z-index: 2;
`

const BoxLink = styled.a`
  align-items: center;
  background: var(--c_10);
  border-radius: 32px;
  color: var(--c_1);
  display: flex;
  font: bold 0.9rem / 1 ${font.$f_1};
  height: 32px;
  justify-content: center;
  margin: 32px 0 0;
  max-width: 160px;
  text-decoration: none;

  &:hover {
    background: rgba(var(--c_4-rgb), 0.7);
    color: var(--c_1);
  }

  &:visited {
    color: var(--c_1);

    &:hover {
      color: var(--c_1);
    }
  }
`

const BoxInner = styled(
  posed.div({
    closed: {
      height: 0,
      'margin-top': 0,
      opacity: 0,
      'padding-bottom': 0
    },
    open: {
      height: 'auto',
      'margin-top': '24px',
      opacity: 1,
      'padding-bottom': '6px'
    }
  })
)`
  box-sizing: border-box;
  color: var(--c_1);
  font-size: 0.9rem;
  grid-column: 1 / 3;
  overflow: hidden;
  padding: 0 6px;
  position: relative;
  text-align: left;

  ${media.ms`font-size: 1rem;`}

  ${media.m`font-size: 0.9rem;`}

  p {
    letter-spacing: 0.05rem;
    line-height: 1.8;
    margin: 16px 0 0;
    overflow: hidden;

    &:first-of-type {
      margin: 0;
      position: relative;
      z-index: 1;
    }
  }
`

const BoxVideo = styled.figure`
  border-radius: 8px;
  grid-column: 1 / 3;
  height: auto;
  margin: 0 0 24px;
  overflow: hidden;
  position: relative;
  width: 100%;
  z-index: 1;

  &::before {
    content: '';
    display: block;
    padding: 56.25% 0 0;
  }
`

const BoxIframe = styled.iframe`
  border: 0;
  height: 100%;
  position: absolute;
  top: 0;
  width: 100%;
`

export default function Box({ boxData, boxCount, boxSlug }) {
  const box = boxData.node
  const youtube = box.youtube
  const url = box.url
  const title = box.title
  const count = boxCount + 1
  const [isActive, setIsActive] = React.useState(false)

  const boxOpen = () => {
    setIsActive(isActive !== true)
  }

  const boxKey = e => {
    e.key === 'Enter' && setIsActive(isActive !== true)
  }

  const boxDel = e => {
    e.stopPropagation()
  }

  const boxLinkText = boxSlug === 'movie' ? '映画を見る' : '商品リンク'

  const boxVideo = isActive && (
    <BoxVideo>
      <BoxIframe
        id={youtube}
        frameBorder="0"
        allowFullScreen="1"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        title={title}
        width="1280"
        height="720"
        src={`https://www.youtube.com/embed/${youtube}?rel=0&enablejsapi=1&playsinline=1&modestbranding=1&showinfo=0&widgetid=1`}
      />
    </BoxVideo>
  )

  return (
    <article>
      <BoxWrapper>
        <BoxContainer onClick={boxOpen} onKeyDown={boxKey} tabIndex="0">
          <BoxFigure>
            <BoxImage
              src={dummy}
              data-src={url}
              alt={title}
              content={url}
              width="360"
              height="640"
              loading="lazy"
              decoding="async"
            />
          </BoxFigure>
          <BoxTitle>
            <BoxCount>{count}</BoxCount>
            <BoxName>{title}</BoxName>
            <BoxText>{box.text}</BoxText>
            <BoxLink href={box.affiliate} target="_blank" rel="noopener noreferrer" onClick={boxDel} onKeyDown={boxDel}>
              {boxLinkText}
            </BoxLink>
          </BoxTitle>
          <BoxInner pose={isActive ? 'open' : 'closed'}>
            {boxVideo}
            <div
              dangerouslySetInnerHTML={{
                __html: box.content.childMarkdownRemark.html
              }}
            />
          </BoxInner>
        </BoxContainer>
      </BoxWrapper>
    </article>
  )
}

Box.propTypes = {
  boxData: PropTypes.object,
  boxCount: PropTypes.number,
  boxSlug: PropTypes.object
}
