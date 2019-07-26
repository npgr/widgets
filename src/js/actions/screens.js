export const addScreen = name => ({
  type: "ADD_SCREEN",
  payload: { name }
});

export const removeScreen = id => ({
  type: "REMOVE_SCREEN",
  payload: { id }
});
