import React from 'react';
import Logo from './Logo/Logo';
import HeaderNavBar from './HeaderNavBar/HeaderNavBar';
import Search from './Search/Search';

import HomeSubNavBar from './SubNavBar/HomeSubNavBar';
import { Route, Switch } from 'react-router-dom';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(() => ({
  header: {
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '0 2%',
    paddingTop: '25px',
    paddingBottom: '25px',
    fontSize: '1.5rem'
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <Logo />
      <HeaderNavBar />
      <Search />
      <Switch>
        <Route exact path="/">
          <HomeSubNavBar />
        </Route>
        <Route path="/settings">
          <HomeSubNavBar />
        </Route>
      </Switch>
    </div>
  );
};

export default Header;
