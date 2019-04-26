import React from 'react'

const ThemeContext = React.createContext({
  dark: false,
  toggleDark: () => {}
})

const ThemeProvider = ({ children }) => {
  const [dark, setDark] = React.useState(false)

  const toggleDark = () => {
    localStorage.setItem('dark', JSON.stringify(!dark))
    setDark(!dark)
  }

  React.useLayoutEffect(() => {
    const lsDark = JSON.parse(localStorage.getItem('dark'))
    const supportsDarkMode = () => window.matchMedia('(prefers-color-scheme: dark)').matches === true
    setDark(lsDark !== null ? lsDark : supportsDarkMode)
  }, [dark])

  return <ThemeContext.Provider value={{ dark, toggleDark }}>{children}</ThemeContext.Provider>
}

export default ThemeContext
export { ThemeProvider }
