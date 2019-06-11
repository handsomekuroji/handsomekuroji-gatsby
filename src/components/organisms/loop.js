import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { media } from '../variable/mixin'
import Article from '../../components/molecules/article'

const Css = css`
  display: grid;
  gap: 24px;

  ${media.ms`
    grid-gap: 32px;
    grid-template-columns: 1fr 1fr;
  `}

  ${media.l`grid-template-columns: 1fr 1fr 1fr;`}
`

const Wrapper = styled.div`
  ${Css}

  margin: 16px 0 0;

  ${media.m`margin: 24px 0 0;`}
`

const Other = styled.div`
  ${Css}

  margin: 16px 0 0;

  ${media.m`margin: 24px 0 0;`}
`

export default function Loop({ edges, tag }) {
  const articles = edges.map((edge, i) => <Article key={i} edge={edge} />)

  return tag ? <Other>{articles}</Other> : <Wrapper>{articles}</Wrapper>
}

Loop.propTypes = {
  edges: PropTypes.array,
  tag: PropTypes.bool
}
