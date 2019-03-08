import { createStore as reduxCreateStore } from 'redux'

const reducer = (state, action) => {
  if (action.type === 'INCREMENT') {
    return Object.assign({}, state, {
      siteState: state.siteState !== true
    })
  }
  return state
}

const thisState = () => {
  if (new Date().getHours() >= 20 || new Date().getHours() < 6) {
    return true
  } else {
    return false
  }
}

const initialState = { siteState: thisState() }

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
