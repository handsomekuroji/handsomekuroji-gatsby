import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import share from '../../plugins/share'

const ShareButton = styled.button`
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

export default function Share({ shareData }) {
  const [isActive, setIsActive] = React.useState(false)

  const shareLink = () => {
    share(shareData, event)
  }

  React.useLayoutEffect(() => {
    if (typeof navigator.share === 'undefined') {
      setIsActive(true)
    }
  }, [ShareButton])

  return (
    isActive && (
      <ShareButton type="button" onClick={shareLink}>
        SHARE
      </ShareButton>
    )
  )
}

Share.propTypes = {
  shareData: PropTypes.object
}
