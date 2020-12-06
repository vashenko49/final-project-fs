import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import classNames from 'classnames';

const useStyles = makeStyles({
    container: {
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        borderRadius: '20px',
        boxShadow: '0px 2px 4px #00000033',
        opacity: '1',
        padding: '20px'
    }
})

const Card = ({children, className, ...props}) => {
    const classes = useStyles();
    return <div {...props} className={classNames(classes.container, className)}>{children}</div>;
};

export default Card;
