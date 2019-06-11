import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Navigation = styled.nav`
  align-items: center;
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(3, 1fr);
  margin: 32px auto 0;
`

const UnOrdered = styled.ul`
  align-items: center;
  display: grid;
  gap: 16px;
  grid-auto-flow: column;
  grid-column: 2 / 3;
  justify-self: center;
  width: fit-content;
`

const Current = styled.li`
  font: italic 1rem / 1.1 'Georgia', serif;
  padding: 8px;
`

const Anchor = styled(Link)`
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

const Prev = styled(Link)`
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

const Next = styled(Link)`
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

export default function Pagination({ page }) {
  const { length, pages, number, slug } = page

  const first = number === 1
  const last = number === pages
  const main = slug ? `/${slug}` : ''

  const prevSlug = number - 1 === 1 ? '' : number - 1
  const nextSlug = number + 1

  const prevUrl = first ? null : `${main}/${prevSlug}`
  const nextUrl = last ? null : `${main}/${nextSlug}`

  const min = last ? 3 : 2
  const max = first ? 3 : 2

  const calc = i => {
    return i !== number && i >= number - min && i <= number + max
  }

  const url = i => {
    return main + (i === 1 || `/${i}`)
  }

  const inner = length.map((_, i) =>
    calc(++i) ? (
      <li>
        <Anchor key={i} to={url(i)} aria-label={`${i}ページ目へ`}>
          {i}
        </Anchor>
      </li>
    ) : (
      i === number && (
        <Current key={i} aria-label={`現在のページ ${i}ページ目`}>
          {i}
        </Current>
      )
    )
  )

  const unordered = pages > 1 && <UnOrdered>{inner}</UnOrdered>
  const prevArrow = !first && (
    <Prev to={prevUrl} aria-label="前のページへ">
      ←
    </Prev>
  )
  const nextArrow = !last && (
    <Next to={nextUrl} aria-label="次のページへ">
      →
    </Next>
  )

  return (
    <Navigation aria-label="ページナビゲーション">
      {prevArrow}
      {unordered}
      {nextArrow}
    </Navigation>
  )
}

Pagination.propTypes = {
  page: PropTypes.object
}
