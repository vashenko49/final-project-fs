import * as AuthConfig from '../config/auth/Auth';
import AuthAPI from '../../services/AuthAPI';
import { getToken, removeToken, setToken } from '../../utils/Auth';
import { startLoad, stopLoad, stopPageLoad } from './System';

export function login({ email, password, remember }, history) {
  return dispatch => {
    dispatch(startLoad());

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
      .finally(() => dispatch(stopLoad()));
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
    setTimeout(() => dispatch(stopPageLoad()), 1000);
  };
}
