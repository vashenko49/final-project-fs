import * as DrawerManager from '../config/DrawerManager';

export const getManagerInfo = () => {
  return async dispatch => {
    let managerInfo = {
      managerMail: 'olegprutyla@gmail.com',
      managerName: 'Олег Притула',
      managerTel: '093-111-11-11',
      userAvatar: ''
    };
    // const response = await fetch('http://localhost/managerInfo')
    dispatch({
      type: DrawerManager.GET_MANAGER_INFO,
      payload: managerInfo
    });
  };
};
