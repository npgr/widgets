import React, { useReducer } from 'react'
import PropTypes from 'prop-types'
import WidgetsContext from './WidgetsContext'
import { screenReducer, ADD_SCREEN, REMOVE_SCREEN } from './reducers'

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

  const value = {
    screen: screenState,
    addScreen,
    removeScreen
  }

  // eslint-disable-next-line no-console
  console.log('state: ', screenState)

  return (
    <WidgetsContext.Provider value={value}>{children}</WidgetsContext.Provider>
  )
}

GlobalState.propTypes = {
  children: PropTypes.element.isRequired
}

export default GlobalState
