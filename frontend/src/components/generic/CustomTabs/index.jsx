import React from 'react';
import {withStyles} from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";

const CustomTabs = withStyles({
    flexContainer: {
      justifyContent: 'space-evenly'
    },
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        bottom: 'auto',
        '& > span': {
            width: '100%',
            backgroundColor: '#254A93'
        },
    },
})((props) =>
    <Tabs {...props}
          TabIndicatorProps={{children: <span/>}}
    />);

export default CustomTabs;
