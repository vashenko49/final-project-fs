import axios from 'axios';

const apiVersion = 'v1';
const baseUrl = `/api/${apiVersion}`;

export default class ManagementServiceAPI {
  static getServiceTypes = () => {
    return axios.get(`${baseUrl}/task-type`, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYW5hZ2VyQGNvbS51YSIsInR5cGVUb2tlbiI6IkFDQ0VTUyIsImV4cCI6MTYwNjk1MTAzMX0.jGF6ro9ZKXy_uZvWYz1bw9bfQxM2OImoBc6w1zavjR446EYIKfAVNRx2tauum3hYVZRM7AQ1DPLFBfE_1ipIbw'
      }
    });
  };

  static createService = data => {
    return axios.post(`${baseUrl}/task`, data, {
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtYW5hZ2VyQGNvbS51YSIsInR5cGVUb2tlbiI6IkFDQ0VTUyIsImV4cCI6MTYwNjk1MTAzMX0.jGF6ro9ZKXy_uZvWYz1bw9bfQxM2OImoBc6w1zavjR446EYIKfAVNRx2tauum3hYVZRM7AQ1DPLFBfE_1ipIbw'
      }
    });
  };
}
