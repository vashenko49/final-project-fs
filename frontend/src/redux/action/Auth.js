import * as System from '../config/System';
import * as AuthConfig from '../config/auth/Auth';
import AuthAPI from '../../services/AuthAPI';
import { getToken, removeToken, setToken } from '../../utils/Auth';

export function login({ email, password, remember }, history) {
  return dispatch => {
    dispatch({
      type: System.START_LOAD
    });

    AuthAPI.login({ email, password })
      .then(res => {
        dispatch({
          type: AuthConfig.RESPONSE_LOGIN_SUCCESS,
          payload: res.data.user
        });
        setToken(remember, res.data.token);
        history.push('/');
      })
      .catch(err => {
        dispatch({
          type: AuthConfig.RESPONSE_LOGIN_FAILE,
          payload: err.message
        });
        removeToken();
      })
      .finally(() => {
        dispatch({
          type: System.STOP_LOAD
        });
      });
  };
}

export function authFromStorage() {
  return dispatch => {
    let token = getToken();
    if (token) {
      AuthAPI.profile()
        .then(res => {
          dispatch({
            type: AuthConfig.RESPONSE_LOGIN_SUCCESS,
            payload: res.data
          });
        })
        .catch(err => {
          dispatch({
            type: AuthConfig.RESPONSE_LOGIN_FAILE,
            payload: err
          });
        });
    }
  };
}
