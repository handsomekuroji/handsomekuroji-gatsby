import React from 'react'
import styled from 'styled-components'
import { color, media } from '../variable/mixin'
import Logo from '../atoms/logo'

const SiteFooter = styled.footer`
  align-items: center;
  display: grid;
  grid-gap: 4px;
  grid-template-columns: auto auto;
  justify-content: center;
  margin: 32px 0 0;
  ${media.ls`
    margin: 48px 0 0;
  `}
`

const SiteFig = styled.div`
  width: 120px;
`

const Copy = styled.small`
  color: ${color.$c_0};
  font-size: 0.8rem;
`

function Footer() {
  return (
    <SiteFooter>
      <SiteFig>
        <Logo />
      </SiteFig>
      <Copy>© 2017 - {new Date().getFullYear()}</Copy>
    </SiteFooter>
  )
}

export default Footer
