import React from 'react';
import Logo from './Logo/Logo';
import HeaderNavBar from './HeaderNavBar/HeaderNavBar';
import Search from './Search/Search';

import HomeSubNavBar from './SubNavBar/HomeSubNavBar';
import { Route, Switch } from 'react-router-dom';
import makeStyles from '@material-ui/core/styles/makeStyles';
import IconButton from '@material-ui/core/IconButton';
import classNames from 'classnames';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { useDispatch, useSelector } from 'react-redux';
import { headerClose, headerOpen } from '../../../redux/action/Header';
import HeaderSelector from '../../../redux/selector/Header';
import AppBar from '@material-ui/core/AppBar';
import SideSelector from '../../../redux/selector/Side';

const useStyles = makeStyles(theme => ({
  appBar: {
    right: '50px',
    width: 'calc((100vw - (100vw - 100%)) - 100px);',
    position: 'absolute',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    color: '#254A93',
    background: '#EEF5FF 0% 0% no-repeat padding-box',
    border: '.5px solid rgba(177, 180, 186, 0.5)',
    borderRadius: '0px 0px 20px 20px',
    boxShadow: 'none'
  },
  appBarShift: ({ drawerWidth }) => ({
    width: `calc((100vw - (100vw - 100%)) - ${drawerWidth}px - 100px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  }),
  'appBarShift-right': ({ drawerWidth }) => ({
    marginRight: drawerWidth
  }),
  header: {
    position: 'relative',
    padding: '50px 2%',
    fontSize: '1.5rem'
  },
  headerTop: ({ headerOpened }) => ({
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: headerOpened ? '40px' : 0
  }),
  headerButton: {
    position: 'absolute',
    width: '40px',
    height: '40px',
    bottom: '-20px',
    boxSizing: 'border-box',
    left: 'calc(50% - 20px)',
    background: '#EEF5FF 0% 0% no-repeat padding-box',
    border: '.5px solid rgba(177, 180, 186, 0.5)',
    zIndex: '2'
  },
  hide: {
    display: 'none'
  }
}));
const Header = ({ drawerWidth }) => {
  const headerOpened = useSelector(HeaderSelector.getHeaderOpen);
  const sideOpened = useSelector(SideSelector.getSideOpen);
  const dispatch = useDispatch();
  const classes = useStyles({ headerOpened, drawerWidth });

  return (
    <AppBar
      className={classNames(classes.appBar, {
        [classes.appBarShift]: sideOpened,
        [classes['appBarShift-right']]: sideOpened
      })}
    >
      <div className={classes.header}>
        <div className={classes.headerTop}>
          <Logo />
          <HeaderNavBar />
          <Search />
        </div>
        <Switch>
          <Route path="/">
            <HomeSubNavBar />
          </Route>
          <Route path="/settings">
            <HomeSubNavBar />
          </Route>
        </Switch>
        <IconButton
          onClick={() => dispatch(headerClose())}
          className={classNames(classes.headerButton, !headerOpened && classes.hide)}
        >
          <KeyboardArrowUpIcon htmlColor="#B1B4BA" fontSize="large" />
        </IconButton>
        <IconButton
          onClick={() => dispatch(headerOpen())}
          className={classNames(classes.headerButton, headerOpened && classes.hide)}
        >
          <KeyboardArrowDownIcon htmlColor="#B1B4BA" fontSize="large" />
        </IconButton>
      </div>
    </AppBar>
  );
};

export default Header;
