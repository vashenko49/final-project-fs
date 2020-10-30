import makeStyles from '@material-ui/core/styles/makeStyles';
import { useTranslation } from 'react-i18next';

import React from 'react';
import ButtonPreview from '../../generic/ButtonPreview';

const useStyles = makeStyles({
  title: {
    margin: '20px 136px 0 136px',
    font: 'normal normal medium 18px/24px Roboto',
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: -0.09,
    color: '#254A93',
    textTransform: 'capitalize'
  },
  subtitle: {
    margin: '5px 125px 0 125px',
    font: 'normal normal normal 18px/24px Roboto',
    letterSpacing: 0,
    color: '#99A0A3',
    fontSize: 12,
    opacity: 1
  },
  cardsContainer: {
    width: 356,
    height: 130,
    backgroundColor: '#99A0A3',
    margin: '22px 30px 0 30px'
  }
});

const DrawerQuickAccess = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <div>
      <div className={classes.title}>Швидкий доступ</div>
      <div className={classes.subtitle}>Переглянути аналітику btn </div>
      <div className={classes.cardsContainer}>
        <ButtonPreview title="Власні будинки" />
        <ButtonPreview title="Власні будинки" />
      </div>
    </div>
  );
};

DrawerQuickAccess.propTypes = {};

export default DrawerQuickAccess;
