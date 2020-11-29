import axios from 'axios';

const apiVersion = 'v1';
const baseUrl = `/api/${apiVersion}/users`;

export default class UsersAPI {
  static createUsers = data => {
    return axios.post(`${baseUrl}/create`, data);
  };
}
