import * as SYSTEM from '../../config/System';

export const initialState = {
  load: false
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
    default:
      return state;
  }
};
