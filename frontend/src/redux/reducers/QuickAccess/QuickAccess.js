import * as QuickAccess from '../../config/QuickAccess';

export const initialState = {
  houses: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case QuickAccess.GET_HOUSES:
      return {
        ...state,
        houses: action.payload
      };
    default:
      return state;
  }
};
