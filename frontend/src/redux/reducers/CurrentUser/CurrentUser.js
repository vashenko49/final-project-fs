import * as CURRENTUSER from '../../config/CurrentUser';

export const initialState = {
  userInfo: {
    userMail: 0,
    userNotifications: 0,
    userName: 'User',
    userRole: 'Role',
    userAvatar: ''
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CURRENTUSER.GET_CUSTOMER_INFO:
      return {
        ...state,
        userInfo: action.payload
      };
    default:
      return state;
  }
};
