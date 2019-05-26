import React from 'react'
import { Link } from 'gatsby'
import axios from 'axios'
import styled from 'styled-components'
import posed, { PoseGroup } from 'react-pose'
import { font } from '../../components/variable/mixin'

import Icon from '../../images/icon/search.svg'

const Search = styled.div`
  margin: 32px auto 0;
  position: relative;
  width: 240px;
`

const SearchIcon = styled(Icon)`
  stroke: rgba(var(--c_1-rgb), 0.5);
  position: absolute;
  right: 12px;
  top: calc(50% - 12px);
`

const Form = styled.input`
  background: var(--c_2);
  border: none;
  border-radius: 32px;
  box-sizing: border-box;
  color: var(--c_0);
  font: 1rem / 1.3 ${font.$f_1};
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

const Inner = styled(posed.div(popover))`
  left: -30px;
  position: absolute;
  top: 48px;
  width: 300px;
  z-index: 1;

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

const Container = styled.ul`
  background: #fcfcfc;
  border-radius: 8px;
  box-shadow: rgba(var(--c_9-rgb), 0.2) 0 3px 8px;
  max-height: 400px;
  overflow: auto;
  position: absolute;
  top: 0;
  width: 100%;
  -webkit-overflow-scrolling: touch;
`

const List = styled.li`
  border-top: 1px solid rgba(var(--c_0-rgb), 0.1);
  text-align: left;

  &:first-of-type {
    border: 0;
  }
`

const SearchLink = styled(Link)`
  box-sizing: border-box;
  color: #404040;
  display: block;
  font: bold 0.9rem / 1.3  ${font.$f_1};
  line-height: 1.35;
  vertical-align: bottom;
  text-decoration: none;
  padding: 12px 16px;
  transition: 0.1s linear;
  width: 100%;

  &:hover {
    color: rgba(var(--c_0-rgb), 0.5);

    &:visited {
      color: rgba(var(--c_0-rgb), 0.5);Z
    }
  }

  &:visited {
    color: #404040;
  }
`

export default function App() {
  const [isActive, setIsActive] = React.useState(false)
  const [data, setData] = React.useState([])
  const [items, setItems] = React.useState([])

  React.useEffect(() => {
    const getData = async () => {
      await axios
        .get('/search.json')
        .then(res => {
          setData(res.data)
        })
        .catch(error => {
          error({ statusCode: 404, message: 'NOT FOUND' })
        })
    }
    getData()
  }, [setData])

  const setTrue = () => {
    setIsActive(true)
  }

  const setFalse = () => {
    setIsActive(false)
  }

  const eventDelete = e => {
    e.preventDefault()
  }

  const filterList = e => {
    const value = e.target.value
    const values = value.split(/\s+/).map(str => new RegExp(str, 'i'))
    const updateList = value
      ? data.filter(list => {
          return values.every(reg => {
            return reg.test(list.title) || reg.test(list.tag.join())
          })
        })
      : []
    setItems(updateList)
  }

  const listDom = items.map(item => {
    const slug = item.slug
    return (
      <List key={slug}>
        <SearchLink to={'/' + slug}>{item.title}</SearchLink>
      </List>
    )
  })

  const listInner = items.length > 0 && isActive && (
    <Inner key="container" onMouseDown={eventDelete}>
      <Container>{listDom}</Container>
    </Inner>
  )

  return (
    <Search>
      <Form type="text" placeholder="Search" onChange={filterList} onFocus={setTrue} onBlur={setFalse} />
      <SearchIcon width="24" height="24" alt="検索アイコン" loading="lazy" decoding="async" onMouseDown={eventDelete} />
      <PoseGroup>{listInner}</PoseGroup>
    </Search>
  )
}
