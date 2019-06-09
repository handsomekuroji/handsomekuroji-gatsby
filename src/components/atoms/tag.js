import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { font, media } from '../variable/mixin'

const TagList = styled.li`
  margin: 8px;

  ${media.ms`margin: 8px 12px;`}
`

const TagLink = styled(Link)`
  color: var(--c_0);
  display: flex;
  font: 1rem / 1 ${font.$f_1};
  height: auto;
  vertical-align: bottom;
  position: relative;
  text-decoration: none;
  width: 100%;

  ${media.m`font-size: 1rem;`}

  &:hover, &:focus {
    &::before {
      transform: scaleX(1) translateY(-50%);
      transform-origin: center left;
    }
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
    transition: transform 0.3s ease;
  }
`

export default function Tag({ tagList }) {
  const tagData = tagList.node

  return (
    <TagList>
      <TagLink to={`/${tagData.slug}`}>
        <span aria-hidden="true">#</span>
        {tagData.name}
      </TagLink>
    </TagList>
  )
}

Tag.propTypes = {
  tagList: PropTypes.object
}
