import * as SYSTEM from '../../config/System';

export const initialState = {
  load: false,
  pageLoad: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SYSTEM.START_LOAD:
      return {
        ...state,
        load: true
      };
    case SYSTEM.START_PAGE_LOAD:
      return {
        ...state,
        pageLoad: true
      };
    case SYSTEM.STOP_LOAD:
      return {
        ...state,
        load: false
      };
    case SYSTEM.STOP_PAGE_LOAD:
      return {
        ...state,
        pageLoad: false
      };
    default:
      return state;
  }
};
