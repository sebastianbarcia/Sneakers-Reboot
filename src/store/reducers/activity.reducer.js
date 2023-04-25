const initialState = {
  steps: 0,
  distance: 0,
};

export const pedometerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_STEPS":
      return { ...state, steps: action.payload };
    case "UPDATE_DISTANCE":
      return { ...state, distance: action.payload };

    default:
      return state;
  }
};
