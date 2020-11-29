import React from 'react';
import UsersCreateForm from './UsersCreateForm';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(() => ({
  title: {
    font: 'normal normal bold 18px/24px Roboto',
    color: '#293134',
    textAlign: 'center',
    marginBottom: '10px'
  }
}));

const UsersCreate = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <p className={classes.title}>{t('createUserTitle')}</p>
      <UsersCreateForm />
    </>
  );
};

export default UsersCreate;
