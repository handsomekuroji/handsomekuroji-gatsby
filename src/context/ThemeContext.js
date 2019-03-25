import React from 'react'

const defaultState = {
  dark: false,
  toggleDark: () => {}
}

const ThemeContext = React.createContext(defaultState)
const { Provider } = ThemeContext

class ThemeProvider extends React.Component {
  state = {
    dark: false
  }

  toggleDark = () => {
    let dark = !this.state.dark
    localStorage.setItem('dark', JSON.stringify(dark))
    this.setState({ dark })
  }

  componentDidMount() {
    const lsDark = JSON.parse(localStorage.getItem('dark'))
    const supportsDarkMode = () => window.matchMedia('(prefers-color-scheme: dark)').matches === true
    this.setState({ dark: lsDark || (supportsDarkMode() && true) })
  }

  render() {
    const { children } = this.props
    const { dark } = this.state
    return (
      <Provider
        value={{
          dark,
          toggleDark: this.toggleDark
        }}
      >
        {children}
      </Provider>
    )
  }
}

export default ThemeContext
export { ThemeProvider }
