import * as System from '../config/System';
import UsersAPI from '../../services/UsersAPI';
import * as CreateUser from '../config/user/CreateUser';
import AuthAPI from '../../services/AuthAPI';
import * as CurrentUser from '../config/CurrentUser';
import { errorShow } from './Error';

export const createUsers = data => dispatch => {
  console.log('--> createUsers');
  dispatch({
    type: System.START_LOAD
  });

  UsersAPI.createUsers(data)
    .then(res => {
      dispatch({
        type: CreateUser.RESPONSE_CREATE_USER,
        payload: {
          success: true,
          message: res.data
        }
      });
    })
    .catch(err => errorShow(err.response.data)(dispatch))
    .finally(() => {
      dispatch({
        type: System.STOP_LOAD
      });
    });
};

export const getProfile = () => dispatch => {
  dispatch({
    type: System.START_LOAD
  });
  AuthAPI.profile()
    .then(res => {
      dispatch({
        type: CurrentUser.GET_CURRENT_USER_PROFILE_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => errorShow(err.response.data)(dispatch))
    .finally(() => {
      dispatch({
        type: System.STOP_LOAD
      });
    });
};
