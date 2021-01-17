import React from 'react';
import {withStyles} from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";

const CustomTabs = withStyles({
    root: {
        minHeight: 'unset'
    },
    flexContainer: {
        justifyContent: 'space-evenly'
    },
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
        '& > span': {
            width: '100%',
            backgroundColor: '#254A93'
        },
    },
})(({hasIndicator, ...props}) =>
    <Tabs {...props}
          TabIndicatorProps={hasIndicator
              ? {children: <span/>}
              : {style: {display: 'none'}}
          }
    />);

CustomTabs.defaultProps = {
    hasIndicator: true
}

export default CustomTabs;
