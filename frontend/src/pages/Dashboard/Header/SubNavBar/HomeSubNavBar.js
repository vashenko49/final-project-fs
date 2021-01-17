import React, { useEffect, useState } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import CurrentUserSelector from '../../../../redux/selector/CurrentUserSelector';
import roleRoutes from '../../../../routes/roleRoutes';
import CustomTab from '../../../../components/generic/CustomTab';
import CustomTabs from '../../../../components/generic/CustomTabs';

const useStyles = makeStyles({
  subNavBar: {
    flex: '0 0 100%'
  },
  closedSubNavBar: {
    display: 'none'
  }
});

const HomeSubNavBar = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const location = useLocation();

  const profile = useSelector(CurrentUserSelector.getProfile);
  const getRoutes = roleRoutes.filter(
    e => e.hasTab && e.roles.includes(profile ? profile.role : '')
  );
  const [value, setValue] = useState();

  const headerOpened = useSelector(state => state.Header.headerOpen);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    let getIndex = getRoutes.findIndex(e => e.path === location.pathname);
    setValue(getIndex >= 0 ? getIndex : 0);
  }, [getRoutes, location.pathname]);

  return (
    <div className={headerOpened ? classes.subNavBar : classes.closedSubNavBar}>
      <CustomTabs value={value} onChange={handleChange}>
        {getRoutes.map(tabInfo => (
          <CustomTab
            icon={tabInfo.icon}
            label={t(tabInfo.label)}
            component={Link}
            to={tabInfo.path}
            key={tabInfo.path}
          />
        ))}
      </CustomTabs>
    </div>
  );
};
export default HomeSubNavBar;
