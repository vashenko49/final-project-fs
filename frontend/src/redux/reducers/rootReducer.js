import { combineReducers } from 'redux';

import System from './System/System';
import Header from './Header/Header';
import CurrentUser from './CurrentUser/CurrentUser';
import ManagementService from './ManagementService/ManagementService';

export default combineReducers({
  System,
  Header,
  CurrentUser,
  ManagementService
});
