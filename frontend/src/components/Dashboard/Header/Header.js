import React from 'react';
import Logo from './Logo/Logo';
import HeaderNavBar from './HeaderNavBar/HeaderNavBar';
import Search from './Search/Search';

import './Header.scss';
import HomeSubNavBar from './SubNavBar/HomeSubNavBar';
import SettingsSubNavBar from './SubNavBar/SettingsSubNavBar';
import { Route, Switch } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <HeaderNavBar />
      <Search />
      <Switch>
        <Route exact path="/">
          <HomeSubNavBar />
        </Route>
        <Route path="/settings">
          <SettingsSubNavBar />
        </Route>
      </Switch>
    </div>
  );
};

export default Header;
