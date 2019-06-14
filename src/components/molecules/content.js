import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, media } from '../../components/variable/mixin'
import youtube from '../../plugins/youtube'
import social from '../../plugins/social'
import PlayIcon from '../../images/main/play.svg'

const Wrapper = styled.div`
  counter-reset: section;
  font-size: 0.95rem;
  line-height: 1.8;
  padding: 0 0 32px;
  transition: 0.3s;

  ${media.m`
    font-size: 1rem;
    padding: 0 0 48px;
  `}

  section {
    margin: 16px 0 0;
    overflow: hidden;
    padding: 0 16px;

    ${media.s`
      margin: 32px 0 0;
      padding: 0 24px;
    `}

    ${media.ms`
      margin: 48px 0 0;
      padding: 0 32px;
    `}

    ${media.m`padding: 0 64px;`}

    &:first-of-type {
      margin: 0;
    }

    &::before {
      border-top: 1px solid var(--c_8);
      content: '';
      display: block;
      margin: 0 -24px;
      padding: 0 0 16px;

      ${media.s`padding: 0 0 32px;`}

      ${media.ms`margin: 0 -32px;`}

      ${media.m`
        margin: 0 -64px;
        padding: 0 0 48px;
      `}
    }
  }

  h2 {
    color: var(--c_1);
    font: bold 1.3rem / 1.5 ${font.$f_1};
    letter-spacing: 0.1rem;
    position: relative;
    z-index: 1;

    ${media.l`font-size: 1.5rem;`}

    &::before {
      color: var(--c_8);
      counter-increment: section;
      content: counter(section, decimal-leading-zero);
      font: italic bold 7rem / 1.1 'Georgia', serif;
      left: -32px;
      position: absolute;
      text-indent: 0.1rem;
      top: -60px;
      white-space: pre;
      z-index: -1;

      ${media.s`top: -80px;`}

      ${media.m`
        font-size: 10rem
        left: -80px;
        top: -112px;
      `}

      ${media.l`
        font-size: 12rem
        top: -128px;
      `}
    }
  }

  p {
    letter-spacing: 0.05rem;
    margin: 24px 0 0;
    overflow: hidden;

    &:first-of-type {
      position: relative;
      z-index: 1;
    }
  }

  ul {
    list-style: disc;
    margin: 24px 0 0;
    padding: 0 0 0 20px;
  }

  figure {
    background: var(--c_3);
    border-radius: 12px;
    margin: 32px 0;
    overflow: hidden;
    &:last-child {
      margin: 32px 0 0;
    }
  }

  figcaption {
    background: var(--c_8);
    box-sizing: border-box;
    color: var(--c_3);
    font-size: 0.8rem;
    font-weight: bold;
    overflow: hidden;
    padding: 8px 12px;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
  }

  img {
    background: var(--c_2);
    height: auto;
    vertical-align: bottom;
    width: 100%;

    &.fade {
      background: 0;
    }

    .dark & {
      filter: brightness(80%);
    }
  }

  blockquote {
    background: var(--c_8);
    padding: 16px 32px 24px;
    position: relative;
    margin: 0 -32px;

    ${media.m`margin: 0;`}

    &[data-title] {
      margin: 0;
      padding: 16px;
      z-index: 1;

      ${media.ms`padding: 24px 32px;`}

      &::before {
        color: var(--c_4);
        content: attr(data-title);
        font: italic bold 4rem / 1.1 'Georgia', serif;
        left: -8px;
        position: absolute;
        text-indent: 0.1rem;
        top: -16px;
        -webkit-text-stroke: 0;
        white-space: pre;
        z-index: -1;

        ${media.m`
          font-size: 5rem
          left: -16px;
          top: -24px;
        `}
      }
    }

    p {
      font-size: 0.9rem;

      &:first-of-type {
        margin: 0;

        &:first-letter {
          font-size: 2.2rem;
          font-weight: bold;
          float: left;
          line-height: 1.4;
          letter-spacing: 0.2em;
        }
      }
    }
  }

  hr {
    border: 0;
    border-top: 1px solid var(--c_8);
    margin: 16px -16px;

    ${media.s`margin: 32px -24px;`}

    ${media.ms`margin: 48px -32px;`}

    ${media.m`margin: 48px -64px;`}
  }

  .twitter-tweet {
    display: grid !important;
    justify-content: center;
    margin: 32px auto 0 !important;
    width: 100% !important;
  }

  .instagram-media {
    box-sizing: border-box;
    margin: 32px auto 0 !important;
    min-width: unset !important;
  }

  .link {
    background: var(--c_8);
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: bold;
    margin: 24px 0 0;
    padding: 16px;
    text-decoration: none;

    ${media.ms`
      font-size: 0.95rem;
      padding: 16px 20px;
    `}

    p {
      display: flex;
      line-height: 1.5;
      margin: 0;

      &::before {
        content: '👉';
      }
    }

    a {
      margin: 0 0 0 4px;
      position: relative;
      text-decoration: none;

      &:hover, &:focus {
        &::before {
          transform: scaleX(1) translateY(-50%);
          transform-origin: center left;
        }
      }

      &:visited {
        color: var(--c_5);
      }

      &::before {
        background: var(--c_5);
        content: '';
        height: 1px;
        left: 0;
        position: absolute;
        right: 0;
        top: 50%;
        transform: scaleX(0) translateY(-50%);
        transform-origin: center right;
        transition: transform 0.3s ease;
      }
    }
  }

  .youtube {
    background: var(--c_0);
    position: relative;
    z-index: 1;

    &::before {
      content: '';
      display: block;
      padding: 56.25% 0 0;
    }

    iframe {
      border: 0;
      height: 100%;
      position: absolute;
      top: 0;
      width: 100%;
    }
  }

  .youtube__img {
    object-fit: cover;
    height: 100%;
    position: absolute;
    top: 0;
    transition: 0.2s ease;
    width: 100%;
  }

  .youtube__button {
    bottom: 0;
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;

    &::before {
      align-items: center;
      background: url(${PlayIcon}) 50% / 16px 16px rgba(var(--c_9-rgb), 0.8) no-repeat;
      border-radius: 50%;
      bottom: 0;
      content: '';
      display: flex;
      height: 48px;
      justify-content: center;
      left: 0;
      margin: auto;
      opacity: 0.6;
      right: 0;
      transition: 0.2s ease;
      width: 48px;
    }

    &:hover::before {
      background-color: rgba(var(--c_9-rgb), 0.8);
      opacity: 0.8;
    }
  }

  .youtube__icon {
    height: 16px;
    width: 16px;
  }

  .storyline {
    border-radius: 12px;
    margin: 32px 0;
    overflow: hidden;
    position: relative;

    [data-youtube] {
      border-radius: 12px 12px 0 0;
      margin: 0;
      z-index: 2;
    }

    ${media.m`
      [data-youtube] {
        margin: 0;
      }
    `}
  }

  .item {
    background: var(--c_8);
    border-radius: 12px;
    display: grid;
    grid-gap: 16px;
    margin: 24px 0 0;
    padding: 32px 16px;

    ${media.ls`
      grid-auto-flow: column;
      grid-gap: 32px;
      padding: 32px;
    `}
  }

  .item__figure {
    margin: 0 auto;
    position: relative;
    width: 160px;

    &::before {
      backface-visibility: hidden;
      background: rgba(var(--c_9-rgb), 0.8);
      border-radius: 24px;
      bottom: 0;
      content: '';
      display: block;
      filter: blur(8px);
      height: 16px;
      left: 0;
      margin: auto;
      min-width: 80px;
      position: absolute;
      right: 0;
      width: calc(100% - 48px);
    }

    ${media.ls`margin: 0 0 0 auto;`}
  }

  .item__img {
    border-radius: 6px;
    height: auto;
    position: relative;
    width: 100%;
  }

  .item__name {
    font-weight: bold;
    text-align: center;

    ${media.ls`text-align: left;`}
  }

  .item__title {
    display: inline-block;
    font: bold 1rem / 1.6 ${font.$f_1};
    margin: 0 8px 0 0;

    ${media.m`font-size: 1rem;`}

    ${media.ls`font-size: 1.2rem;`}

    &:last-of-type {
      margin: 0;
    }
  }

  .item__button {
    display: grid;
    grid-gap: 8px;
    justify-content: center;
    margin: 16px 0 0;

    ${media.s`grid-auto-flow: column;`}

    ${media.ms`grid-gap: 16px;`}

    ${media.ls`
      grid-gap: 8px;
      justify-content: flex-start;
    `}
  }

  .item__a {
    align-items: center;
    background: var(--c_4);
    border-radius: 4px;
    box-sizing: border-box;
    color: var(--c_1);
    display: flex;
    font: italic bold 0.95rem / 1 ${font.$f_1};
    justify-content: center;
    padding: 10px 12px 11px;
    position: relative;
    text-decoration: none;
    width: 160px;
    z-index: 1;

    ${media.s`width: 96px;`}

    ${media.sm`width: 112px;`}

    ${media.ms`width: 120px;`}

    ${media.m`font-size: 1rem;`}

    ${media.ls`width: 96px;`}

    &:hover {
      background: var(--c_2);
      color: var(--c_1);
    }

    &:visited {
      color: var(--c_1);

      &:hover {
        color: var(--c_1);
      }
    }
  }

  .iframe {
    position: relative;

    &::before {
      content: '';
      display: block;
      padding: 56.25% 0 0;
    }
  }

  .iframe__data {
    border: 0;
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
  }
`

export default function Content({ content }) {
  const wrapper = React.useRef()

  React.useEffect(() => {
    youtube(wrapper.current)
    social('https://platform.twitter.com/widgets.js', 'twitter-tweet', wrapper.current)
  }, [content])

  return (
    <Wrapper
      ref={wrapper}
      dangerouslySetInnerHTML={{
        __html: content
      }}
    />
  )
}

Content.propTypes = {
  content: PropTypes.string
}
