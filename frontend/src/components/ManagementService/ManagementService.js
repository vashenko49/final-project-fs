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
import ManagementServiceSelector from '../../redux/selector/ManagementServiceSelector';
import { useDispatch, useSelector } from 'react-redux';
import {
  getManagementServiceTypes,
  createManagementService
} from '../../redux/action/ManagementService';
import moment from 'moment';

const ManagementService = () => {
  const [selectServiceType, setSelectServiceType] = useState({});
  const [isOpenModalCreate, setIsOpenModalCreate] = useState(false);

  const iconServiceTypes = {
    sink: {
      icon: <SinkIcon />,
      iconColor: '#F88B38'
    },
    electricity: {
      icon: <ElectricityIcon />,
      iconColor: '#4AD584'
    },
    garden: {
      icon: <GardenIcon />,
      iconColor: '#00D0FF'
    },
    lock: {
      icon: <LockIcon />,
      iconColor: '#F88B38'
    },
    'air-conditioner': {
      icon: <AirConditioner />,
      iconColor: '#4AD584'
    },
    temperature: {
      icon: <TemperatureIcon />,
      iconColor: '#00D0FF'
    },
    'garden-work': {
      icon: <GardenWorkIcon />,
      iconColor: '#F88B38'
    },
    window: {
      icon: <WindowIcon />,
      iconColor: '#4AD584'
    },
    other: {
      icon: <HouseIcon fontSize="large" htmlColor="#fff" />,
      iconColor: '#00D0FF'
    }
  };

  const serviceTypes = useSelector(ManagementServiceSelector.getServiceTypes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getManagementServiceTypes());
  }, [dispatch]);

  const { t } = useTranslation();

  const onCLickSelectServiceType = idTypeService => {
    const chooseServiceTypeForCreate = serviceTypes.content
      .filter(el => el.id === idTypeService)
      .map(el => ({
        idTypeService: el.id,
        iconTitle: t(el.name),
        iconBackgroundColor: iconServiceTypes[el.type].iconColor,
        icon: iconServiceTypes[el.type].icon
      }))[0];

    setSelectServiceType(chooseServiceTypeForCreate);
    setIsOpenModalCreate(true);
  };

  const handleOpenModal = () => {
    setIsOpenModalCreate(prevState => !prevState);
  };

  const sendRequest = ({ house, comment, date }) => {
    dispatch(
      createManagementService({
        houseId: house,
        typeId: selectServiceType.idTypeService,
        description: comment,
        deadline: moment(date).format('YYYY-MM-DD HH:MM:SS')
      })
    );
  };

  return (
    <>
      <ManagementServiceList
        services={serviceTypes.content
          .filter(elf => iconServiceTypes.hasOwnProperty(elf.type))
          .map(el => ({
            id: el.id,
            title: t(el.name),
            startIcon: iconServiceTypes[el.type].icon,
            startIconColor: iconServiceTypes[el.type].iconColor
          }))}
        onClick={onCLickSelectServiceType}
      />
      {isOpenModalCreate && (
        <ManagementServiceCreate
          isOpen={isOpenModalCreate}
          close={handleOpenModal}
          send={sendRequest}
          {...selectServiceType}
        />
      )}
    </>
  );
};

export default ManagementService;
