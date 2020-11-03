import * as ManagementService from '../../config/ManagementService';

export const initialState = {
  services: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ManagementService.GET_MANAGEMENT_SERVICES:
      return {
        ...state,
        services: action.payload
      };
    default:
      return state;
  }
};
