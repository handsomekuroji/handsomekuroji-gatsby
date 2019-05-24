import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media, font } from '../variable/mixin'
import Logo from '../atoms/logo'
import Tag from '../atoms/tag'

const SiteFooter = styled.footer`
  align-items: center;
  display: grid;
  gap: 8px;
  margin: 32px auto 0;
  max-width: 640px;
  width: calc(100% - 32px);

  ${media.xs`width: calc(100% - 48px);`}

  ${media.ms`
    gap: 24px 8px;
    max-width: 690px;
  `}

  ${media.m`width: calc(100% - 64px);`}

  ${media.ls`
    gap: 32px 8px;
    margin: 48px auto 0;
  `}
`

const SiteNav = styled.nav`
  ${media.ms`grid-column: 1 / 3;`}
`
const SiteList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const SiteFig = styled.div`
  margin: 28px auto 0;
  width: 48px;

  ${media.ms`
    margin: 0;
    justify-self: flex-end;
    width: 120px;
  `}
`

const Copy = styled.small`
  color: var(--c_0);
  font-family: ${font.$f_1};
  font-size: 0.8rem;
  text-align: center;

  ${media.ms`justify-self: flex-start;s`}
`

export default function Footer({ alltags }) {
  const loopTags = alltags && alltags.map((edge, i) => <Tag key={i} tagList={edge} />)
  const siteDate = new Date().getFullYear()

  return (
    <SiteFooter>
      <SiteNav>
        <SiteList>{loopTags}</SiteList>
      </SiteNav>
      <SiteFig>
        <Logo />
      </SiteFig>
      <Copy>© 2017 - {siteDate}</Copy>
    </SiteFooter>
  )
}

Footer.propTypes = {
  alltags: PropTypes.array
}
