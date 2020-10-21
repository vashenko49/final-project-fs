import * as SYSTEM from '../../config/System';

export const initialState = {
  load: false,
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
    case SYSTEM.START_LOAD:
      return {
        ...state,
        load: true
      };
    case SYSTEM.STOP_LOAD:
      return {
        ...state,
        load: false
      };
    case SYSTEM.GET_CUSTOMER_INFO:
      return {
        ...state,
        userInfo: action.payload
      };
    default:
      return state;
  }
};
