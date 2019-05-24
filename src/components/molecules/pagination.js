import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  align-items: center;
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(3, 1fr);
  margin: 32px auto 0;
  width: fit-content;
`

const Inner = styled.div`
  align-items: center;
  display: grid;
  gap: 16px;
  grid-auto-flow: column;
  grid-column: 2 / 3;
  justify-self: center;
  width: fit-content;
`

const Current = styled.span`
  font: italic 1rem / 1.1 'Georgia', serif;
  padding: 8px;
`

const PageLink = styled(Link)`
  color: var(--c_0);
  display: flex;
  flex-direction: column;
  font: italic 1rem / 1.1 'Georgia', serif;
  padding: 8px 8px 6px;
  text-decoration: none;

  &::after {
    background: var(--c_0);
    content: '';
    display: block;
    height: 1px;
    margin: 2px 0 0;
    width: 100%;
  }

  &:hover {
    color: var(--c_7);

    &::after {
      background: var(--c_7);
    }
  }

  &:visited {
    color: var(--c_0);

    &:hover {
      color: var(--c_7);
    }
  }
`

const PrevLink = styled(Link)`
  color: var(--c_0);
  font: italic bold 1rem / 1.1 'Georgia', serif;
  grid-column: 1 / 2;
  margin: 0 auto 0 0;
  padding: 8px;
  text-decoration: none;
  width: min-content;

  &:hover {
    color: var(--c_7);
  }

  &:visited {
    color: var(--c_0);

    &:hover {
      color: var(--c_7);
    }
  }
`

const NextLink = styled(Link)`
  color: var(--c_0);
  font: italic bold 1rem / 1.1 'Georgia', serif;
  grid-column: 3 / 4;
  margin: 0 0 0 auto;
  padding: 8px;
  text-decoration: none;
  width: min-content;

  &:hover {
    color: var(--c_7);
  }

  &:visited {
    color: var(--c_0);

    &:hover {
      color: var(--c_7);
    }
  }
`

export default function Pagination({ pagesData }) {
  const { length, pages, number, slug } = pagesData

  const first = number === 1
  const last = number === pages

  const prevPage = number - 1 === 1 ? '' : number - 1
  const nextPage = number + 1

  const slugUrl = slug ? '/' + slug : ''

  const prevUrl = first ? null : slugUrl + '/' + prevPage
  const nextUrl = last ? null : slugUrl + '/' + nextPage

  const min = last ? 3 : 2
  const max = first ? 3 : 2

  const minMax = i => {
    return i !== number && i >= number - min && i <= number + max
  }

  const numSlug = i => {
    return slugUrl + (i === 1 ? '/' : '/' + i)
  }

  const inner = length.map((_, i) =>
    minMax(++i) ? (
      <PageLink key={i} to={numSlug(i)}>
        {i}
      </PageLink>
    ) : (
      i === number && <Current key={i}>{i}</Current>
    )
  )

  const pagesDisplay = pages > 1 && <Inner>{inner}</Inner>
  const prevDisplay = !first && <PrevLink to={prevUrl}>←</PrevLink>
  const nextDisplay = !last && <NextLink to={nextUrl}>→</NextLink>

  return (
    <Wrapper>
      {prevDisplay}
      {pagesDisplay}
      {nextDisplay}
    </Wrapper>
  )
}

Pagination.propTypes = {
  pagesData: PropTypes.object
}
