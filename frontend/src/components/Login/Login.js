import React from 'react';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import PersonIcon from '@material-ui/icons/Person';
import LockIcon from '@material-ui/icons/Lock';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Button from '@material-ui/core/Button';
import { login } from '../../redux/action/Security';

const useStyles = makeStyles(theme => ({
  form: {
    margin: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column'
  },
  input: {
    margin: 'auto',
    marginTop: '10px'
  }
}));

function loginAuto() {
  console.log('нажал');
  login();
}

export function Login() {
  const classes = useStyles();
  return (
    <form className={classes.form} noValidate autoComplete="off">
      <TextField
        className={classes.input}
        id="login"
        label="Login"
        type="login"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PersonIcon fontSize="large" opacity="0.5" />
            </InputAdornment>
          )
        }}
      />
      <TextField
        className={classes.input}
        id="password"
        label="Password"
        type="password"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon fontSize="large" opacity="0.5" />
            </InputAdornment>
          )
        }}
      />
      <Button variant="contained" color="primary" className={classes.input}>
        Login
      </Button>
      <Button variant="contained" color="secondary" className={classes.input} onClick={loginAuto}>
        Login auto(dev)
      </Button>
      {/* <Button variant="contained" className={classes.input}> */}
      {/*  view main not login(dev) */}
      {/* </Button> */}
    </form>
  );
}
