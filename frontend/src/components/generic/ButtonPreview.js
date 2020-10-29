import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(() => ({
  btn: propsStyle => ({
    minWidth: propsStyle.minWidthBtn,
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    boxShadow: '0px 1px 3px #00000033',
    borderRadius: '20px',
    opacity: '1',
    padding: '9px 17px 9px 9px',
    '& .MuiButton-startIcon': {
      margin: 0
    },
    '& .MuiButton-label': {
      justifyContent: 'space-between'
    }
  }),
  iconStartWrapper: propsStyle => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '42px',
    height: '42px',
    background: `${propsStyle.startIconColor} 0% 0% no-repeat padding-box`,
    borderRadius: '12px',
    opacity: '1'
  }),
  iconEndWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '27px',
    height: '27px',
    background: '#EEF5FF 0% 0% no-repeat padding-box',
    opacity: 1,
    borderRadius: '50%'
  },
  iconEnd: {
    color: '#99A0A3',
    fontSize: '31px'
  },
  boxText: {
    margin: '0 12px 0 20px',
    width: '60%'
  },
  title: propsStyle => ({
    textAlign: 'left',
    font: `normal normal bold ${propsStyle.titleSize} Roboto`,
    letterSpacing: '0px',
    color: '#293134',
    opacity: '1'
  }),
  description: {
    textAlign: 'left',
    font: 'normal normal normal 12px/16px Roboto',
    letterSpacing: '0px',
    color: '#99A0A3',
    textTransform: 'capitalize',
    opacity: '1'
  },
  descriptionEndIcon: {
    textAlign: 'left',
    font: 'normal normal normal 14px/19px Roboto',
    letterSpacing: '0px',
    color: '#293134',
    textTransform: 'capitalize',
    opacity: '1'
  }
}));

/**
 * @param startIcon PropTypes.element.isRequired,
 * @param startIconColor PropTypes.string default{'#F88B38}
 * @param title PropTypes.string.isRequired
 * @param titleSize PropTypes.string default{'16px/21px'}
 * @param description PropTypes.string
 * @param minWidthBtn PropTypes.string default{'290px'}
 * @param hasDescriptionEndIcon PropTypes.bool default{false}
 * @param onClick PropTypes.func.isRequired
 */
const ButtonPreview = ({
  startIcon,
  startIconColor,
  title,
  titleSize,
  description,
  minWidthBtn,
  hasDescriptionEndIcon,
  onClick,
  ...otherProps
}) => {
  const classes = useStyles({ titleSize, startIconColor, minWidthBtn });
  const { t } = useTranslation();

  return (
    <Button
      {...otherProps}
      onClick={onClick}
      variant="contained"
      className={classes.btn}
      startIcon={<div className={classes.iconStartWrapper}>{startIcon}</div>}
      endIcon={
        <div className={classes.iconEndWrapper}>
          <ChevronRightIcon className={classes.iconEnd} />
        </div>
      }
    >
      <div className={classes.boxText}>
        {description && <p className={classes.description}>{description}</p>}
        <p className={classes.title}>{title}</p>
      </div>
      {hasDescriptionEndIcon && (
        <div>
          <p className={classes.descriptionEndIcon}>{t('buttonPreviewDescriptionEndIcon')}</p>
        </div>
      )}
    </Button>
  );
};

ButtonPreview.propTypes = {
  startIcon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  titleSize: PropTypes.string,
  startIconColor: PropTypes.string,
  minWidthBtn: PropTypes.string,
  hasDescriptionEndIcon: PropTypes.bool,
  onClick: PropTypes.func.isRequired
};

ButtonPreview.defaultProps = {
  titleSize: '16px/21px',
  startIconColor: '#F88B38',
  minWidthBtn: '290px',
  hasDescriptionEndIcon: true
};

export default ButtonPreview;
