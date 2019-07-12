import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Global from '../variable/global'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 0 16px;
`

export default function Layout({ children }) {
  return (
    <Wrapper>
      <Global />
      {children}
    </Wrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
