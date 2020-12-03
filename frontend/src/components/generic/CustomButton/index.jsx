import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: propsStyle => ({
    textTransform: 'none',
    width: propsStyle.width,
    borderRadius: '5px',
    fontSize: propsStyle.fontSize
  })
}));

const CustomButton = ({
  children,
  fontSize,
  variant,
  width = '100px',
  fullWidth = false,
  color = 'primary',
  ...otherProps
}) => {
  const classes = useStyles({ width, fontSize });
  return (
    <Button
      variant={variant || (color === 'secondary' ? 'outlined' : 'contained')}
      color={color}
      className={classes.root}
      fullWidth={fullWidth}
      {...otherProps}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
