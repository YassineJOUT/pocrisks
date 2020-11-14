import axios from "axios";
import { API_HOST } from "../util/config";

const options = {
  headers: { "Content-Type": "application/json" },
};

export const getGeoData = () => {
  return axios.get(API_HOST);
};

export const login = (data) => {
  return axios.post(`${API_HOST}users/login`, data, options);
};

export const register = (data) => {
  return axios.post(`${API_HOST}users/register`, data, options);
};
