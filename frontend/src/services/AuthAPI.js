import axios from 'axios';

const apiVersion = 'v1';
const baseUrl = `/api/${apiVersion}/auth`;

export default class AuthAPI {
    static login = (data) => {
        return axios.post(`${baseUrl}/login`,data);
    };

    static refresh = (header) => {
        return axios.get(`${baseUrl}/refresh`, header);
    };

    static profile = (header) => {
        return axios.get(`${baseUrl}/profile`, header);
    };
}
