import axios from 'axios';
import api from '../services/API';

export default class AuthAPI {
  static login = data => {
    return axios.post(`/api/v1/auth/login`, data);
  };

  static profileCheckToken = token => {
    return api.get(`auth/profile`, {
      headers: {
        Authorization: token
      }
    });
  };

  static profile = () => {
    return api.get(`auth/profile`);
  };

  static refresh = header => {
    return axios.get('/api/v1/auth/refresh', {
      headers: header
    });
  };
}
