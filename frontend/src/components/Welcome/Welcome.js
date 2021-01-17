import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import CurrentUserSelector from '../../redux/selector/CurrentUserSelector';

const useStyles = makeStyles({
  welcome: {
    fontWeight: 700,
    color: '#293134',
    height: 24,
    width: 1300,
    margin: '20px 0 20px 30px'
  },
  updates: {
    margin: '0 auto',
    fontWeight: '400',
    float: 'right'
  },
  date: {
    fontWeight: '600'
  }
});

const Welcome = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const profile = useSelector(CurrentUserSelector.getProfile);
  return (
    <div className={classes.welcome}>
      {t('welcomeHello')}, {profile.name}!
      <p className={classes.updates}>
        {t('welcomeUpdates')}: <span className={classes.date} />
      </p>
    </div>
  );
};

Welcome.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string
};

export default Welcome;
