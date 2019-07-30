import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { media } from '../../components/variable/mixin'

const Wrapper = styled.div`
  font-size: 0.95rem;
  line-height: 1.8;
  transition: 0.3s;

  ${media.m`
    font-size: 1rem;
  `}
`

const Container = styled.div`
  border-top: 1px solid var(--c_8);
  position: relative;

  &::before,
  &::after {
    background: linear-gradient(0.25turn, rgba(var(--c_4-rgb), 0), rgba(var(--c_4-rgb), 1), rgba(var(--c_4-rgb), 1));
    content: '';
    display: block;
    height: calc(100% - 4px);
    left: auto;
    position: absolute;
    right: 0;
    top: 0;
    width: 16px;
    z-index: 2;

    ${media.s`width: 24px;`}

    ${media.ms`width: 32px;`}

    ${media.m`width: 64px;`}
  }

  &::after {
    background: linear-gradient(0.25turn, rgba(var(--c_4-rgb), 1), rgba(var(--c_4-rgb), 1), rgba(var(--c_4-rgb), 0));
    left: 0;
    right: auto;
  }
`

const Inner = styled.div`
  box-sizing: border-box;
  height: 590px;
  overflow: auto;
  padding: 24px 24px 24px 0;
  width: 100%;
  writing-mode: vertical-rl;
  -webkit-overflow-scrolling: touch;

  &::after {
    content: '';
    display: block;
    width: 24px;

    ${media.s`width: 24px;`}

    ${media.ms`width: 32px;`}

    ${media.m`width: 64px;`}
  }

  &::-webkit-scrollbar {
    appearance: scrollbarbutton-up;
    display: inline;
    height: 4px;
    width: auto;
    overflow: overlay;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--c_2);
    position: relative;
    z-index: 3;
  }

  ${media.s`
    height: 616px;
    padding: 32px 24px 32px 0;
  `}

  ${media.ms`padding: 32px 32px 32px 0;`}

  ${media.m`
    height: 648px;
    padding: 48px 64px 48px 0;
  `}

  p {
    letter-spacing: 0.1rem;
    margin: 0 16px 0 0;
    text-indent: 1em;

    &:first-of-type {
      margin: 0;
    }
  }

  hr {
    border: 0;
    margin: 0 48px;
    text-align: center;

    &::after {
      color: var(--c_0);
      content: '＊＊＊';
      font-size: 16px;
      letter-spacing: 1em;
    }
  }
`

export default function Section({ content }) {
  return (
    <Wrapper>
      <Container>
        <Inner
          dangerouslySetInnerHTML={{
            __html: content
          }}
        />
      </Container>
    </Wrapper>
  )
}
Section.propTypes = {
  content: PropTypes.string
}
