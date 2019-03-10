import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Global from './variable/global'
import { connect } from 'react-redux'

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

function SetSiteState({ siteState, increment, children }) {
  return (
    <Wrapper>
      <Helmet bodyAttributes={{ class: siteState === true ? 'dark' : 'light' }} />
      {children}
      <ButtonDark onClick={increment} type="button" aria-label="ダークモード" aria-pressed="false">
        {siteState === true ? (
          <Sun width="32" height="32" alt="ライトモードボタン" />
        ) : (
          <Moon width="32" height="32" alt="ダークモードボタン" />
        )}
      </ButtonDark>
    </Wrapper>
  )
}

SetSiteState.propTypes = {
  siteState: PropTypes.bool.isRequired,
  increment: PropTypes.func.isRequired
}

const mapStateToProps = ({ siteState }) => {
  return { siteState }
}

const mapDispatchToProps = dispatch => {
  return { increment: () => dispatch({ type: 'INCREMENT' }) }
}

const DarkWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(SetSiteState)

export default function Layout({ children }) {
  return (
    <DarkWrapper>
      <Global />
      {children}
    </DarkWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
