import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useSelector } from 'react-redux';
import SystemSelector from '../../redux/selector/System';

const useStyles = makeStyles({
  backDrop: {
    zIndex: '100'
  }
});

const Loader = () => {
  const load = useSelector(SystemSelector.getStatusLoad);
  const classes = useStyles();
  return (
    <Backdrop className={classes.backDrop} open={load}>
      <CircularProgress color={'inherit'} />
    </Backdrop>
  );
};

export default Loader;
