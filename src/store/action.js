import { api } from '../client/api'

export const Actions =
  { type: "WINDOW_OPEN", windowIsOpen: false } |
  {
    type: "USER_PROFILE",
    user: {},
  } |
  {
    type: "SET_TOKEN",
    access_token: String,
    refresh_token: String,
  } |
  {
    type: "GET_NEW_RELEASE",
    releases: {},
  }
  | {
    type: "HEALTH_CHECKUP",
    healthStatus: undefined
  }
  | {
    type: "API_ERROR",
    message: String
  };




export const healthCheckup = () => {
  return async function (dispatch) {
    try {
      const response = await api("/health");
      if (response.status === 200) {
        dispatch({ type: "HEALTH_CHECKUP", healthStatus: true })
        return response.data;
      }
    } catch (error) {
      dispatch({ type: "API_ERROR", message: error });
      return error;
    }
  }
}

export const newReleaseTrack = () => {
  return async function (dispatch) {
    try {
      const response = await api("/releases");
      if (response.status === 200) {
        dispatch({
          type: "GET_NEW_RELEASE",
          releases: response.data.albums.items
        })
      }
      return response.data;
    }
    catch (error) {
      dispatch({ type: "API_ERROR", message: error });
      return error;
    }
  }
}
