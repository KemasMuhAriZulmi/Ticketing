import axios from "axios";
export const API_CALL = axios.get({
  baseURL: import.meta.env.API_URL,
});
export const API_URL = "http://localhost:9080";
