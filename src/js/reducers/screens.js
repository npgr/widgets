import uuid from 'uuid/v4'

const defaultState = {
  activeId: 0,
  screens: []
}

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case 'ADD_SCREEN': {
      const newId = uuid().substring(0, 5)
      return {
        ...state,
        activeId: newId,
        screens: [
          ...state.screens,
          {
            ...payload,
            id: newId
          }
        ]
      }
    }
    case 'REMOVE_SCREEN': {
      const newScreens = state.screens.filter(
        screen => screen.id !== payload.id
      )
      return {
        ...state,
        activeId:
          payload.id !== state.activeId
            ? state.activeId
            : newScreens.length
            ? newScreens[newScreens.length - 1].id
            : 0,
        screens: newScreens
      }
    }
    default:
      return state
  }
}
