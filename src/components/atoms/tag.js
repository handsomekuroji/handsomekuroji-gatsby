import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, color, media } from '../variable/mixin'

const TagList = styled.li`
  margin: 8px;
  ${media.ms`
    margin: 8px 16px;
  `}
`

const TagLink = styled.a`
  color: ${color.$c_0};
  font: italic bold 1rem / 1 ${font.$f_1};
  height: auto;
  vertical-align: bottom;
  text-decoration: none;
  transition: 0.1s linear;
  width: 100%;
  &:hover {
    color: ${color.$c_7};
    transition: 0.1s all;
    &:visited {
      color: ${color.$c_7};
    }
  }
  &:visited {
    color: ${color.$c_0};
  }
  &::before {
    content: '#';
  }
`

function Tag({ tagList }) {
  const tagData = tagList.node
  return (
    <TagList>
      <TagLink href={'/' + tagData.slug}>{tagData.name}</TagLink>
    </TagList>
  )
}

Tag.propTypes = {
  tagList: PropTypes.object
}

export default Tag
