import uuid from 'uuid/v4'

export const ADD_SCREEN = 'ADD_SCREEN'
export const REMOVE_SCREEN = 'REMOVE_SCREEN'
export const SELECT_SCREEN = 'SELECT_SCREEN'

const defaultState = {
  activeId: 0,
  screens: []
}

export const screenReducer = (state = defaultState, action) => {
  const { type, payload } = action
  // eslint-disable-next-line no-console
  console.log(type)
  switch (type) {
    case ADD_SCREEN: {
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
    case REMOVE_SCREEN: {
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
    case SELECT_SCREEN:
      return {
        ...state,
        activeId: payload.id
      }
    default:
      return state
  }
}
