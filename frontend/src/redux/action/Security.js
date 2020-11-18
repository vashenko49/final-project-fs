import * as SECURITY from '../config/Security';
import { FetchToServer } from './FetchToServer';

export function testLogin() {}

export function redirectLogin() {}

export function redirectMain() {}

export async function login(email, password) {
  let data = {
    email: email,
    password: password
  };

  let res = await FetchToServer('auth/login', 'POST', data);

  if (res.data.token && res.status === 200) {
    sessionStorage.setItem('token', res.data.token);
    console.log(res.data);
    window.location.href = '/';
  }
  if (res.status === 401) {
    console.log('Unauthorized');
  }

  // return async dispatch => {
  //   dispatch({
  //     type: SECURITY.TEST_LOGIN,
  //     payload: res
  //   });
  // };
}

export async function loginA() {
  let data = {
    email: 'test@com.ua',
    password: '12345'
  };

  let res = await FetchToServer('auth/login', 'POST', data);
  console.log(res);
  if (res.data.token && res.status === 200) {
    sessionStorage.setItem('token', res.data.token);
    console.log(res.data);
    window.location.href = '/';
  }

  // return async dispatch => {
  //   dispatch({
  //     type: SECURITY.TEST_LOGIN,
  //     payload: res
  //   });
  // };
}
