import * as DrawerManager from '../../config/DrawerManager';

export const initialState = {
  managerInfo: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DrawerManager.GET_MANAGER_INFO:
      return {
        ...state,
        managerInfo: action.payload
      };
    default:
      return state;
  }
};
