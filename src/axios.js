// src/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 5000,
});

// Interceptor to handle global errors
instance.interceptors.response.use(
  response => response,
  error => {
    console.error('Axios error:', error);
    return Promise.reject(error);
  }
);

export default instance;
