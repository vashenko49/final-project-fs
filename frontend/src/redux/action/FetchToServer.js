import axios from 'axios';

const apiVersion = 'v1';
const baseUrl = `/api/${apiVersion}`;

export async function FetchToServer(url, method, body) {
  switch (method) {
    case 'GET':
      return await axios.get(`${baseUrl}/${url}`, {
        headers: {
          Authorisation: 'Bearer' + sessionStorage.getItem('token')
        }
      });
      break;

    case 'POST':
      return await axios.post(`${baseUrl}/${url}`, body, {
        headers: {
          Authorisation: 'Bearer' + sessionStorage.getItem('token')
        }
      });
      break;

    case 'PUT':
      return await axios.put(`${baseUrl}/${url}`, body, {
        headers: {
          Authorisation: 'Bearer' + sessionStorage.getItem('token')
        }
      });
      break;
  }
}
