import api from '../services/API';

export default class UsersAPI {
  static createUsers = data => {
    return api.post(`create`, data);
  };
}
