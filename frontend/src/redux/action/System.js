import * as SYSTEM from '../config/System';

export const startLoad = () => ({
  type: SYSTEM.START_LOAD
});

export const stopLoad = () => ({
  type: SYSTEM.STOP_LOAD
});

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
      type: SYSTEM.GET_CUSTOMER_INFO,
      payload: userInfo
    });
  };
}
