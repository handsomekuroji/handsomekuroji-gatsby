import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media } from '../../components/variable/mixin'
import Card from '../../components/molecules/card'

const Wrapper = styled.div`
  margin: -16px calc(50% - 50vw);
  overflow: scroll hidden;
  padding: 16px 0;
  position: relative;
  -webkit-overflow-scrolling: touch;
`

const Container = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 640px;
  width: calc(100% - 16px);

  ${media.xs`width: calc(100% - 32px);`}

  ${media.s`width: calc(100% - 48px);`}

  ${media.ms`
    max-width: 690px;
    width: calc(100% - 64px);
  `}

  ${media.l`max-width: 960px;`}

  &::after {
    content: '';
    display: block;
    padding: 4px;

    ${media.xs`padding: 8px;`}

    ${media.s`padding: 12px;`}

    ${media.ms`padding: 16px;`}
  }
`

export default function Best({ edges }) {
  const cards = edges.map((edge, i) => <Card key={i} edge={edge} />)

  return (
    <Wrapper>
      <Container>{cards}</Container>
    </Wrapper>
  )
}

Best.propTypes = {
  edges: PropTypes.array
}
