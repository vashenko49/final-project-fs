import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  selectBlock: {
    display: 'flex',
    alignItems: 'center'
  },
  nameSelect: {
    font: 'normal normal bold 14px/19px Roboto',
    color: '#293134',
    marginRight: '10px'
  },
  select: {
    color: '#293134'
  },
  selectInput: {
    font: 'normal normal normal 12px/16px Roboto',
    borderRadius: '2px',
    padding: '8px 0 8px 10px',
    textAlign: 'left',
    '&:focus': {
      background: '#FFFFFF 0% 0% no-repeat padding-box',
      borderRadius: 'inherit'
    }
  },
  formControl: {
    minWidth: '99px'
  },
  inputOutline: {
    '& .MuiOutlinedInput-notchedOutline': {
      border: '0.5px solid #00000034'
    }
  },
  formStyle: {
    boxShadow: '0px 2px 4px #00000034',
    background: '#FFFFFF 0% 0% no-repeat padding-box'
  },
  formStyleDropDown: {
    borderRadius: '0 0 2px 2px'
  },
  option: {
    font: 'normal normal normal 12px/16px Roboto',
    color: '#99A0A3',
    padding: '4px 0 4px 10px'
  },
  menuList: {
    padding: '4px 0 4px 0'
  }
}));

/**
 *
 * @param nameSelect - PropTypes.string.isRequired
 * @param optionValues - PropTypes.array.isRequired
 * @param callback - the function takes one argument to return the item that was selected
 * @param error - PropTypes.bool default{false}
 */
const SelectView = ({ nameSelect, optionValues, callback, error, ...other }) => {
  const classes = useStyles();
  const [field, setField] = React.useState('');

  const handleChange = event => {
    setField(event.target.value);
    callback(event.target.value);
  };

  return (
    <div className={classes.selectBlock}>
      <p className={classes.nameSelect}>{nameSelect}</p>
      <FormControl
        error={error}
        variant="outlined"
        className={classNames(classes.formControl, classes.inputOutline)}
      >
        <Select
          {...other}
          className={classNames(classes.select, classes.formStyle)}
          MenuProps={{
            classes: {
              paper: classNames(classes.formStyle, classes.formStyleDropDown),
              list: classes.menuList
            },
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'left'
            },
            transformOrigin: {
              vertical: 'top',
              horizontal: 'left'
            },
            getContentAnchorEl: null
          }}
          value={field}
          onChange={handleChange}
          inputProps={{
            name: 'age',
            id: 'outlined-age-native-simple',
            classes: {
              select: classes.selectInput
            }
          }}
        >
          {optionValues.map((val, i) => (
            <MenuItem className={classes.option} value={val} key={i}>
              {val}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

SelectView.defaultProps = {
  error: false
};

SelectView.propTypes = {
  error: PropTypes.bool,
  optionValues: PropTypes.array.isRequired,
  nameSelect: PropTypes.string.isRequired,
  callback: function(props, propName, componentName) {
    let fn = props[propName];
    if (fn.constructor.name !== 'Function' || fn.length !== 1) {
      return new Error(
        `component ${componentName} has required 1 arg in ${propName} who choose in select`
      );
    }
  }
};

export default SelectView;
