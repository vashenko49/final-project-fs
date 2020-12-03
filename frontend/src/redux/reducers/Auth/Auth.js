import * as Auth from '../../config/auth/Auth';

export const initialState = {
  message: null,
  isAuth: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Auth.RESPONSE_LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true
      };
    case Auth.RESPONSE_LOGIN_FAILE:
      return {
        ...state,
        isAuth: false,
        message: action.payload
      };
    default:
      return state;
  }
};
