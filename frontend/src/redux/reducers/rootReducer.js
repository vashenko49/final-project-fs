import { combineReducers } from 'redux';

import System from './System/System';
import Header from './Header/Header';
import DrawerHeader from './drawerheader/DrawerHeader';

export default combineReducers({
  System,
  Header,
  drawerHeader: DrawerHeader
});
