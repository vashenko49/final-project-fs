import * as Error from '../../config/Error';

export const initialState = {
  timestamp: null,
  message: null,
  errors: null,
  isOpen: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Error.ERROR_SHOW:
      return {
        ...state,
        ...action.payload,
        isOpen: true
      };
    case Error.ERROR_HIDE:
      return {
        ...state,
        ...action,
        isOpen: false
      };
    default:
      return state;
  }
};
