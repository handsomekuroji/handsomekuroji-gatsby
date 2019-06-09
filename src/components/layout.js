import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Global from './variable/global'

import ThemeContext from '../context/ThemeContext'

import Sun from '../images/icon/sun.svg'
import Moon from '../images/icon/moon.svg'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 0 16px;
`

const ButtonDark = styled.button`
  border-radius: 50%;
  padding: 6px;
  position: absolute;
  top: 16px;
  right: 16px;
  transition: 0.2s;

  &:hover,
  &:focus {
    background: var(--c_4);
    box-shadow: rgba(var(--c_9-rgb), 0.1) 0px 1px 6px;
  }
`

export default function Layout({ children }) {
  const attr = theme => {
    return { class: theme.dark ? 'dark' : 'light', id: 'body' }
  }

  const toggle = theme => {
    return theme.toggleDark
  }

  const button = theme => {
    return theme.dark ? (
      <Sun width="32" height="32" alt="ライトモードボタン" loading="lazy" decoding="async" />
    ) : (
      <Moon width="32" height="32" alt="ダークモードボタン" loading="lazy" decoding="async" />
    )
  }

  const pressed = theme => {
    return theme.dark
  }

  const label = theme => {
    return theme.dark ? 'ライトモードに切り替え' : 'ダークモードに切り替え'
  }

  const cssTheme = theme => (
    <Wrapper>
      <Helmet bodyAttributes={attr(theme)} />
      <ButtonDark
        type="button"
        aria-pressed={pressed(theme)}
        aria-label={label(theme)}
        aria-controls="body"
        onClick={toggle(theme)}
      >
        {button(theme)}
      </ButtonDark>
      <Global />
      {children}
    </Wrapper>
  )

  return <ThemeContext.Consumer>{cssTheme}</ThemeContext.Consumer>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
