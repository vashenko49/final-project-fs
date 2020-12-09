import * as Error from '../config/Error';

export const errorHide = () => dispatch =>
  dispatch({
    type: Error.ERROR_HIDE
  });

export const errorShow = payload => dispatch =>
  dispatch({
    type: Error.ERROR_SHOW,
    payload
  });
