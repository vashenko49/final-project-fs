import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  avatar: {
    width: '70px',
    height: '70px'
  },
  root: {
    width: '100%',
    display: 'flex',
    fontFamily: 'sans-serif',
    justifyContent: 'flex-end'
  },
  nameContainer: {
    paddingTop: '15px',
    paddingRight: '15px'
  },
  name: {
    fontSize: '15px',
    color: '#052ea7',
    fontWeight: 'bold'
  },
  role: {
    fontSize: '10px',
    textAlign: 'right',
    paddingTop: '10px',
    color: '#939393',
    fontWeight: 'bold'
  }
}));

function UserContainer({ name, role, avatar }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.nameContainer}>
        <div className={classes.name}>{name}</div>
        <div className={classes.role}>{role}</div>
      </div>
      <Avatar alt={'avatar'} className={classes.avatar}>
        UN
      </Avatar>
    </div>
  );
}

export default UserContainer;
