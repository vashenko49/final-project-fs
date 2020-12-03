import * as System from '../config/System';
import * as AuthConfig from '../config/auth/Auth';
import AuthAPI from '../../services/AuthAPI';
import * as AuthUtils from '../../utils/Auth';

export function login({ email, password, remember }, history) {
  return dispatch => {
    dispatch({
      type: System.START_LOAD
    });

    AuthAPI.login({ email, password })
      .then(res => {
        dispatch({
          type: AuthConfig.RESPONSE_LOGIN_SUCCESS
        });
        AuthUtils.setToken(remember, res.data);
        history.push('/');
      })
      .catch(err => {
        dispatch({
          type: AuthConfig.RESPONSE_LOGIN_FAILE,
          payload: err.message
        });
        AuthUtils.removeToken();
      })
      .finally(() => {
        dispatch({
          type: System.STOP_LOAD
        });
      });
  };
}

export function refresh() {
  return dispatch => {
    let refreshToken = AuthUtils.getRefreshToken();
    AuthAPI.refresh({ Authorization: refreshToken })
      .then(res => {
        dispatch({
          type: AuthConfig.RESPONSE_LOGIN_SUCCESS
        });
        AuthUtils.setToken(true, res.data);
      })
      .catch(err => {
        dispatch({
          type: AuthConfig.RESPONSE_LOGIN_FAILE,
          payload: err
        });
        AuthUtils.removeToken();
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
    const token = AuthUtils.getNotExpiredToken();
    if (token) {
      AuthAPI.profile({ Authorization: token })
        .then(res => {
          dispatch({
            type: AuthConfig.RESPONSE_LOGIN_SUCCESS
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
