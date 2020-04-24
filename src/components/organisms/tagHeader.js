import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, media } from '~src/components/variable/mixin'

const Header = styled.header`
  display: grid;
  gap: 8px;
  grid-template-columns: auto 1fr;

  ${media.l} {
    gap: 12px 16px;
  }
`

const Image = styled.img`
  border-radius: 50%;
  grid-row: 1 / 3;
  height: 48px;
  object-fit: cover;
  width: 48px;

  ${media.l} {
    height: 64px;
    width: 64px;
  }
`

const Title = styled.h1`
  align-self: flex-end;
  color: var(--c_1);
  font: bold 1.5rem / 1 ${font.$f_1};

  &::before {
    content: '#';
  }

  ${media.l} {
    font-size: 2rem;
  }
`

const Count = styled.div`
  font: 0.9rem / 1 ${font.$f_1};
  margin: 0 0 0 2px;

  ${media.l} {
    font-size: 0.9rem;
  }
`

export default function TagHeader({ header }) {
  const src = header.img
  const name = header.title

  return (
    <Header>
      <Image src={`${src}?w=96`} width="48" height="48" alt={name} loading="lazy" decoding="async" />
      <Title>{name}</Title>
      <Count>{header.count}</Count>
    </Header>
  )
}

TagHeader.propTypes = {
  header: PropTypes.object
}
