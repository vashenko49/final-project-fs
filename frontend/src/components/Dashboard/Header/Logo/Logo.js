import React from 'react';

import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(() => ({
  logoSpan: {
    color: '#4AD584'
  }
}));

const Logo = () => {
  const classes = useStyles();

  return (
    <p>
      MARKSEM <span className={classes.logoSpan}>CRM</span>
    </p>
  );
};

export default Logo;
