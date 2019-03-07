import { createStore as reduxCreateStore } from 'redux'

const reducer = (state, action) => {
  if (action.type === `INCREMENT`) {
    return Object.assign({}, state, {
      count: state.count !== true
    })
  }
  return state
}

const initialState = { count: false }

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
