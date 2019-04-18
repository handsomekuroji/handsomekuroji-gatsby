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
  position: absolute;
  top: 16px;
  right: 16px;
`

export default function Layout({ children }) {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Wrapper>
          <Helmet bodyAttributes={{ class: theme.dark ? 'dark' : 'light' }} />
          <Global />
          {children}
          <ButtonDark onClick={theme.toggleDark} type="button" aria-label="ダークモード" aria-pressed="false">
            {theme.dark ? (
              <Sun width="32" height="32" alt="ライトモードボタン" decoding="async" />
            ) : (
              <Moon width="32" height="32" alt="ダークモードボタン" decoding="async" />
            )}
          </ButtonDark>
        </Wrapper>
      )}
    </ThemeContext.Consumer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
