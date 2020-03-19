import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import share from '~src/plugins/share'

const Button = styled.button`
  align-items: center;
  align-self: center;
  border: 1px solid var(--c_7);
  border-radius: 8px;
  box-sizing: border-box;
  color: var(--c_7);
  display: flex;
  font-size: 0.8rem;
  font-weight: bold;
  height: 32px;
  justify-content: center;
  justify-self: flex-end;
  padding: 0 16px;
`

export default function Share({ meta }) {
  const [active, setActive] = React.useState(false)

  const link = () => {
    share(meta)
  }

  React.useLayoutEffect(() => {
    setActive(!!navigator.share)
  }, [])

  const button = active ? (
    <Button type="button" onClick={link}>
      SHARE
    </Button>
  ) : (
    ''
  )

  return button
}

Share.propTypes = {
  meta: PropTypes.object
}
