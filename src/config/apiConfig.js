/** @format */

import axios from 'axios';

console.log(process.env.REACT_APP_BASE_URL, 'process.env.REACT_APP_BASE_URL');

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

const multipartInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: { 'Content-Type': 'multipart/form-data' },
});

const useConfig = (config) => {
  const customConfig = config;
  // add bearer token to every request header
  if (localStorage.zipuJWTToken) {
    customConfig.headers.Authorization = `Bearer ${localStorage.zipuJWTToken}`;
  }

  return customConfig;
};

instance.interceptors.request.use(useConfig);
multipartInstance.interceptors.request.use(useConfig);

export const APIService = {
  get(endpoint, config = null) {
    return config ? instance.get(endpoint, config) : instance.get(endpoint);
  },

  post(endpoint, data) {
    return instance.post(endpoint, data);
  },

  patch(endpoint, data) {
    return instance.patch(endpoint, data);
  },

  delete(endpoint, data) {
    return instance.delete(endpoint, data);
  },

  put(endpoint, data) {
    return instance.put(endpoint, data);
  },

  postMultiPart(endpoint = '/', data = {}) {
    return multipartInstance.post(endpoint, data);
  },

  patchMultiPart(endpoint = '/', data = {}) {
    return multipartInstance.patch(endpoint, data);
  },
};

