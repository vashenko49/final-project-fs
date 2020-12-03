import * as CreateUser from '../../config/user/CreateUser';

export const initialState = {
  success: null,
  message: null
};

export default (action, state = initialState) => {
  const { type = '' } = action;
  switch (type) {
    case CreateUser.RESPONSE_CREATE_USER:
      return {
        ...state,
        success: action.payload.success,
        message: action.payload.message
      };
    default:
      return state;
  }
};
