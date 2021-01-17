import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {useDispatch, useSelector} from 'react-redux';
import SideSelector from '../../../redux/selector/Side';
import Drawer from "@material-ui/core/Drawer";
import SideHeader from "./SideHeader/Header";
import IconButton from "@material-ui/core/IconButton";
import {sideClose, sideOpen} from "../../../redux/action/Side";
import classNames from "classnames";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const useStyles = makeStyles(theme => ({
    drawerPaper: ({drawerWidth}) => ({
        position: 'relative',
        width: drawerWidth,
        minHeight: '100vh',
        background: '#EEF5FF 0% 0% no-repeat padding-box',
        border: '.5px solid rgba(177, 180, 186, 0.5)',
        zIndex: '1',
        boxSizing: 'border-box'
    }),
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar
    },
    menuButton: {
        position: 'absolute',
        width: '40px',
        height: '40px',
        top: '40px',
        background: '#EEF5FF 0% 0% no-repeat padding-box',
        border: '.5px solid rgba(177, 180, 186, 0.5)',
    },
    sideMenuOpened: {
        right: '0px',
        zIndex: '2'
    },
    sideMenuClosed: {
        right: '430px',
        zIndex: '2'
    },
    hide: {
        display: 'none'
    },
}));
const Side = ({drawerWidth}) => {
    const sideOpened = useSelector(SideSelector.getSideOpen);
    const dispatch = useDispatch();
    const classes = useStyles({drawerWidth});

    return (
        <>
            <Drawer
                variant="persistent"
                anchor="right"
                open={sideOpened}
                classes={{
                    paper: classes.drawerPaper
                }}
            >
                <div className={classes.drawerHeader}>
                    <SideHeader/>
                    {/* Контент под хедером */}
                </div>
            </Drawer>
            <IconButton
                onClick={() => dispatch(sideOpen())}
                className={classNames(
                    classes.menuButton,
                    sideOpened && classes.hide,
                    classes.sideMenuOpened
                )}
            >
                <ChevronLeftIcon htmlColor="#B1B4BA" fontSize="large"/>
            </IconButton>
            <IconButton
                onClick={() => dispatch(sideClose())}
                className={classNames(
                    classes.menuButton,
                    !sideOpened && classes.hide,
                    classes.sideMenuClosed
                )}
            >
                <ChevronRightIcon htmlColor="#B1B4BA" fontSize="large"/>
            </IconButton>
        </>
    );
};

export default Side;
