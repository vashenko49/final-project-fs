import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useTranslation } from 'react-i18next';
import HouseIcon from '@material-ui/icons/House';
import ButtonPreview from '../generic/ButtonPreview';
import SinkIcon from '../CustomIcon/SinkIcon';
import ElectricityIcon from '../CustomIcon/ElectricityIcon';
import GardenIcon from '../CustomIcon/GardenIcon';
import LockIcon from '../CustomIcon/LockIcon';
import AirConditioner from '../CustomIcon/AirConditioner';
import TemperatureIcon from '../CustomIcon/TemperatureIcon';
import GardenWorkIcon from '../CustomIcon/GardenWorkIcon';
import WindowIcon from '../CustomIcon/WindowIcon';

const useStyles = makeStyles(() => ({
  title: {
    textAlign: 'left',
    font: 'normal normal bold 18px/24px Roboto',
    letterSpacing: '0px',
    color: '#293134',
    opacity: '1',
    marginBottom: '20px'
  },
  listItem: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
    gridGap: '10px'
  }
}));

const ManagementServiceList = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div>
      <p className={classes.title}>{t('managementServiceListTitle')}</p>
      <div className={classes.listItem}>
        <ButtonPreview
          startIcon={<SinkIcon />}
          startIconColor='#F88B38'
          title={t('managementServiceListSink')}
          onClick={() => {}}
        />
        <ButtonPreview
          startIcon={<ElectricityIcon />}
          startIconColor='#4AD584'
          title={t('managementServiceListElectricity')}
          onClick={() => {}}
        />
        <ButtonPreview
          startIcon={<GardenIcon />}
          startIconColor='#00D0FF'
          title={t('managementServiceListGarden')}
          onClick={() => {}}
        />
        <ButtonPreview
          startIcon={<LockIcon />}
          startIconColor='#F88B38'
          title={t('managementServiceListLock')}
          onClick={() => {}}
        />
        <ButtonPreview
          startIcon={<AirConditioner />}
          startIconColor='#4AD584'
          title={t('managementServiceListAirConditioner')}
          onClick={() => {}}
        />
        <ButtonPreview
          startIcon={<TemperatureIcon />}
          startIconColor='#00D0FF'
          title={t('managementServiceListTemperature')}
          onClick={() => {}}
        />
        <ButtonPreview
          startIcon={<GardenWorkIcon />}
          startIconColor='#F88B38'
          title={t('managementServiceListGardenWork')}
          onClick={() => {}}
        />
        <ButtonPreview
          startIcon={<WindowIcon />}
          startIconColor='#4AD584'
          title={t('managementServiceListWindow')}
          onClick={() => {}}
        />
        <ButtonPreview
          startIcon={<HouseIcon fontSize='large' htmlColor='#fff' />}
          startIconColor='#00D0FF'
          title={t('managementServiceListOther')}
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default ManagementServiceList;
