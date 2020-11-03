import * as DrawerManager from '../../config/DrawerManager';

export const initialState = {
  managerInfo: {
    managerMail: 'olegprutyla@gmail.com',
    managerName: 'Олег Притула',
    managerTel: '093-111-11-11',
    userAvatar: ''
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DrawerManager.GET_MANAGER_INFO:
      return {
        ...state,
        managerInfo: action.payload
      };
    default:
      return state;
  }
};
