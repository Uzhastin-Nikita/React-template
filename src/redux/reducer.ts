type AppState = {
  count: number;
};

const initialState: AppState = {
  count: 0,
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default reducer;