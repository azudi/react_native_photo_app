import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const BASE_URL = 'https://api.themoviedb.org/3';

export const server = axios.create({
  baseURL: BASE_URL,
  responseType: 'json',
});

server.interceptors.request.use(
  async config => {
    try {
      const token = await AsyncStorage.getItem('token') ||  "";
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
        return config;
      } else {
        return config;
      }
    } catch (e) {
      // error reading value
    }
  },
  error => {
    return Promise.reject(error);
  },
);

server.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response && error.response.status === 401) {
      // AsyncStorage.removeItem('token');
      // AsyncStorage.removeItem('random');
    }

    return Promise.reject(error);
  },
);


