import api from '../services/API';

export default class ManagementServiceAPI {
  static getServiceTypes = () => {
    return api.get(`task-type`);
  };

  static createService = data => {
    return api.post(`task`, data);
  };
}
