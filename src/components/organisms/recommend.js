import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media } from '../variable/mixin'
import Article from '../molecules/article'

const Wrapper = styled.section`
  display: grid;
  gap: 24px;
  margin: 16px 0 0;

  ${media.s`
    margin: 24px 0 0;
  `}

  ${media.ms`
    grid-template-columns: 1fr 1fr;
  `}

  ${media.l`grid-template-columns: 1fr 1fr 1fr;`}
`

export default function Recommend({ edges }) {
  const articles = edges.map((edge, i) => <Article key={i} edge={edge} recommend />)

  return <Wrapper>{articles}</Wrapper>
}

Recommend.propTypes = {
  edges: PropTypes.array
}
