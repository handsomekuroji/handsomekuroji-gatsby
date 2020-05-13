import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Button = styled.div`
  align-self: center;
  justify-self: flex-end;

  amp-social-share {
    align-items: center;
    background: none;
    border: 1px solid var(--c_7);
    border-radius: 8px;
    box-sizing: border-box;
    color: var(--c_7);
    display: flex;
    font-size: 0.8rem;
    font-weight: bold;
    justify-content: center;
    padding: 0 16px;
  }
`

export default function Share({ meta }) {
  return (
    <Button>
      <amp-social-share width="79px" height="32px" type="system" data-param-text={meta.title} data-param-url={meta.url}>
        SHARE
      </amp-social-share>
    </Button>
  )
}

Share.propTypes = {
  meta: PropTypes.object,
}
