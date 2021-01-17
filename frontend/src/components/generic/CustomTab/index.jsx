import React from 'react';
import Tab from "@material-ui/core/Tab";
import {withStyles} from "@material-ui/core";

const CustomTab = withStyles(() => ({
    root: {
        minWidth: 'inherit',
        marginRight: '10px',
        textTransform: 'none',
        color: '#6E7375',
        font: 'normal normal normal 14px Roboto',
        padding: 0,
        minHeight: 0,
        '&:focus, &$selected': {
            color: '#254A93',
            fontWeight: 'bold',
        },
        '&:hover': {
            color: '#254A93',
        }
    },
    wrapper: {
        flexDirection: 'row',
        '& > *:first-child': {
            marginBottom: '0!important',
            marginRight: '7px'
        }
    },
    selected: {},
}))
((props) => <Tab disableRipple {...props} />);

export default CustomTab;
