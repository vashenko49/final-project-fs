import * as ManagementService from '../config/ManagementService';
import * as SYSTEM from '../config/System';
import ManagementServiceAPI from '../../services/ManagementServiceAPI';

export function getManagementServiceTypes() {
  return dispatch => {
    dispatch({
      type: SYSTEM.START_LOAD
    });

    ManagementServiceAPI.getServiceTypes()
      .then(res => {
        dispatch({
          type: ManagementService.GET_MANAGEMENT_SERVICE_TYPES,
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

export function createManagementService(data) {
  return dispatch => {
    dispatch({
      type: SYSTEM.START_LOAD
    });

    ManagementServiceAPI.createService(data)
      .then(res => res)
      .catch(err => err)
      .finally(() => {
        dispatch({
          type: SYSTEM.STOP_LOAD
        });
      });
  };
}
