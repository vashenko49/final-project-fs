import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CircularProgress from '@material-ui/core/CircularProgress';
import {Backdrop} from "@material-ui/core";

const useStyles = makeStyles({
    backDrop: {
        zIndex: "10000",
        backgroundColor: "white"
    }
});


const PageLoader = ({load}) => {

    const classes = useStyles();
    return (
        <Backdrop open={load} className={classes.backDrop}>
            <CircularProgress color={'inherit'}/>
        </Backdrop>
    );
};

export default PageLoader;