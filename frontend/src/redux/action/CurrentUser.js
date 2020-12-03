import * as CurrentUser from '../config/CurrentUser';
import * as System from '../config/System';
import UsersAPI from '../../services/UsersAPI';
import * as CreateUser from '../config/user/CreateUser';

export const getUserInfo = () => dispatch => {
  console.log('--> getUserInfo');
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
    .catch(err => {
      dispatch({
        type: CreateUser.RESPONSE_CREATE_USER,
        payload: {
          success: false,
          message: err.message
        }
      });
    })
    .finally(() => {
      dispatch({
        type: System.STOP_LOAD
      });
    });
};
