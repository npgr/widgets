import React, { useReducer } from 'react'
import PropTypes from 'prop-types'
import WidgetsContext from './WidgetsContext'
import {
  screenReducer,
  ADD_SCREEN,
  REMOVE_SCREEN,
  SELECT_SCREEN
} from './reducers'

const GlobalState = ({ children }) => {
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

  const selectScreen = id =>
    dispatch({
      type: SELECT_SCREEN,
      payload: { id }
    })

  const context = {
    screen: screenState,
    addScreen,
    removeScreen,
    selectScreen
  }

  // eslint-disable-next-line no-console
  console.log('state: ', screenState)

  return (
    <WidgetsContext.Provider value={context}>
      {children}
    </WidgetsContext.Provider>
  )
}

GlobalState.propTypes = {
  children: PropTypes.element.isRequired
}

export default GlobalState
