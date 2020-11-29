import axios from 'axios';

const apiVersion = 'v1';
const baseUrl = `/api/${apiVersion}`;

export default class ManagementServiceAPI {
  static getServiceTypes = () => {
    return axios.get(`${baseUrl}/task-type`);
  };

  static createService = data => {
    return axios.post(`${baseUrl}/task`, data);
  };
}
