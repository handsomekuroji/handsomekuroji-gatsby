import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { media } from '../variable/mixin'
import lozad from '../../plugins/lozad'
import Article from '../../components/molecules/article'

const Wrapper = css`
  display: grid;
  gap: 24px;

  ${media.ms`
    grid-gap: 32px;
    grid-template-columns: 1fr 1fr;
  `}

  ${media.l`grid-template-columns: 1fr 1fr 1fr;`}
`

const LoopWrapper = styled.div`
  ${Wrapper}
`

const TagLoopWrapper = styled.div`
  ${Wrapper}

  margin: 16px 0 0;

  ${media.m`margin: 24px 0 0;`}
`

export default function Loop({ allPosts, inTags }) {
  const loopPosts = allPosts.map((edge, i) => <Article key={i} postsData={edge} />)
  const loopResult = inTags ? <TagLoopWrapper>{loopPosts}</TagLoopWrapper> : <LoopWrapper>{loopPosts}</LoopWrapper>

  React.useEffect(() => {
    lozad()
  }, [LoopWrapper])

  return loopResult
}

Loop.propTypes = {
  allPosts: PropTypes.array,
  inTags: PropTypes.bool
}
