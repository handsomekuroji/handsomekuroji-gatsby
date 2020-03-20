import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { font, media } from '~src/components/variable/mixin'

const List = styled.li`
  margin: 8px;

  ${media.ms`
    margin: 8px 12px;
  `}
`

const Anchor = styled(Link)`
  color: var(--c_0);
  display: flex;
  font: 1rem / 1 ${font.$f_1};
  height: auto;
  vertical-align: bottom;
  position: relative;
  text-decoration: none;
  width: 100%;

  ${media.m`
    font-size: 1rem;
  `}

  @media (hover: hover) {
    &:hover::before {
      transform: scaleX(1) translateY(-50%);
      transform-origin: center left;
    }
  }

  &:focus::before {
    transform: scaleX(1) translateY(-50%);
    transform-origin: center left;
  }

  &:visited {
    color: var(--c_0);
  }

  &::before {
    background: var(--c_0);
    content: '';
    height: 1px;
    left: 0;
    position: absolute;
    right: 0;
    top: 50%;
    transform: scaleX(0) translateY(-50%);
    transform-origin: center right;
    transition: transform 0.2s ease;
  }
`

export default function Tag({ edge }) {
  return (
    <List>
      <Anchor to={`/${edge.node.slug}`}>
        <span aria-hidden="true">#</span>
        {edge.node.name}
      </Anchor>
    </List>
  )
}

Tag.propTypes = {
  edge: PropTypes.object
}
