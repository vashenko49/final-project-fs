import React, { useState } from 'react';
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import CloseIcon from '@material-ui/icons/Close';
import { useTranslation } from 'react-i18next';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import SelectView from '../../generic/SelectView';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import MomentUtils from '@date-io/moment';
import moment from 'moment';
import 'moment/locale/ru';
import 'moment/locale/uk';
import InputAdornment from '@material-ui/core/InputAdornment';
import EventIcon from '@material-ui/icons/Event';

const useStyles = makeStyles(() => ({
  dialog: {
    '& .MuiPaper-root': {
      background: '#FFFFFF 0% 0% no-repeat padding-box',
      padding: '20px'
    },
    '& .MuiPaper-outlined': {
      border: '1px solid #707070'
    },
    '& .MuiPaper-rounded': {
      borderRadius: '20px'
    },
    '& .MuiDialogContent-root:first-child': {
      padding: 0
    }
  },
  dialogContent: {
    padding: 0
  },
  wrapperIconClose: {
    padding: 0
  },
  iconClose: {
    float: 'right',
    padding: 0,
    color: '#6E7375',
    '& .MuiSvgIcon-root': {
      fontSize: '15px'
    }
  },
  wrapperContent: {
    padding: '30px 45px',
    textAlign: 'center'
  },
  contentText: {
    padding: '0 85px',
    marginBottom: '20px'
  },

  mainTitle: {
    font: 'normal normal bold 21px/28px Roboto',
    letterSpacing: '0px',
    color: '#293134',
    opacity: '1',
    marginBottom: '15px'
  },
  typeService: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '15px'
  },
  typeServiceIcon: propsStyle => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '42px',
    height: '42px',
    background: `${propsStyle.iconBackgroundColor} 0% 0% no-repeat padding-box`,
    borderRadius: '12px',
    opacity: '1',
    marginRight: '20px'
  }),
  typeServiceTitle: {
    textAlign: 'left',
    font: 'normal normal bold 16px/21px Roboto',
    letterSpacing: '0px',
    color: '#293134',
    textTransform: 'capitalize',
    opacity: '1'
  },
  description: {
    textAlign: 'center',
    font: 'normal normal normal 18px/24px Roboto',
    letterSpacing: '0px',
    color: '#293134',
    opacity: '1',
    marginBottom: '20px'
  },
  help: {
    textAlign: 'center',
    font: 'normal normal normal 14px/19px Roboto',
    letterSpacing: '0px',
    color: '#6E7375',
    opacity: '1'
  },
  chooseFilter: {
    marginBottom: '10px',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  chooseFilterDate: {
    marginRight: '44px',
    display: 'flex',
    alignItems: 'center'
  },
  chooseFilterDateTitle: {
    textAlign: 'left',
    font: 'normal normal bold 16px/20px Roboto',
    letterSpacing: '0px',
    color: '#293134',
    opacity: '1',
    marginRight: '16px'
  },
  chooseFilterDateCalendar: {
    '& .MuiOutlinedInput-root': {
      borderRadius: '2px'
    },
    '& .MuiOutlinedInput-notchedOutline': {
      boxShadow: '0px 2px 4px #00000029',
      border: '0.5px solid #00000029'
    },
    '& .MuiInputBase-root': {
      textAlign: 'left',
      font: 'normal normal normal 12px Roboto',
      letterSpacing: '0px',
      color: '#293134',
      opacity: '1',
      cursor: 'pointer'
    },
    '& .MuiOutlinedInput-input': {
      marginRight: '32px',
      padding: 0,
      height: 'auto',
      cursor: 'pointer'
    },
    '& .MuiInputAdornment-positionEnd': {
      marginLeft: 0
    },
    '& .MuiOutlinedInput-adornedEnd': {
      padding: '8px 10px',
      cursor: 'pointer'
    },
    '& .MuiIconButton-root': {
      padding: 0
    }
  },
  comment: {
    background: '#F7FAFF 0% 0% no-repeat padding-box',
    '& .MuiInputBase-root': {
      borderRadius: '20px',
      font: 'normal normal normal 14px/20px Roboto',
      color: '#6E7375'
    },
    '& .MuiOutlinedInput-multiline': {
      padding: '15px'
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: '0.5px solid #B1B4BA'
    }
  },
  wrapperActions: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginBottom: '30px',
    padding: 0
  },
  btnDecline: {
    border: '1px solid #293134',
    borderRadius: '10px',
    opacity: '1',
    minWidth: '240px',
    padding: '15px',
    font: 'normal normal bold 21px/31px Roboto',
    letterSpacing: 0,
    color: '#293134',
    textTransform: 'inherit'
  },
  btnAccept: {
    border: '1px solid transparent',
    background: '#254A93 0% 0% no-repeat padding-box',
    borderRadius: '10px',
    opacity: 1,
    minWidth: '240px',
    padding: '15px',
    font: 'normal normal bold 21px/31px Roboto',
    letterSpacing: 0,
    color: '#FFFFFF',
    textTransform: 'inherit',
    '&:hover': {
      textDecoration: 'none',
      border: '1px solid #254A93',
      backgroundColor: 'transparent',
      color: '#254A93'
    }
  }
}));

