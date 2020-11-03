import * as ManagementService from '../config/ManagementService';
import * as SYSTEM from '../config/System';
import ManagementServiceAPI from '../../services/ManagementServiceAPI';

export function getManagementServices() {
  return dispatch => {
    dispatch({
      type: SYSTEM.START_LOAD
    });

    ManagementServiceAPI.getServices()
      .then(res => {
        dispatch({
          type: ManagementService.GET_MANAGEMENT_SERVICES,
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

export function createManagementServices(data) {
  return dispatch => {
    dispatch({
      type: SYSTEM.START_LOAD
    });

    ManagementServiceAPI.createServices(data)
      .then(res => res)
      .catch(err => err)
      .finally(() => {
        dispatch({
          type: SYSTEM.STOP_LOAD
        });
      });
  };
}
