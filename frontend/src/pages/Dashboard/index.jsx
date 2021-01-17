import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import Header from './Header/Header';
import {useSelector} from 'react-redux';
import RolePrivateRoute from "../../components/RolePrivateRoute";
import roleRoutes from "../../routes/roleRoutes";
import HeaderSelector from "../../redux/selector/Header";
import SideSelector from "../../redux/selector/Side";
import Side from "./Drawer/Side";

const drawerWidth = 450;

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    appFrame: {
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%'
    },
    content: {
        flexGrow: 1,
        minHeight: 'calc(100vh - 220px)',
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        paddingTop: '220px'
    },
    'content-right': {
        marginRight: -drawerWidth + 50,
        marginLeft: 50
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    'contentShift-right': {
        margin: '0 50px'
    },
    contentHeaderClosed: {
        paddingTop: '150px'
    }
});

const Dashboard = props => {
    const {classes} = props;
    const headerOpened = useSelector(HeaderSelector.getHeaderOpen);
    const sideOpened = useSelector(SideSelector.getSideOpen);

    return (
        <div className={classes.root}>
            <div className={classes.appFrame}>
                <Header drawerWidth={drawerWidth}/>
                <main
                    className={classNames(
                        classes.content,
                        classes['content-right'],
                        !headerOpened && classes.contentHeaderClosed,
                        {
                            [classes.contentShift]: sideOpened,
                            [classes['contentShift-right']]: sideOpened
                        }
                    )}
                >
                    {roleRoutes.map(route => (
                        <RolePrivateRoute key={route.path} roles={route.roles} {...route} />
                    ))}
                </main>
                <Side drawerWidth={drawerWidth}/>
            </div>
        </div>
    );
};

Dashboard.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

export default withStyles(styles, {withTheme: true})(Dashboard);
