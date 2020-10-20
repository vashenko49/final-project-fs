import * as DrawerHeader from '../../config/DrawerHeader';

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
      type: DrawerHeader.GET_CUSTOMER_INFO,
      payload: userInfo
    });
  };
}
