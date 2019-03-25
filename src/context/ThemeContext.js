import React from 'react'

const ThemeContext = React.createContext()
const { Provider } = ThemeContext

function ThemeProvider({ children }) {
  const [mode, setDark] = React.useState({
    dark: false,
    toggleDark: () => {}
  })

  const toggleDark = () => {
    let dark = !mode.dark
    localStorage.setItem('dark', JSON.stringify(dark))
    setDark({ dark })
  }

  React.useEffect(() => {
    const supportsDarkMode = () => window.matchMedia('(prefers-color-scheme: dark)').matches === true
    const lsDark = JSON.parse(localStorage.getItem('dark'))
    setDark({ dark: lsDark || (supportsDarkMode() && true) })
  }, [mode.dark])

  return (
    <Provider
      value={{
        dark: mode.dark,
        toggleDark: toggleDark
      }}
    >
      {children}
    </Provider>
  )
}

export default ThemeContext
export { ThemeProvider }
