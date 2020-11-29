import React, { useEffect, useState } from 'react';
import { headerOpen, headerClose } from '../../redux/action/Header';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Header from './Header/Header';
import { useDispatch, useSelector } from 'react-redux';
import DrawerHeader from './Drawer/DrawerHeader/Header';
import { getUserInfo } from '../../redux/action/CurrentUser';
import DrawerManager from './Drawer/DrawerManager/DrawerManager';
import { getManagerInfo } from '../../redux/action/DrawerManager';
import ManagementService from '../ManagementService/ManagementService';
import DrawerQuickAccess from './Drawer/DrawerQuickAccess/DrawerQuickAccess';
import News from '../News/News';
import UsersCreate from '../User/UserCreate/UsersCreate';

const drawerWidth = 450;

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  appFrame: {
    height: 1263,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%'
  },
  appBar: {
    width: '96%',
    position: 'absolute',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    right: '2%',
    color: '#254A93',
    background: '#EEF5FF 0% 0% no-repeat padding-box',
    border: '.5px solid #B1B4BA',
    borderRadius: '0px 0px 20px 20px'
  },
  appBarShift: {
    width: `calc(96% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  'appBarShift-right': {
    marginRight: drawerWidth
  },
  headerButton: {
    position: 'absolute',
    top: '170px',
    left: `calc(61% - ${drawerWidth}px)`,
    background: '#EEF5FF 0% 0% no-repeat padding-box',
    border: '0.5px solid #B1B4BA',
    zIndex: '2'
  },
  headerButtonShift: {
    left: '48%'
  },
  subHeaderClosed: {
    top: '100px'
  },
  menuButton: {
    position: 'absolute',
    top: '40px',
    background: '#EEF5FF 0% 0% no-repeat padding-box',
    border: '0.5px solid #B1B4BA'
  },
  sideMenuOpened: {
    right: '0px',
    zIndex: '2'
  },
  sideMenuClosed: {
    right: '425px',
    zIndex: '2'
  },
  hide: {
    display: 'none'
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
    background: '#EEF5FF 0% 0% no-repeat padding-box',
    zIndex: '1'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: '2%',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    paddingTop: '220px'
  },
  'content-right': {
    marginRight: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  'contentShift-right': {
    marginRight: 0
  },
  contentHeaderClosed: {
    paddingTop: '150px'
  }
});

const Dashboard = props => {
  const [openSideMenu, setOpenSideMenu] = useState(true);
  const { classes } = props;
  const headerOpened = useSelector(state => state.Header.headerOpen);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserInfo(), getManagerInfo());
  });

  const drawer = (
    <Drawer
      variant="persistent"
      anchor="right"
      open={openSideMenu}
      classes={{
        paper: classes.drawerPaper
      }}
    >
      <div className={classes.drawerHeader}>
        <DrawerHeader />
        {/* Контент под хедером */}
      </div>
      <DrawerQuickAccess />
      <DrawerManager />
    </Drawer>
  );

  return (
    <div className={classes.root}>
      <div className={classes.appFrame}>
        <AppBar
          className={classNames(classes.appBar, {
            [classes.appBarShift]: openSideMenu,
            [classes['appBarShift-right']]: openSideMenu
          })}
        >
          <Header />
        </AppBar>
        <main
          className={classNames(
            classes.content,
            classes['content-right'],
            !headerOpened && classes.contentHeaderClosed,
            {
              [classes.contentShift]: openSideMenu,
              [classes['contentShift-right']]: openSideMenu
            }
          )}
        >
          {/* PUT MAIN CONTENT HERE */}

          <ManagementService />
          <UsersCreate />
          <News />
        </main>
        {drawer}
      </div>
      <IconButton
        onClick={() => dispatch(headerClose())}
        className={classNames(classes.headerButton, !headerOpened && classes.hide, {
          [classes.headerButtonShift]: !openSideMenu
        })}
      >
        <KeyboardArrowUpIcon />
      </IconButton>
      <IconButton
        onClick={() => dispatch(headerOpen())}
        className={classNames(
          classes.headerButton,
          classes.subHeaderClosed,
          headerOpened && classes.hide,
          {
            [classes.headerButtonShift]: !openSideMenu
          }
        )}
      >
        <KeyboardArrowDownIcon />
      </IconButton>
      <IconButton
        onClick={() => setOpenSideMenu(true)}
        className={classNames(
          classes.menuButton,
          openSideMenu && classes.hide,
          classes.sideMenuOpened
        )}
      >
        <ChevronLeftIcon />
      </IconButton>
      <IconButton
        onClick={() => setOpenSideMenu(false)}
        className={classNames(
          classes.menuButton,
          !openSideMenu && classes.hide,
          classes.sideMenuClosed
        )}
      >
        <ChevronRightIcon />
      </IconButton>
    </div>
  );
};

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Dashboard);
