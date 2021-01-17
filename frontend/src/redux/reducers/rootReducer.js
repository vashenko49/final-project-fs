import { combineReducers } from 'redux';

import System from './System/System';
import Header from './Header/Header';
import Side from './Side/Side';
import CurrentUser from './CurrentUser/CurrentUser';
import DrawerManager from './DrawerManager/DrawerManager';
import ManagementService from './ManagementService/ManagementService';
import QuickAccess from './QuickAccess/QuickAccess';
import News from './News/News';
import CreateUser from './User/CreateUser';
import Auth from './Auth/Auth';
import Error from './Error/Error';
import ChooseHouseSetting from './ChooseHouseSetting/ChooseHouseSetting';

export default combineReducers({
  System,
  Header,
  Side,
  CurrentUser,
  DrawerManager,
  ManagementService,
  QuickAccess,
  News,
  CreateUser,
  Auth,
  Error,
  ChooseHouseSetting
});
