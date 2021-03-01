const initialState = {
  popupIsOpened: false,
  isLogin: false,
  healthStatus: false,
  isSquareplay: false,
  musicId: "",
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
    case "SET_SQUARE_PLAY": {
      return {
        ...state,
        isSquareplay: action.isSongSquareClicked,
        musicId: action.musicId,
      };
    }
    default:
      return state;
  }
};
export default Reducers;
