import makeStyles from '@material-ui/core/styles/makeStyles';
import { useTranslation } from 'react-i18next';
import React, { useEffect } from 'react';
import HouseIcon from '@material-ui/icons/House';
import CallMadeIcon from '@material-ui/icons/CallMade';
import IconButton from '@material-ui/core/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { getHouses } from '@redux/action/QuickAccess';
import QuickAccessSelector from '@redux/selector/QuickAccessSelector';
import PropTypes from 'prop-types';
import ButtonPreview from '@genericComponents/ButtonPreview';

const useStyles = makeStyles(() => ({
  title: {
    margin: '20px 136px 0 136px',
    font: 'normal normal medium 18px/24px Roboto',
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: -0.09,
    color: '#254A93',
    textTransform: 'capitalize'
  },
  subtitle: {
    margin: '5px 125px 0 125px',
    font: 'normal normal normal 18px/24px Roboto',
    letterSpacing: 0,
    color: '#99A0A3',
    fontSize: 12,
    opacity: 1
  },
  cardsContainer: {
    width: 356,
    height: 130,
    margin: '22px 30px 0 30px'
  },
  vacant: {
    marginTop: 10
  },
  btnArrow: {
    width: 20,
    height: 20,
    marginLeft: 10,
    borderRadius: '50%',
    borderColor: '#FFFFF',
    backgroundColor: '#254A93'
  },
  iconArrow: {
    fontSize: 12,
    color: '#FFFFFF'
  }
}));

const SideQuickAccess = ({ onClick }) => {
  const classes = useStyles();
  const houses = useSelector(QuickAccessSelector.getHouses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHouses());
  }, [dispatch]);

  const { t } = useTranslation();

  const icon = <HouseIcon fontSize="large" htmlColor="#fff" />;
  return (
    <div>
      <div className={classes.title}>{t('drawerQuickAccess')}</div>
      <div className={classes.subtitle}>
        {t('drawerQuickAccessShow')}
        <IconButton onClick={onClick} className={classes.btnArrow} aria-label="arrow">
          <CallMadeIcon className={classes.iconArrow} />
        </IconButton>
      </div>
      <div className={classes.cardsContainer}>
        <ButtonPreview
          widthBtn="356px"
          hasDescriptionEndIcon={true}
          description={t('drawerQuickAccessOwnHouses')}
          title={houses.all}
          startIcon={icon}
          startIconColor="#00D0FF"
          onClick={onClick}
        />
        <div className={classes.vacant}>
          <ButtonPreview
            widthBtn="356px"
            hasDescriptionEndIcon={true}
            description={t('drawerQuickAccessVacantHouses')}
            title={houses.vacant}
            startIcon={icon}
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  );
};

SideQuickAccess.propTypes = {
  onClick: PropTypes.func
};

export default SideQuickAccess;
