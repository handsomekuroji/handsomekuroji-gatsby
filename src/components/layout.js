import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Global from './variable/global'
import { connect } from 'react-redux'

import Sun from '../images/icon/sun.svg'
import Moon from '../images/icon/moon.svg'

const Wrapper = styled.div`
  background: var(--c_3);
  color: var(--c_0);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 0 16px;
  transition: 0.3s all;
  &.dark {
    --c_0: #fcfcfc;
    --c_2: rgba(0, 0, 0, 0.3);
    --c_3: #0d2538;
    --c_4: #0f2d44;
    --c_7: #ced8de;
  }
`

const ButtonDark = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
`

const Counter = ({ count, increment, children }) => (
  <Wrapper className={count === true ? 'dark' : null}>
    {children}
    <ButtonDark onClick={increment}>
      {count === true ? (
        <Sun width="32" height="32" alt="ライトモードボタン" />
      ) : (
        <Moon width="32" height="32" alt="ダークモードボタン" />
      )}
    </ButtonDark>
  </Wrapper>
)

Counter.propTypes = {
  count: PropTypes.bool.isRequired,
  increment: PropTypes.func.isRequired
}

const mapStateToProps = ({ count }) => {
  return { count }
}

const mapDispatchToProps = dispatch => {
  return { increment: () => dispatch({ type: 'INCREMENT' }) }
}

const DarkWrapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

function Layout({ children }) {
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

export default Layout
