import api from '../services/API';

export default class UsersAPI {
  static createUsers = data => api.post('users/create', data);

  static updateProfile = data => api.put('users/updateProfile', data);

  static getAllUsers = () => api.get('users/');

  static getUserById = id => api.get(`users/${id}`);
}
