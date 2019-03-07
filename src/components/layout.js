import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Footer from './organisms/footer'
import Global from './variable/global'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

function Layout({ children }) {
  return (
    <>
      <Global />
      <Wrapper>
        {children}
        <Footer />
      </Wrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
