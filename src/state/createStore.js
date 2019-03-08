import { createStore as reduxCreateStore } from 'redux'

const reducer = (state, action) => {
  if (action.type === `INCREMENT`) {
    return Object.assign({}, state, {
      siteState: state.siteState !== true
    })
  }
  return state
}

const initialState =
  new Date().getHours() >= 20 || new Date().getHours() < 6 ? { siteState: true } : { siteState: false }

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
