import React from 'react'
import styled from 'styled-components'
import { media } from '../variable/mixin'
import posed from 'react-pose'
import big from '../../images/icon/handsomekuroji.svg'
import small from '../../images/icon/hk.svg'

const popover = {
  visible: {
    delay: 2400,
    transition: { ease: 'backIn', duration: 400 },
    width: 0
  },
  hidden: {
    left: 'auto',
    width: '100%'
  }
}

const inner = {
  visible: {
    delay: 2500,
    opacity: 0
  }
}

const Wrapper = styled(posed.div(popover))`
  align-items: center;
  background: var(--c_3);
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 999;
`

const Inner = styled(posed.div(inner))`
  position: relative;

  @keyframes animate-svg-width {
    0% {
      right: auto;
      width: 0;
    }

    100% {
      right: 0;
      width: 100%;
    }
  }

  &::before {
    animation: animate-svg-width 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55) 2s both;
    content: '';
    background: var(--c_3);
    bottom: 0;
    display: block;
    left: 0;
    position: absolute;
    top: 0;
    z-index: 9999;
  }
`

const Big = styled(big)`
  display: none;
  fill: var(--c_1);

  ${media.ms`display: inline`}

  @keyframes animate-svg-fill {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  .hkb-1 {
    animation: animate-svg-fill 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.3s both;
  }

  .hkb-2 {
    animation: animate-svg-fill 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.4s both;
  }

  .hkb-3 {
    animation: animate-svg-fill 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.5s both;
  }

  .hkb-4 {
    animation: animate-svg-fill 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.6s both;
  }

  .hkb-5 {
    animation: animate-svg-fill 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.7s both;
  }

  .hkb-6 {
    animation: animate-svg-fill 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.8s both;
  }

  .hkb-7 {
    animation: animate-svg-fill 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55) 0.9s both;
  }

  .hkb-8 {
    animation: animate-svg-fill 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55) 1s both;
  }

  .hkb-9 {
    animation: animate-svg-fill 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55) 1.1s both;
  }

  .hkb-10 {
    animation: animate-svg-fill 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55) 1.2s both;
  }

  .hkb-11 {
    animation: animate-svg-fill 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55) 1.3s both;
  }

  .hkb-12 {
    animation: animate-svg-fill 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55) 1.4s both;
  }

  .hkb-13 {
    animation: animate-svg-fill 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55) 1.5s both;
  }

  .hkb-14 {
    animation: animate-svg-fill 0.7s cubic-bezier(0.68, -0.55, 0.265, 1.55) 1.6s both;
  }
`

const Small = styled(small)`
  display: inline;
  fill: var(--c_1);

  ${media.ms`display: none;`}

  .hks-1 {
    animation: animate-svg-small 0.7s cubic-bezier(0.6, -0.28, 0.735, 0.045) 0.3s both;
  }
`

export default function Splash() {
  const [Visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    setVisible(!Visible)
  }, [])

  return (
    <Wrapper pose={Visible ? 'visible' : 'hidden'}>
      <Inner>
        <Big width="220.61" height="74" title="ロゴ" aria-hidden="true" />
        <Small width="60" height="58.45" title="ロゴ" aria-hidden="true" />
      </Inner>
    </Wrapper>
  )
}
