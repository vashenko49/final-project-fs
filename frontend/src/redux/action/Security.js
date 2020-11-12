import * as SECURITY from '../config/Security';

export function testLogin() {}

export function redirectLogin() {}

export function redirectMain() {}

export async function login() {
  const response = await fetch('http://localhost:9000/api0/login');
  let res = await response.json();
  console.log(res);
  // window.location.href = '/';

  return async dispatch => {
    dispatch({
      type: SECURITY.TEST_LOGIN,
      payload: res
    });
  };
}
