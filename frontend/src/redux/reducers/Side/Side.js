import * as SIDE from '../../config/Side';

export const initialState = {
  sideOpen: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIDE.SIDE_OPEN:
      return {
        ...state,
        sideOpen: true
      };
    case SIDE.SIDE_CLOSE:
      return {
        ...state,
        sideOpen: false
      };
    default:
      return state;
  }
};
