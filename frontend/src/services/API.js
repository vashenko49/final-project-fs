import axios from 'axios';
import AuthAPI from '../services/AuthAPI';
import {
  getNotExpiredAccessToken,
  getNotExpiredRefreshToken,
  setToken,
  tokenHasRemember
} from '../utils/Auth';

const api = axios.create({
  baseURL: '/api/v1/'
});

// api.interceptors.request.use(
//   async request => {
//     const accessToken = getNotExpiredAccessToken();
//     if (accessToken) {
//       request.headers.Authorization = accessToken;
//     } else {
//       const refreshToken = getNotExpiredRefreshToken();
//       if (refreshToken) {
//         console.log(request);
//         await AuthAPI.refresh({ Authorization: refreshToken }).then(({ data }) => {
//           setToken(tokenHasRemember(), data.token);
//           request.headers.Authorization = getNotExpiredAccessToken();
//         });
//         // .catch(() => window.location.replace('sign-in'));
//       } else {
//         // window.location.replace('sign-in');
//       }
//     }
//     return request;
//   },
//   error => Promise.reject(error)
// );

// api.interceptors.response.use(
//     response => response,
//     async error => {
//         const originalRequest = error.config
//
//         if (error.response.status === 401 && !originalRequest._retry) {
//             originalRequest._retry = true
//
//             const refreshToken = getNotExpiredRefreshToken()
//             if (refreshToken) {
//                 AuthAPI.refresh({Authorization: refreshToken})
//                     .then(({data}) => {
//                         setToken(tokenHasRemember(), data)
//                         originalRequest.headers.Authorization = getNotExpiredAccessToken();
//                         return api(originalRequest)
//                     })
//                     .catch(err => window.location.replace('sign-in'))
//             } else {
//                 window.location.replace('sign-in')
//             }
//         }
//         return Promise.reject(error)
//     },
// );

export default api;
