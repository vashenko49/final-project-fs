import React, { useEffect, useState } from 'react';
import SelectLanguage from '../../../SelectLanguage/SelectLanguage';
import UserContainer from './UserContainer';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import './styles.css';
import Badge from '@material-ui/core/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInfo } from '../../../../redux/action/drawerheader/DrawerHeader';

export default function DrawerHeader() {
  const [ready, setReady] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (ready === false) {
      dispatch(getUserInfo());
      setReady(true);
    }
  }, [ready, dispatch]);

  const userInfo = useSelector(state => {
    return state.drawerHeader;
  });

  function showMail() {}
  function showNotification() {}
  return (
    <header className="root">
      <div className="iconContainer">
        <SelectLanguage />
        <Badge badgeContent={userInfo.userMail} color="error" overlap="circle">
          <MailIcon fontSize={'large'} className="iconElem" onClick={showMail} />
        </Badge>
        <Badge badgeContent={userInfo.userNotifications} color="error" overlap="circle">
          <NotificationsIcon fontSize={'large'} className="iconElem" onClick={showNotification} />
        </Badge>
      </div>
      <UserContainer
        name={userInfo.userName}
        role={userInfo.userRole}
        avatar={userInfo.userAvatar}
      />
    </header>
  );
}
