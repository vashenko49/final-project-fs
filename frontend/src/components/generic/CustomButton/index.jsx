import React from 'react';
import {Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import classNames from "classnames";

const useStyles = makeStyles(() => ({
    root: propsStyle => ({
        textTransform: 'none',
        width: propsStyle.width,
        borderRadius: '5px',
        fontSize: propsStyle.fontSize
    }),
}));

const CustomButton = ({
                          children,
                          fontSize,
                          backgroundColor,
                          variant,
                          width,
                          fullWidth = false,
                          color = 'primary',
                          className,
                          ...otherProps
                      }) => {
    const classes = useStyles({
        width: fullWidth ? '100%' : width || '100px',
        fontSize
    });
    return (
        <Button
            variant={variant || (color === 'secondary' ? 'outlined' : 'contained')}
            color={color}
            className={classNames(classes.root, className)}
            fullWidth={fullWidth}
            {...otherProps}
        >
            {children}
        </Button>
    );
};

export default CustomButton;
