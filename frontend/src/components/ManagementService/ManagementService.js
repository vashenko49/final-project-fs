import React, { useEffect, useState } from 'react';
import ManagementServiceList from './ManagementServiceList/ManagementServiceList';
import ManagementServiceCreate from './ManagementServiceCreate/ManagementServiceCreate';
import SinkIcon from '../CustomIcon/SinkIcon';
import ElectricityIcon from '../CustomIcon/ElectricityIcon';
import GardenIcon from '../CustomIcon/GardenIcon';
import LockIcon from '../CustomIcon/LockIcon';
import AirConditioner from '../CustomIcon/AirConditioner';
import TemperatureIcon from '../CustomIcon/TemperatureIcon';
import GardenWorkIcon from '../CustomIcon/GardenWorkIcon';
import WindowIcon from '../CustomIcon/WindowIcon';
import HouseIcon from '@material-ui/icons/House';
import { useTranslation } from 'react-i18next';
import ManagementServiceSelector from '../../redux/selector/ManagementService';
import { useDispatch, useSelector } from 'react-redux';
import {
  getManagementServices,
  createManagementServices
} from '../../redux/action/ManagementService';

const ManagementService = () => {
  const [selectService, setSelectService] = useState({});
  const [isOpenModalCreate, setIsOpenModalCreate] = useState(false);

  const iconServices = {
    sink: <SinkIcon />,
    electricity: <ElectricityIcon />,
    garden: <GardenIcon />,
    lock: <LockIcon />,
    'air-conditioner': <AirConditioner />,
    temperature: <TemperatureIcon />,
    'garden-work': <GardenWorkIcon />,
    window: <WindowIcon />,
    other: <HouseIcon fontSize="large" htmlColor="#fff" />
  };

  const services = useSelector(ManagementServiceSelector.getServices);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getManagementServices());
  }, [dispatch]);

  const { t } = useTranslation();

  const onCLickSelectService = type => {
    const chooseServiceForCreate = services
      .filter(el => el.type === type)
      .map(el => ({
        iconTitle: t(el.title),
        iconBackgroundColor: el.startIconColor,
        icon: el.startIcon
      }))[0];

    setSelectService(chooseServiceForCreate);
    setIsOpenModalCreate(true);
  };

  const handleOpenModal = () => {
    setIsOpenModalCreate(prevState => !prevState);
  };

  const sendRequest = ({ house, comment, date }) => {
    dispatch(createManagementServices({ house, comment, date }));
  };

  return (
    <>
      <ManagementServiceList
        services={services.map(el => ({
          ...el,
          title: t(el.title),
          startIcon: iconServices[el.type]
        }))}
        onClick={onCLickSelectService}
      />
      {isOpenModalCreate && (
        <ManagementServiceCreate
          isOpen={isOpenModalCreate}
          close={handleOpenModal}
          send={sendRequest}
          {...selectService}
        />
      )}
    </>
  );
};

export default ManagementService;
