import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

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
  align-items: center;
  background: var(--c_4);
  border-radius: 50%;
  box-shadow: rgba(var(--c_9-rgb), 0.1) 0 1px 6px;
  box-sizing: border-box;
  color: var(--c_7);
  display: flex;
  font: italic 1rem / 1.1 'Georgia', serif;
  height: 32px;
  justify-content: center;
  padding: 0 0 4px;
  width: 32px;
`

const Css = css`
  align-items: center;
  border-radius: 50%;
  box-sizing: border-box;
  color: var(--c_0);
  display: flex;
  flex-direction: column;
  font: italic 1rem / 1.1 'Georgia', serif;
  height: 32px;
  justify-content: center;
  padding: 0 0 4px;
  text-decoration: none;
  width: 32px;

  @media (hover: hover) {
    &:hover {
      background: var(--c_4);
      box-shadow: rgba(var(--c_9-rgb), 0.1) 0 1px 6px;
      color: var(--c_7);
    }
  }

  &:focus {
    background: var(--c_4);
    box-shadow: rgba(var(--c_9-rgb), 0.1) 0 1px 6px;
    color: var(--c_7);
  }

  &:visited {
    color: var(--c_0);

    @media (hover: hover) {
      &:hover {
        color: var(--c_7);
      }
    }

    &:focus {
      color: var(--c_7);
    }
  }
`

const Anchor = styled(Link)`
  flex-direction: column;

  ${Css}
`

const Prev = styled(Link)`
  ${Css}

  grid-column: 1 / 2;
  margin: 0 auto 0 0;
  padding: 0 0 0 3px;
`

const Next = styled(Link)`
  ${Css}

  grid-column: 3 / 4;
  margin: 0 0 0 auto;
  padding: 0 3px 0 0;
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

  const calc = (i) => {
    return i !== number && i >= number - min && i <= number + max
  }

  const url = (i) => {
    return main + (i === 1 ? '' : `/${i}`)
  }

  const inner = length.map((_, i) =>
    calc(++i) ? (
      <li key={i}>
        <Anchor to={url(i)} aria-label={`${i}ページ目へ`}>
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
  page: PropTypes.object,
}
