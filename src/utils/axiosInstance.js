import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: '5000',
  timeoutErrorMessage: 'Try again...',
});

axiosInstance.interceptors.request.use(
  config => {
    const accessToken = sessionStorage.getItem('@appname/user');

    if (accessToken) {
      const json = JSON.parse(accessToken);
      config.headers.Authorization = `Bearer ${json.accessToken}`;
    }

    return config;
  },
  error => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  response => response.data,
  error => {
    if (error?.response?.data) {
      return Promise.reject(new Error(error.response.data));
    }

    return Promise.reject(error);
  },
);

export default axiosInstance;
