import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Global from './variable/global'

import Context from '../context/Theme'

import Sun from '../images/icon/sun.svg'
import Moon from '../images/icon/moon.svg'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 0 16px;
`

const Button = styled.button`
  border-radius: 50%;
  padding: 6px;
  position: absolute;
  top: 16px;
  right: 16px;
  transition: background 0.2s ease, box-shadow 0.2s ease;

  .icon {
    transition: stroke 0.2s ease;
  }

  @media (hover: hover) {
    &:hover {
      background: var(--c_4);
      box-shadow: rgba(var(--c_9-rgb), 0.1) 0 1px 6px;

      .icon {
        stroke: var(--c_7);
      }
    }
  }

  &:focus {
    background: var(--c_4);
    box-shadow: rgba(var(--c_9-rgb), 0.1) 0 1px 6px;

    .icon {
      stroke: var(--c_7);
    }
  }
`

export default function Layout({ children, horror }) {
  const attr = theme => {
    return { class: theme.dark ? 'dark' : 'light', id: 'body' }
  }

  const pressed = theme => {
    return theme.dark
  }

  const label = theme => {
    return theme.dark ? 'ライトモードに切り替え' : 'ダークモードに切り替え'
  }

  const toggle = theme => {
    return theme.toggle
  }

  const icon = theme => {
    return theme.dark ? (
      <Sun width="32" height="32" title="ライトモードボタン" />
    ) : (
      <Moon width="32" height="32" title="ダークモードボタン" />
    )
  }

  const button = theme => {
    return horror ? (
      ''
    ) : (
      <Button
        type="button"
        aria-pressed={pressed(theme)}
        aria-label={label(theme)}
        aria-controls="body"
        onClick={toggle(theme)}
      >
        {icon(theme)}
      </Button>
    )
  }

  const cssTheme = theme => (
    <Wrapper>
      <Helmet bodyAttributes={attr(theme)} />
      {button(theme)}
      <Global />
      {children}
    </Wrapper>
  )

  return <Context.Consumer>{cssTheme}</Context.Consumer>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  horror: PropTypes.bool
}
