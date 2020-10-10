import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Tab from '@material-ui/core/Tab';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import Tabs from '@material-ui/core/Tabs';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

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

const HomeSubNavBar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const headerOpened = useSelector(state => state.Header.headerOpen);

  const { t } = useTranslation();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={headerOpened ? 'subNavBar' : 'closedSubNavBar'}>
      <Tabs
        className={classes.tabs}
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        TabIndicatorProps={{
          style: {
            display: 'none'
          }
        }}
        textColor="inherit"
        aria-label="icon label tabs example"
      >
        <Tab
          classes={{
            wrapper: classes.iconLabelWrapper
          }}
          icon={<DesktopMacIcon style={iconStyle} />}
          label={t('headerSubMenuOverviewTab')}
          component={Link}
          to="/"
        />
        <Tab
          classes={{
            wrapper: classes.iconLabelWrapper
          }}
          icon={<HomeWorkIcon style={iconStyle} />}
          label={t('headerSubMenuHousesTab')}
          component={Link}
          to="/"
        />
        <Tab
          classes={{
            wrapper: classes.iconLabelWrapper
          }}
          icon={<FolderSpecialIcon style={iconStyle} />}
          label={t('headerSubMenuDocumentsTab')}
          component={Link}
          to="/"
        />
        <Tab
          classes={{
            wrapper: classes.iconLabelWrapper
          }}
          icon={<EqualizerIcon style={iconStyle} />}
          label={t('headerSubMenuStatisticsTab')}
          component={Link}
          to="/"
        />
      </Tabs>
    </div>
  );
};

export default HomeSubNavBar;