/**
 *
 * @param iconBackgroundColor PropTypes.string.isRequired
 * @param icon PropTypes.element.isRequired
 * @param iconTitle PropTypes.string.isRequired
 * @param send PropTypes.func.isRequired input 1 arg - obj is all filled fields {date, house, comment}
 * @param isOpen PropTypes.bool.isRequired
 * @param close PropTypes.func.isRequired
 * @param idTypeService
 * @param other input other param for spread
 */
const ManagementServiceCreate = ({
  iconBackgroundColor,
  icon,
  iconTitle,
  send,
  isOpen,
  close,
  idTypeService,
  ...other
}) => {
  const [errorComment, setErrorComment] = useState(false);
  const [errorHouse, setErrorHouse] = useState(false);
  const [date, setDate] = useState(new Date());
  const [comment, setComment] = useState();
  const [house, setHouse] = useState();
  const classes = useStyles({ iconBackgroundColor });
  const { t } = useTranslation();

  const handleChangeComment = event => {
    setComment(event.target.value);
  };

  const sendRequest = () => {
    !comment ? setErrorComment(true) : setErrorComment(false);
    !house ? setErrorHouse(true) : setErrorHouse(false);

    if (comment && house) {
      send({
        date,
        house,
        comment,
        idTypeService
      });
    }
  };

  return (
    <Dialog
      {...other}
      className={classes.dialog}
      maxWidth="md"
      open={isOpen}
      onClose={close}
      aria-labelledby="responsive-dialog-title"
      PaperProps={{
        variant: 'outlined'
      }}
    >
      <DialogContent className={classes.dialogContent}>
        <div>
          <IconButton onClick={close} className={classes.iconClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <div className={classes.wrapperContent}>
          <div className={classes.contentText}>
            <div className={classes.mainTitle}>{t('createManagementServiceTitle')}</div>
            <div className={classes.typeService}>
              <div className={classes.typeServiceIcon}>{icon}</div>
              <div className={classes.typeServiceTitle}>{iconTitle}</div>
            </div>
            <div className={classes.description}>{t('createManagementServiceDescription')}</div>
            <div className={classes.help}>{t('createManagementServiceHelp')}</div>
          </div>
          <form noValidate autoComplete="off">
            <div className={classes.chooseFilter}>
              <div className={classes.chooseFilterDate}>
                <p className={classes.chooseFilterDateTitle}>
                  {t('createManagementServiceChooseDate')}
                </p>
                <MuiPickersUtilsProvider
                  libInstance={moment}
                  utils={MomentUtils}
                  locale={t('dataPickerLocal')}
                >
                  <DateTimePicker
                    okLabel={t('dataPickerLocalOk')}
                    cancelLabel={t('dataPickerLocalCancel')}
                    todayLabel={t('dataPickerLocalToday')}
                    className={classes.chooseFilterDateCalendar}
                    inputVariant="outlined"
                    value={date}
                    disablePast
                    onChange={setDate}
                    showTodayButton
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton>
                            <EventIcon />
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                  />
                </MuiPickersUtilsProvider>
              </div>
              <div>
                <SelectView
                  error={errorHouse}
                  nameSelect={t('createManagementServiceChooseHouse')}
                  optionValues={[1, 2, 3]}
                  callback={setHouse}
                />
              </div>
            </div>
            <TextField
              error={errorComment}
              value={comment}
              onChange={handleChangeComment}
              className={classes.comment}
              fullWidth={true}
              id="outlined-multiline-static"
              multiline
              rows={6}
              variant="outlined"
              placeholder={`${t('createManagementServicePlaceholderComment')}...`}
            />
          </form>
        </div>
      </DialogContent>
      <DialogActions className={classes.wrapperActions} disableSpacing={true}>
        <Button className={classes.btnDecline} onClick={close} variant="outlined" autoFocus>
          {t('createManagementServiceDecline')}
        </Button>
        <Button className={classes.btnAccept} onClick={sendRequest} variant="outlined" autoFocus>
          {t('createManagementServiceAccept')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

ManagementServiceCreate.propTypes = {
  iconBackgroundColor: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  idTypeService: PropTypes.number.isRequired,
  icon: PropTypes.element.isRequired,
  iconTitle: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
  send: function(props, propName, componentName) {
    let fn = props[propName];
    if (fn.constructor.name !== 'Function' || fn.length !== 1) {
      return new Error(
        `component ${componentName} has required 1 arg in ${propName} - obj is all filled fields {date, house, comment}`
      );
    }
  }
};

export default ManagementServiceCreate;
