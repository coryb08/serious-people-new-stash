const defaultState = { render: false, appLoading: true };
export default function(state = defaultState, action) {
  switch (action.type) {
    case "APP_LOADING":
      return {
        appLoading: action.payload
      };

    default:
      return state;
  }
}
