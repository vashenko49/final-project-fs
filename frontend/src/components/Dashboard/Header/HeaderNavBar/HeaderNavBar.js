import React from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Tab from "@material-ui/core/Tab";
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import Tabs from "@material-ui/core/Tabs";
import {Link} from "react-router-dom";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        maxWidth: 500,
        background: "none",
        boxShadow: "none",
        fontSize: "1.5rem;",
        flex: "0 0 60%"
    },
    iconLabelWrapper: {
        flexDirection: "row",
    }
});

const iconStyle = {
    marginBottom: 0
}

const HeaderNavBar = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Tabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            TabIndicatorProps={{
                style: {
                    display:"none",
                }
            }}
            textColor="inherit"
            aria-label="icon label tabs example"
        >
            <Tab
                classes={{
                    wrapper: classes.iconLabelWrapper
                }}
                icon={<DashboardIcon style={iconStyle} />}
                label="HOME"
                component={Link}
                to="/"
            />
            <Tab
                classes={{
                    wrapper: classes.iconLabelWrapper
                }}
                icon={<SettingsIcon style={iconStyle} />}
                label="SETTINGS"
                component={Link}
                to="/settings"
            />
        </Tabs>
    );
};

export default HeaderNavBar;
