import React, { useEffect } from 'react';

import UserContainer from './UserContainer';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import './styles.css';
import Badge from '@material-ui/core/Badge';
import { useDispatch, useSelector } from 'react-redux';
import SelectLanguage from '@components/SelectLanguage/SelectLanguage';
import CurrentUserSelector from '../../../../redux/selector/CurrentUserSelector';
import { getProfile } from '../../../../redux/action/CurrentUser';

export default function SideHeader() {
  const profile = useSelector(CurrentUserSelector.getProfile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  function showMail() {}

  function showNotification() {}

  return (
    <>
      {profile && (
        <header className="root">
          <div className="iconContainer">
            <SelectLanguage />
            <Badge badgeContent={10} color="error" overlap="circle">
              <MailIcon fontSize={'large'} className="iconElem" onClick={showMail} />
            </Badge>
            <Badge badgeContent={5} color="error" overlap="circle">
              <NotificationsIcon
                fontSize={'large'}
                className="iconElem"
                onClick={showNotification}
              />
            </Badge>
          </div>
          <UserContainer name={profile.name} role={profile.role} avatar={profile.urlAvatar} />
        </header>
      )}
    </>
  );
}
