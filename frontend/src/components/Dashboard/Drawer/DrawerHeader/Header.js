import React from 'react';
import SelectLanguage from '../../../SelectLanguage/SelectLanguage';
import UserContainer from './UserContainer';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import './styles.css';
import Badge from '@material-ui/core/Badge';

export default function DrawerHeader() {
  function showMail() {}
  function showNotification() {}
  return (
    <header className="root">
      <div className="iconContainer">
        <SelectLanguage />
        <Badge badgeContent={4} color="error" overlap="circle">
          <MailIcon fontSize={'large'} className="iconElem" onClick={showMail} />
        </Badge>
        <Badge badgeContent={4} color="error" overlap="circle">
          <NotificationsIcon fontSize={'large'} className="iconElem" onClick={showNotification} />
        </Badge>
      </div>
      <UserContainer />
    </header>
  );
}
