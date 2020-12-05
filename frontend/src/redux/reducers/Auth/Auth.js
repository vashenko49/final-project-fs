import * as Auth from '../../config/auth/Auth';
import { getToken } from '@utils/Auth';

let token = getToken();

export const initialState = {
  message: null,
  isAuth: Boolean(token),
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
        message: action.payload,
        isAuth: false
      };
    default:
      return state;
  }
};
