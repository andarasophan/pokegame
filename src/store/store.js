import React, { createContext, useEffect, useReducer } from 'react'
import { getLocalStorage, saveLocalStorage } from '../utils/helpers/storageHelper'
import { reducer } from './reducer'

const initialState = {
  user: getLocalStorage('user'),
  scroll: {
    position: 0,
    containerElement: null
  }
}

const store = createContext(initialState)
const { Provider } = store

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // only watch state user
  // set persist state user to localstorage
  useEffect(() => {
    saveLocalStorage('user', state.user)
  }, [state.user])

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { store, StoreProvider }
