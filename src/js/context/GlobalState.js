import React, { useReducer } from 'react'
import WidgetsContext from './WidgetsContext'
import { screenReducer, ADD_SCREEN, REMOVE_SCREEN } from './reducers'

export default ({ children }) => {
  const [screenState, dispatch] = useReducer(screenReducer, {
    activeId: 0,
    screens: []
  })

  const addScreen = name =>
    dispatch({
      type: ADD_SCREEN,
      payload: { name }
    })

  const removeScreen = id =>
    dispatch({
      type: REMOVE_SCREEN,
      payload: { id }
    })

  const value = {
    screen: screenState,
    addScreen,
    removeScreen
  }

  console.log('screenState: ', screenState)

  return (
    <WidgetsContext.Provider value={value}>{children}</WidgetsContext.Provider>
  )
}
