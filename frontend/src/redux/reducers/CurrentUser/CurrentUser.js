import * as CurrentUser from '../../config/CurrentUser';

export const initialState = {
  profile: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CurrentUser.GET_CURRENT_USER_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload
      };
    default:
      return state;
  }
};
