import axios from "axios";

const API_URL = "http://localhost:5000";

export const api = async (url) => {
  try {
    const response = axios.get(`${API_URL}${url}`);
    return response;
  } catch (error) {
    return error;
  }
};
