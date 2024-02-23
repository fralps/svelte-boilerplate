import axios from 'axios';
import type {
  AxiosResponse,
  InternalAxiosRequestConfig,
  AxiosError
} from 'axios';
import { push, paths } from '@router/routes';

// Import our api url from env file
const baseURL: string = import.meta.env.VITE_APP_API_BASE_URL as string;

export const axiosInstance = axios.create({ baseURL: `${baseURL}/api/v1` });
axiosInstance.defaults.headers.common['Accept'] = 'application/json';
axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';
axiosInstance.defaults.withCredentials = true;

// Intercept response to store Bearer token in local storage
axiosInstance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    if (response.headers.authorization) {
      //TODO: store token in local storage
    }

    return response;
  },
  (error: AxiosError): Promise<void> => {
    const errorStatus: number | undefined = error?.response?.status;

    if (error.response) {
      console.log(error.response.status);
    }

    switch (errorStatus) {
        case 401:
          // log out user, clear local storage and go to login page
          // TODO: if you set cookies, clear them here
          push(paths.login.path);
          break;
        case 403:
          // go to previous page
          history.back();
          break;
      }

    return Promise.reject(error);
  }
);

// Intercept request to add Bearer token to Authorization headers config
axiosInstance.interceptors.request.use(
  (request: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    // TODO: get token and add to headers
    // const token: string | null = localStorage.getItem('token');

    // if (token) {
    //   config.headers['Authorization'] = token;
    // }

    return request;
  },

  (error: AxiosError): Promise<void> => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
