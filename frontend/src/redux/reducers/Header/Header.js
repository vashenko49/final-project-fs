import * as HEADER from '../../config/Header';

export const initialState = {
  headerOpen: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case HEADER.HEADER_OPEN:
      return {
        ...state,
        headerOpen: true
      };
    case HEADER.HEADER_CLOSE:
      return {
        ...state,
        headerOpen: false
      };
    default:
      return state;
  }
};
