import * as DrawerHeader from '../../config/DrawerHeader';

export const initialState = {
  userMail: 0,
  userNotifications: 0,
  userName: 'User',
  userRole: 'Role',
  userAvatar: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DrawerHeader.GET_CUSTOMER_INFO:
      return {
        ...state,
        userMail: action.payload.userMail,
        userNotifications: action.payload.userNotifications,
        userName: action.payload.userName,
        userRole: action.payload.userRole,
        userAvatar: action.payload.userAvatar
      };
    default: {
      return state;
    }
  }
};
