import * as SYSTEM from '../config/System';
import QuickAccessAPI from '../../services/QuickAccessAPI';
import * as QuickAccess from '../config/QuickAccess';

export function getHouses() {
  return dispatch => {
    dispatch({
      type: SYSTEM.START_LOAD
    });

    QuickAccessAPI.getHouses()
      .then(res => {
        dispatch({
          type: QuickAccess.GET_HOUSES,
          payload: res.data
        });
      })
      .catch(err => err)
      .finally(() => {
        dispatch({
          type: SYSTEM.STOP_LOAD
        });
      });
  };
}
