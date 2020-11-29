import React from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles(() => ({
  root: {
    '& .MuiOutlinedInput-root': {
      borderRadius: '10px'
    },
    '& .MuiInputBase-input': {
      height: '8px'
    },
    '& .MuiSvgIcon-root': {
      fontSize: '24px',
      color: '#ACB5B9 '
    }
  }
}));

const CustomTextField = ({ variant = 'outlined', startAdornment, ...otherProps }) => {
  const classes = useStyles();
  return (
    <TextField
      variant={variant}
      fullWidth
      className={classes.root}
      InputProps={{
        startAdornment: <InputAdornment position="start">{startAdornment}</InputAdornment>
      }}
      {...otherProps}
    />
  );
};

export default CustomTextField;
