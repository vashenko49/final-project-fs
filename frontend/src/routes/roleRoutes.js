import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import React from 'react';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import FolderSpecialIcon from '@material-ui/icons/FolderSpecial';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import ClientDetails from '../pages/Dashboard/ClientDetails';
import Houses from '../pages/Dashboard/Houses';

const Component = () => {
  return <div>Component</div>;
};

export default [
  {
    path: '/',
    exact: true,
    hasTab: true,
    label: 'headerSubMenuOverviewTab',
    icon: <DesktopMacIcon />,
    component: Component,
    roles: ['CLIENT', 'MANAGER', 'ADMIN']
  },
  {
    path: '/clients',
    exact: true,
    hasTab: true,
    label: 'headerSubMenuClientsTab',
    icon: <PermContactCalendarIcon />,
    component: Component,
    roles: ['MANAGER', 'ADMIN']
  },
  {
    path: '/houses',
    hasTab: true,
    label: 'headerSubMenuHousesTab',
    icon: <HomeWorkIcon />,
    component: Houses,
    roles: ['CLIENT']
  },
  {
    path: '/clients/:id',
    hasTab: false,
    component: ClientDetails,
    roles: ['MANAGER', 'ADMIN']
  },
  {
    path: '/documents',
    hasTab: true,
    label: 'headerSubMenuDocumentsTab',
    icon: <FolderSpecialIcon />,
    component: Component,
    roles: ['CLIENT', 'MANAGER', 'ADMIN']
  },
  {
    path: '/finances',
    hasTab: true,
    label: 'headerSubMenuFinancesTab',
    icon: <LocalAtmIcon />,
    component: Component,
    roles: ['MANAGER', 'ADMIN']
  },
  {
    path: '/rents',
    hasTab: true,
    label: 'headerSubMenuRentsTab',
    icon: <EqualizerIcon />,
    component: Component,
    roles: ['MANAGER', 'ADMIN']
  },
  {
    path: '/statistics',
    hasTab: true,
    label: 'headerSubMenuStatisticsTab',
    icon: <EqualizerIcon />,
    component: Component,
    roles: ['CLIENT']
  },
  {
    path: '/broadcasts',
    hasTab: true,
    label: 'headerSubMenuBroadcastsTab',
    icon: <CameraAltIcon />,
    component: Component,
    roles: ['CLIENT', 'MANAGER', 'ADMIN']
  }
];
