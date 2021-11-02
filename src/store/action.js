import { api } from "../client/api";

export const healthCheckup = () => {
  return async function (dispatch) {
    try {
      const response = await api("/health");
      if (response.status === 200) {
        dispatch({ type: "HEALTH_CHECKUP", healthStatus: true });
        return response.data;
      }
    } catch (error) {
      dispatch({ type: "API_ERROR", message: error });
      return error;
    }
  };
};

export const newReleaseTrack = () => {
  return async function (dispatch) {
    try {
      const response = await api("/releases");
      if (response.status === 200) {
        dispatch({
          type: "GET_NEW_RELEASE",
          releases: response.data.albums.items,
        });
      }
      return response.data;
    } catch (error) {
      dispatch({ type: "API_ERROR", message: error });
      return error;
    }
  };
};
