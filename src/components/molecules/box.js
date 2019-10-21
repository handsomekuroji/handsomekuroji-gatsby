import React from 'react'
import PropTypes from 'prop-types'
import posed from 'react-pose'
import styled, { css } from 'styled-components'
import { media, font } from '../variable/mixin'
import Amazon from '../../images/icon/amazon.svg'
import Netflix from '../../images/icon/netflix.svg'
import Hulu from '../../images/icon/hulu.svg'

const Wrapper = styled.div`
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

  @media (hover: hover) {
    &:hover {
      transform: translate(0, -2px);

      &::after {
        background: rgba(var(--c_9-rgb), 0.1);
      }
    }
  }

  &.hover {
    transition: none;

    @media (hover: hover) {
      &:hover {
        transform: none;
      }
    }
  }
`

const Container = styled.div`
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

const Figure = styled.figure`
  align-items: center;
  display: flex;
`

const Img = styled.img`
  border-radius: 8px;
  height: auto;
  position: relative;
  width: 100%;
  z-index: 2;
`

const Header = styled.header`
  display: flex;
  flex-direction: column;
  position: relative;
`

const Count = styled.span`
  color: var(--c_10);
  font: italic bold 9rem / 1.1 'Georgia', serif;
  left: -24px;
  position: absolute;
  text-indent: 0.1rem;
  top: -68px;
  white-space: pre;
  z-index: 1;
`

const Title = styled.h2`
  font: bold 1rem / 1.3 ${font.$f_1};
  margin: 16px 0 0;
  position: relative;
  z-index: 2;

  ${media.ms`font-size: 1.5rem;`}

  ${media.m`font-size: 1rem;`}
`

const Small = styled.small`
  font: 0.7rem / 1.3 ${font.$f_1};
  margin: 4px 0 auto;
  position: relative;
  z-index: 2;
`

const Button = styled.div`
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(auto-fill, 32px);
`

const Anchor = styled.a`
  border-radius: 6px;
`

const Css = css`
  align-items: center;
  background: var(--c_10);
  border-radius: 6px;
  display: flex;
  height: 32px;
  justify-content: center;
  text-align: center;
  transition: 0.3s linear;
  width: 32px;

  @media (hover: hover) {
    &:hover {
      transition: 0.3s;

      .icon {
        fill: #fff;
        transition: 0.2s;
      }
    }
  }

  .icon {
    fill: var(--c_7);
    transition: 0.5s linear;
  }
`

const AmazonIcon = styled.span`
  ${Css}

  @media (hover: hover) {
    &:hover {
      background: #ff9900;
    }
  }
`

const NetflixIcon = styled.span`
  ${Css}

  @media (hover: hover) {
    &:hover {
      background: #e50914;
    }
  }
`

const HuluIcon = styled.span`
  ${Css}

  @media (hover: hover) {
    &:hover {
      background: #3dbb3d;
    }
  }
`

const Inner = styled(
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
  position: relative;
  text-align: left;
  transform: translate3d(0, 0, 0);

  ${media.ms`font-size: 1rem;`}

  ${media.m`font-size: 0.9rem;`}

  &.visivle {
    visibility: visible;
  }

  &.hidden {
    transition: visibility 0s ease 0.3s;
    visibility: hidden;
  }

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

const Block = styled(
  posed.figure({
    closed: {
      opacity: 0
    },
    open: {
      opacity: 1
    }
  })
)`
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

const Iframe = styled.iframe`
  border: 0;
  height: 100%;
  position: absolute;
  top: 0;
  width: 100%;
`

const Content = styled(
  posed.div({
    closed: {
      opacity: 0
    },
    open: {
      opacity: 1
    }
  })
)`
  opacity: 0;
  transform: translate3d(0, 0, 0);
`

export default function Box({ edge, count }) {
  const box = edge.node
  const embed = box.embed
  const big = box.url.replace('.jpg', '._SL160_.jpg')
  const title = box.title
  const url = box.affiliate
  const number = count + 1

  const [Active, setActive] = React.useState(false)

  const open = () => {
    setActive(Active !== true)
  }

  const key = e => {
    e.key === 'Enter' && setActive(Active !== true)
  }

  const interrupt = e => {
    e.stopPropagation()
  }

  const active = bool => {
    return bool ? 'open' : 'closed'
  }

  const button = url.map((edge, i) => {
    const link = edge.includes('amzn.to') ? (
      <AmazonIcon>
        <Amazon aria-hidden="true" />
      </AmazonIcon>
    ) : edge.includes('netflix.com') ? (
      <NetflixIcon>
        <Netflix aria-hidden="true" />
      </NetflixIcon>
    ) : (
      edge.includes('happyon.jp') && (
        <HuluIcon>
          <Hulu aria-hidden="true" />
        </HuluIcon>
      )
    )

    return (
      <Anchor key={i} href={edge} target="_blank" rel="noopener noreferrer" onClick={interrupt} onKeyDown={interrupt}>
        {link}
      </Anchor>
    )
  })

  const block = () => {
    const iframe =
      embed && embed.includes('shonenjumpplus')
        ? embed
        : `https://www.youtube.com/embed/${embed}?rel=0&enablejsapi=1&playsinline=1&modestbranding=1&showinfo=0&widgetid=1`

    return embed ? (
      <Block pose={active(Active)}>
        <Iframe
          id={embed}
          frameBorder="0"
          allowFullScreen="1"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          title={title}
          width="1280"
          height="720"
          loading="lazy"
          src={iframe}
        />
      </Block>
    ) : (
      ''
    )
  }

  const visible = Active ? 'visible' : 'hidden'

  return (
    <article>
      <Wrapper>
        <Container onClick={open} onKeyDown={key} tabIndex="0">
          <Figure>
            <Img src={big} alt={title} width="360" height="640" loading="lazy" decoding="async" />
          </Figure>
          <Header>
            <Count aria-hidden="true">{number}</Count>
            <Title>{title}</Title>
            <Small>{box.text}</Small>
            <Button>{button}</Button>
          </Header>
          <Inner pose={active(Active)} className={visible}>
            {block()}
            <Content
              pose={active(Active)}
              dangerouslySetInnerHTML={{
                __html: box.content.childMarkdownRemark.html
              }}
            />
          </Inner>
        </Container>
      </Wrapper>
    </article>
  )
}

Box.propTypes = {
  edge: PropTypes.object,
  count: PropTypes.number
}
