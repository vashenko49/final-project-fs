import axios from 'axios';

const apiVersion = 'v1';
const baseUrl = `/api/${apiVersion}/users`;

export default class UsersAPI {
  static createUsers = data => {
    return axios.post(`${baseUrl}/create`, data, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYW5hZ2VyQGNvbS51YSIsInR5cGVUb2tlbiI6IkFDQ0VTUyIsImV4cCI6MTYwNjk0NDUyN30.R5rNQYeBMcfeaIALMXXn7Gs6ou_vRJKJUi8PdB9hyUsToX5EGOGKFgKqXV3k9NgNkyI8LJGhmUn-jXme9VeJAw'
      }
    });
  };
}
