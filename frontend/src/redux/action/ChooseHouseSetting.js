import * as ChooseHouseSetting from '../config/ChooseHouseSetting';

export const setChooseHouseSetting = house => dispatch => {
  dispatch({
    type: ChooseHouseSetting.SET_HOUSE,
    payload: house
  });
};
