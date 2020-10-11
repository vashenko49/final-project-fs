import * as React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// EXAMPLE of tabList prop that you need to pass here
// const tabList = [
//   { id: 1, label: 'headerSubMenuOverviewTab', to: '/' },
//   { id: 2, label: 'headerSubMenuHousesTab', to: '/' },
//   { id: 3, label: 'headerSubMenuDocumentsTab', to: '/' }
// ];

const TabsComponent = ({ tabList }) => {
  const [value, setValue] = React.useState(0);

  const { t } = useTranslation();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      variant="fullWidth"
      textColor="inherit"
      aria-label="label tabs with localization"
    >
      {tabList.map(tab => (
        <Tab key={tab.id} label={t(tab.label)} component={Link} to={tab.to} />
      ))}
    </Tabs>
  );
};

export default TabsComponent;
