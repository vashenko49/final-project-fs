import React from 'react';
import PropTypes from 'prop-types';
import {DatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import EventIcon from "@material-ui/icons/Event";

import 'moment/locale/ru';
import 'moment/locale/uk';
import moment from "moment";
import MomentUtils from "@date-io/moment";
import {useTranslation} from "react-i18next";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(()=>({
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
            cursor: 'pointer'
        },
        '& .MuiOutlinedInput-input': {
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
    }
}))

const CustomDatePicker = ({value, onChange})=>{
    const classes = useStyles();
    const {t} = useTranslation();

    return (
        <MuiPickersUtilsProvider
            libInstance={moment}
            utils={MomentUtils}
            locale={t('dataPickerLocal')}
        >
            <DatePicker
                okLabel={t('dataPickerLocalOk')}
                cancelLabel={t('dataPickerLocalCancel')}
                todayLabel={t('dataPickerLocalToday')}
                className={classes.chooseFilterDateCalendar}
                inputVariant="outlined"
                format="DD/MM/yyyy"
                value={value}
                onChange={onChange}
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
    )
}

CustomDatePicker.propTypes = {
    value: PropTypes.instanceOf(Date).isRequired,
    onChange: PropTypes.func.isRequired
}

export default CustomDatePicker;