import React, { useEffect, useState } from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CustomTabs from '../../../../components/generic/CustomTabs';
import CustomTab from '../../../../components/generic/CustomTab';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  headerTop: {
    '& .MuiTab-wrapper': {
      fontSize: '18px'
    }
  }
}));

const HeaderNavBar = () => {
  const location = useLocation();
  const [value, setValue] = useState(0);
  const { t } = useTranslation();
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setValue(location.pathname.includes('/settings') ? 1 : 0);
  }, [location.pathname]);

  return (
    <CustomTabs
      value={value}
      onChange={handleChange}
      hasIndicator={false}
      className={classes.headerTop}
    >
      <CustomTab
        icon={<DashboardIcon />}
        label={t('headerMainMenuHomeTab')}
        component={Link}
        to="/"
      />
      <CustomTab
        icon={<SettingsIcon />}
        label={t('headerMainMenuSettingsTab')}
        component={Link}
        to="/settings"
      />
    </CustomTabs>
  );
};

export default HeaderNavBar;
