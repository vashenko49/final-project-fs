import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Tab from '@material-ui/core/Tab';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import Tabs from '@material-ui/core/Tabs';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    maxWidth: 500,
    background: 'none',
    boxShadow: 'none',
    fontSize: '1.5rem;'
  },
  tabs: {
    flexGrow: 1,
    padding: '0 10%'
  },
  iconLabelWrapper: {
    flexDirection: 'row'
  }
});

const iconStyle = {
  marginBottom: 0
};

const SettingsSubNavBar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="subNavBar">
      {/* <Tabs */}
      {/*    className={classes.tabs} */}
      {/*    value={value} */}
      {/*    onChange={handleChange} */}
      {/*    variant="fullWidth" */}
      {/*    TabIndicatorProps={{ */}
      {/*        style: { */}
      {/*            display:"none", */}
      {/*        } */}
      {/*    }} */}
      {/*    textColor="inherit" */}
      {/*    aria-label="icon label tabs example" */}
      {/* > */}
      {/*    <Tab */}
      {/*        classes={{ */}
      {/*            wrapper: classes.iconLabelWrapper */}
      {/*        }} */}
      {/*        icon={<DesktopMacIcon style={iconStyle} />} */}
      {/*        label="OWERVIEW" */}
      {/*        component={Link} */}
      {/*        to="/" */}
      {/*    /> */}
      {/*    <Tab */}
      {/*        classes={{ */}
      {/*            wrapper: classes.iconLabelWrapper */}
      {/*        }} */}
      {/*        icon={<HomeWorkIcon style={iconStyle} />} */}
      {/*        label="HOUSES" */}
      {/*        component={Link} */}
      {/*        to="/" */}
      {/*    /> */}
      {/*    <Tab */}
      {/*        classes={{ */}
      {/*            wrapper: classes.iconLabelWrapper */}
      {/*        }} */}
      {/*        icon={<FolderSpecialIcon style={iconStyle} />} */}
      {/*        label="DOCUMENTS" */}
      {/*        component={Link} */}
      {/*        to="/" */}
      {/*    /> */}
      {/*    <Tab */}
      {/*        classes={{ */}
      {/*            wrapper: classes.iconLabelWrapper */}
      {/*        }} */}
      {/*        icon={<EqualizerIcon style={iconStyle} />} */}
      {/*        label="STATISTICS" */}
      {/*        component={Link} */}
      {/*        to="/" */}
      {/*    /> */}
      {/* </Tabs> */}
    </div>
  );
};

export default SettingsSubNavBar;
