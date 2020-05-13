import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media, font } from '~src/components/variable/mixin'
import Logo from '~src/components/amp/atoms/logo'
import Tag from '~src/components/atoms/tag'

const Wrapper = styled.footer`
  align-items: center;
  display: grid;
  gap: 8px;
  margin: 32px auto 0;
  max-width: 640px;
  width: calc(100% - 32px);

  ${media.xs} {
    width: calc(100% - 48px);
  }

  ${media.ms} {
    gap: 24px 8px;
    max-width: 690px;
  }

  ${media.m} {
    width: calc(100% - 64px);
  }

  ${media.ls} {
    gap: 32px 8px;
    margin: 48px auto 0;
  }
`

const Navigation = styled.nav`
  ${media.ms} {
    grid-column: 1 / 3;
  }
`
const UnOrdered = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Container = styled.div`
  margin: 28px auto 0;
  width: 48px;

  ${media.ms} {
    justify-self: flex-end;
    margin: 0;
    width: 120px;
  }
`

const Copyright = styled.small`
  color: var(--c_0);
  font-family: ${font.$f_1};
  font-size: 0.8rem;
  text-align: center;

  ${media.ms} {
    justify-self: flex-start;
  }
`

export default function Footer({ tag }) {
  const tags = tag && tag.map((edge, i) => <Tag key={i} edge={edge} />)
  const date = new Date().getFullYear()

  return (
    <Wrapper>
      <Navigation aria-label="タグナビゲーション">
        <UnOrdered>{tags}</UnOrdered>
      </Navigation>
      <Container>
        <Logo />
      </Container>
      <Copyright>© 2017 - {date}</Copyright>
    </Wrapper>
  )
}

Footer.propTypes = {
  tag: PropTypes.array,
}
