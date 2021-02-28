const initialState = {
  popupIsOpened: false,
  healthStatus: false,
  isLogin: false,
  entities: {
    releases: [],
  },
};

const Reducers = (state = initialState, action) => {
  switch (action.type) {
    case "HEALTH_CHECKUP": {
      return {
        ...state,
        healthStatus: action.healthStatus,
      };
    }
    case "GET_NEW_RELEASE": {
      return {
        ...state,
        entities: {
          ...state.entities,
          releases: action.releases,
        },
      };
    }
    case "LOGIN_SUCCESS": {
      return {
        ...state,
        isLogin: true,
        popupIsOpened: false,
      };
    }
    case "POPUP_WINDOW_OPEN": {
      return {
        ...state,
        popupIsOpened: true,
      };
    }
    default:
      return state;
  }
};
export default Reducers;
