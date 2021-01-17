import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(() => ({
  main: {
    font: 'normal normal bold 24px Gotham Pro'
  },
  logoSpan: {
    color: '#4AD584'
  }
}));

const Logo = () => {
  const classes = useStyles();

  return (
    <p className={classes.main}>
      MARKSEM <span className={classes.logoSpan}>CRM</span>
    </p>
  );
};

export default Logo;
