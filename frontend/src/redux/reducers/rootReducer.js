import { combineReducers } from 'redux';

import System from './System/System';
import Header from './Header/Header';
import CurrentUser from './CurrentUser/CurrentUser';

export default combineReducers({
  System,
  Header,
  CurrentUser
});
