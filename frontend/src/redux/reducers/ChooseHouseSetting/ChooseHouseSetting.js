import * as ChooseHouseSetting from '../../config/ChooseHouseSetting';

export const initialState = {
  house: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ChooseHouseSetting.SET_HOUSE:
      return {
        ...state,
        house: action.payload
      };
    default:
      return state;
  }
};
