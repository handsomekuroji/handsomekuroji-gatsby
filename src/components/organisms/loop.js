import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media } from '../variable/mixin'
import lozad from '../../plugins/lozad'
import Article from '../../components/molecules/article'

const LoopWrapper = styled.div`
  display: grid;
  gap: 24px;
  ${media.ms`
    grid-gap: 32px;
    grid-template-columns: 1fr 1fr;
  `}
  ${media.l`
    grid-template-columns: 1fr 1fr 1fr;
  `}
`

function Loop({ allPosts }) {
  React.useEffect(() => {
    lozad()
  }, [LoopWrapper])

  return (
    <LoopWrapper>
      {allPosts.map((edge, i) => (
        <Article key={i} postsData={edge} />
      ))}
    </LoopWrapper>
  )
}

Loop.propTypes = {
  allPosts: PropTypes.array
}

export default Loop
