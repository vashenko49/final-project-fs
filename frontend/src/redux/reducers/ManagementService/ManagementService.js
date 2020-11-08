import * as ManagementService from '../../config/ManagementService';

export const initialState = {
  serviceTypes: {
    content: []
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ManagementService.GET_MANAGEMENT_SERVICE_TYPES:
      return {
        ...state,
        serviceTypes: action.payload
      };
    default:
      return state;
  }
};
