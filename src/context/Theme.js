import React from 'react'

const Context = React.createContext({
  dark: false,
  toggle: () => {},
})

const Provider = ({ children }) => {
  const [dark, setDark] = React.useState(false)

  const toggle = () => {
    localStorage.setItem('dark', JSON.stringify(!dark))
    setDark(!dark)
  }

  React.useLayoutEffect(() => {
    const lsDark = JSON.parse(localStorage.getItem('dark'))
    const support = () => window.matchMedia('(prefers-color-scheme: dark)').matches === true
    setDark(lsDark !== null ? lsDark : support)
  }, [])

  return <Context.Provider value={{ dark, toggle }}>{children}</Context.Provider>
}

export default Context
export { Provider }
