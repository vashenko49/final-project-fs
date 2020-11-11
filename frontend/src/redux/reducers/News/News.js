import * as News from '../../config/News';

export const initialState = {
  news: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case News.GET_NEWS:
      return {
        ...state,
        news: action.payload
      };
    default:
      return state;
  }
};
