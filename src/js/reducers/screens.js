const defaultState = {
  lastId: 0,
  activeId: 0,
  screens: []
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case "ADD_SCREEN":
      const newId = state.lastId + 1;
      return {
        ...state,
        lastId: newId,
        activeId: newId,
        screens: [
          ...state.screens,
          {
            ...payload,
            id: newId
          }
        ]
      };
    case "REMOVE_SCREEN":
      const newScreens = state.screens.filter(
        screen => screen.id !== payload.id
      );
      return {
        ...state,
        activeId:
          payload.id !== state.activeId
            ? state.activeId
            : !!state.screens[0]
            ? newScreens[0].id
            : 0,
        screens: newScreens
      };
    default:
      return state;
  }
};
