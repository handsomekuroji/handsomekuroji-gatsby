import React from 'react'
import { Link } from 'gatsby'
import ky from 'ky'
import styled from 'styled-components'
import posed, { PoseGroup } from 'react-pose'
import { font } from '~src/components/variable/mixin'
import Icon from '~src/images/icon/search.svg'

const Wrapper = styled.div`
  margin: 32px auto 0;
  position: relative;
  width: 240px;
`

const Img = styled(Icon)`
  stroke: rgba(var(--c_1-rgb), 0.5);
  position: absolute;
  right: 12px;
  top: calc(50% - 12px);
`

const Input = styled.input`
  background: var(--c_2);
  border: none;
  border-radius: 32px;
  box-sizing: border-box;
  color: var(--c_0);
  font: 1rem / normal ${font.$f_1};
  padding: 8px 16px;
  width: 100%;

  &::selection {
    background: var(--c_8);
    color: var(--c_0);
  }

  &::placeholder {
    color: rgba(var(--c_1-rgb), 0.5);
    font: 1rem / normal ${font.$f_1};
  }

  &:placeholder-shown {
    line-height: normal;
  }
`

const popover = {
  enter: {
    opacity: 1,
    transition: { duration: 150 },
    y: 0
  },
  exit: {
    opacity: 0,
    transition: { duration: 150 },
    y: 8
  }
}

const Container = styled(posed.div(popover))`
  left: -30px;
  position: absolute;
  top: 48px;
  width: 300px;
  z-index: 2;

  &::before {
    border-color: transparent transparent #fcfcfc transparent;
    border-style: solid;
    border-width: 8px;
    content: '';
    display: block;
    height: 0;
    left: calc(50% - 8px);
    pointer-events: none;
    position: absolute;
    top: -16px;
    width: 0;
    z-index: 11;
  }
`

const UnOrdered = styled.ul`
  background: #fcfcfc;
  border-radius: 8px;
  box-shadow: rgba(var(--c_9-rgb), 0.2) 0 3px 8px;
  max-height: 400px;
  overflow: auto;
  position: absolute;
  top: 0;
  width: 100%;
`

const List = styled.li`
  border-top: 1px solid rgba(var(--c_0-rgb), 0.1);
  text-align: left;

  &:first-of-type {
    border: 0;
  }
`

const Anchor = styled(Link)`
  box-sizing: border-box;
  color: #404040;
  display: block;
  font: bold 0.9rem / 1.3 ${font.$f_1};
  line-height: 1.35;
  text-decoration: none;
  padding: 12px 16px;
  transition: color 0.2s ease;
  width: 100%;

  @media (hover: hover) {
    &:hover {
      color: rgba(var(--c_0-rgb), 0.5);

      &:visited {
        color: rgba(var(--c_0-rgb), 0.5);
      }
    }
  }

  &:focus {
    outline: none;
    text-decoration: underline;
  }

  &:visited {
    color: #404040;
  }
`

export default function Search() {
  const [Active, setActive] = React.useState(false)
  const [data, setData] = React.useState([])
  const [items, setItems] = React.useState([])

  React.useEffect(() => {
    const api = async () => {
      await ky('/search.json')
        .json()
        .then(res => {
          setData(res)
        })
        .catch(e => {
          setData([
            {
              title: '',
              slug: '',
              tag: []
            }
          ])
        })
    }
    api()
  }, [])

  const activation = () => {
    setActive(true)
  }

  const deactivate = () => {
    setActive(false)
  }

  const interrupt = e => {
    e.preventDefault()
  }

  const filterList = e => {
    const value = e.target.value
    const valueList = value.split(/\s+/).map(str => new RegExp(str, 'i'))
    const updateList = value
      ? data.filter(list => {
          return valueList.every(reg => {
            return reg.test(list.title) || reg.test(list.tag.join())
          })
        })
      : []
    setItems(updateList)
  }

  const listDom = items.map(item => {
    const slug = item.slug
    return (
      <List key={slug} role="option">
        <Anchor to={`/${slug}`} onFocus={activation}>
          {item.title}
        </Anchor>
      </List>
    )
  })

  const listInner = items.length > 0 && Active && (
    <Container key="container" onMouseDown={interrupt}>
      <UnOrdered role="listbox">{listDom}</UnOrdered>
    </Container>
  )

  const espanded = !!(items.length > 0 && Active)

  return (
    <Wrapper>
      <form action="/" onSubmit={interrupt} role="search">
        <Input
          type="text"
          placeholder="Search"
          role="combobox"
          aria-label="サイト内を検索"
          aria-expanded={espanded}
          onChange={filterList}
          onFocus={activation}
          onBlur={deactivate}
        />
        <Img width="24" height="24" title="検索アイコン" role="presentation" onMouseDown={interrupt} />
      </form>
      <PoseGroup>{listInner}</PoseGroup>
    </Wrapper>
  )
}
