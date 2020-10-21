import React from 'react';
import SelectLanguage from '../../../SelectLanguage/SelectLanguage';
import UserContainer from './UserContainer';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import './styles.css';
import Badge from '@material-ui/core/Badge';
import { useSelector } from 'react-redux';

export default function DrawerHeader() {
  const userInfo = useSelector(state => {
    return state.System.userInfo;
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
