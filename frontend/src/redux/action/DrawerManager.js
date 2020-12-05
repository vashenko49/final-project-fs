import * as SYSTEM from '../config/System';
import * as DrawerManager from '../config/DrawerManager';
import DrawerManagerAPI from '../../services/DrawerManagerAPI';

export function getManagerInfo() {
  return dispatch => {
    dispatch({
      type: SYSTEM.START_LOAD
    });

    DrawerManagerAPI.getManagerInfo()
      .then(res => {
        dispatch({
          type: DrawerManager.GET_MANAGER_INFO,
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
