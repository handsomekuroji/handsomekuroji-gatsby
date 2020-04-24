import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media } from '~src/components/variable/mixin'
import Article from '~src/components/molecules/article'

const Wrapper = styled.section`
  display: grid;
  gap: 24px;
  margin: 24px 0 0;

  ${media.s} {
    grid-template-columns: 1fr 1fr;
    margin: 24px 0 0;
  }

  ${media.l} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`

export default function Recommend({ edges }) {
  const articles = edges.map((edge, i) => <Article key={i} edge={edge} recommend />)

  return <Wrapper>{articles}</Wrapper>
}

Recommend.propTypes = {
  edges: PropTypes.array
}
