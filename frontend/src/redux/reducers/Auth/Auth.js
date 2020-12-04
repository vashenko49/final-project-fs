import * as Auth from '../../config/auth/Auth';

export const initialState = {
  message: null,
  isAuth: false,
  userProfile: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Auth.RESPONSE_LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        userProfile: action.payload
      };
    case Auth.RESPONSE_LOGIN_FAILE:
      return {
        ...state,
        ...initialState,
        message: action.payload
      };
    default:
      return state;
  }
};
