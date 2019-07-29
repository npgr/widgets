import React, { useState } from 'react'
import WidgetsContext from './WidgetsContext'

export default ({ children }) => {
  const [screens, setScreens] = useState([])

  const addScreen = name => {
    setScreens([...screens, { name }])
  }

  const initialState = {
    activeId: 99,
    screens,
    addScreen
  }

  console.log('Screens: ', screens)

  return (
    <WidgetsContext.Provider value={initialState}>
      {children}
    </WidgetsContext.Provider>
  )
}
