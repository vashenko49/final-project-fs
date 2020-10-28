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
    padding: '8px 0 8px 10px',
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
      borderColor: '#00000034',
      borderWidth: '0px'
    },
    '& .MuiOutlinedInput-root.Mui-focused fieldset': {
      borderColor: '#00000034',
      borderWidth: '0px'
    }
  },
  formStyle: {
    boxShadow: '0px 2px 4px #00000034',
    background: '#FFFFFF 0% 0% no-repeat padding-box'
  },
  formStyleDropDown: {
    borderRadius: '0 0 4px 4px'
  },
  option: {
    font: 'normal normal normal 12px/16px Roboto',
    color: '#99A0A3',
    padding: '4px 0 4px 10px'
  },
  menuList: {
    padding: '4px 0 4px 0'
  },
  openSelect: {
    borderRadius: '4px 4px 0 0'
  },
  closeSelect: {
    borderRadius: '4px'
  }
}));

/**
 *
 * @param nameSelect - PropTypes.string.isRequired
 * @param optionValues - PropTypes.array.isRequired
 * @param callback - the function takes one argument to return the item that was selected
 */
const SelectView = ({ nameSelect, optionValues, callback }) => {
  const classes = useStyles();
  const [field, setField] = React.useState('');
  const [openSelect, setOpenSelect] = React.useState(false);

  const handleChange = event => {
    setField(event.target.value);
    callback(event.target.value);
  };

  const handleStyleOpen = () => {
    setOpenSelect(prevState => !prevState);
  };

  return (
    <div className={classes.selectBlock}>
      <p className={classes.nameSelect}>{nameSelect}</p>
      <FormControl
        variant="outlined"
        className={classNames(classes.formControl, classes.inputOutline)}
      >
        <Select
          className={classNames(
            classes.select,
            classes.formStyle,
            openSelect ? classes.openSelect : classes.closeSelect
          )}
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
          onOpen={handleStyleOpen}
          onClose={handleStyleOpen}
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

SelectView.propTypes = {
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
