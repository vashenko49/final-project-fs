import axios from 'axios';
import AuthAPI from '../services/AuthAPI';
import {
  getNotExpiredAccessToken,
  getNotExpiredRefreshToken,
  removeToken,
  setToken,
  tokenHasRemember
} from '../utils/Auth';

const api = axios.create({
  baseURL: '/api/v1/'
});

api.interceptors.request.use(
  async request => {
    const accessToken = getNotExpiredAccessToken();
    if (accessToken) {
      request.headers.Authorization = accessToken;
    } else {
      const refreshToken = getNotExpiredRefreshToken();
      if (refreshToken) {
        await AuthAPI.refresh({ Authorization: refreshToken })
          .then(({ data }) => {
            setToken(tokenHasRemember(), data.token);
            request.headers.Authorization = getNotExpiredAccessToken();
          })
          .catch(() => {
            removeToken();
            window.location.replace('#/sign-in');
            throw new axios.Cancel();
          });
      } else {
        removeToken();
        window.location.replace('#/sign-in');
        throw new axios.Cancel();
      }
    }
    return request;
  },
  error => Promise.reject(error)
);

export default api;
