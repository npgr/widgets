const defaultState = {
  screens: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'ADD_SCREEN':
      return { ...state, screens: [...state.screens, action.payload] }
    default:
      return state
  }
}
