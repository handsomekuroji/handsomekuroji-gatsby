import React from 'react'
import { Provider } from './src/context/Theme'
export const wrapRootElement = ({ element }) => <Provider>{element}</Provider>
