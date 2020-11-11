import * as SYSTEM from '../config/System';
import * as News from '../config/News';
import NewsAPI from '../../services/NewsAPI';

export function getNews() {
  return dispatch => {
    dispatch({
      type: SYSTEM.START_LOAD
    });

    NewsAPI.getNews()
      .then(res => {
        dispatch({
          type: News.GET_NEWS,
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
