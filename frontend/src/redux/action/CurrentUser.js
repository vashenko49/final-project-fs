import * as CurrentUser from '../config/CurrentUser';
import * as System from '../config/System';
import UsersAPI from '../../services/UsersAPI';

export function getUserInfo() {
  return async dispatch => {
    let userInfo = {
      userMail: 1,
      userNotifications: 5,
      userName: 'VASIA',
      userRole: 'LOL',
      userAvatar: ''
    };
    // const response = await fetch('http://localhost/userInfo')
    dispatch({
      type: CurrentUser.GET_CUSTOMER_INFO,
      payload: userInfo
    });
  };
}

export function createUsers(data) {
  return dispatch => {
    dispatch({
      type: System.START_LOAD
    });

    UsersAPI.createUsers(data)
      .then(res => res)
      .catch(err => err)
      .finally(() => {
        dispatch({
          type: System.STOP_LOAD
        });
      });
  };
}
