import axios from "axios";
import { API_HOST } from "../util/config";

const options = {
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
};

export const getGeoData = () => {
  return axios.get(API_HOST, options);
};

export const login = (data) => {
  return axios.post(`${API_HOST}users/login`, data, options);
};

export const register = (data) => {
  return axios.post(`${API_HOST}users/register`, data, options);
};
