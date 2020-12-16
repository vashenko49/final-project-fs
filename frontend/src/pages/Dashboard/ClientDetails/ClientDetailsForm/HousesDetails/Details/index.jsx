import React, {useEffect, useState} from "react";
import Grid from "@material-ui/core/Grid";
import {TextField} from "@material-ui/core";
import CustomButton from "@components/generic/CustomButton";
import ChatIcon from "@material-ui/icons/Chat";
import SaveIcon from "@material-ui/icons/Save";
import EditIcon from "@material-ui/icons/Edit";
import {useTranslation} from "react-i18next";
import PauseIcon from "@material-ui/icons/Pause";
import StopIcon from "@material-ui/icons/Stop";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import makeStyles from "@material-ui/core/styles/makeStyles";
import PropTypes from "prop-types";

const useStyles = makeStyles({
    detailsId: {
        font: 'normal normal bold 24px Roboto',
        color: '#9DC2FF',
        marginBottom: '30px'
    },
    detailsInfo: {
        marginBottom: '35px'
    },
    detailsInfoTitle: {
        textAlign: 'left',
        font: 'normal normal bold 16px Roboto',
        color: '#0D0D0D'
    },
    detailsInfoDescription: {
        textAlign: 'left',
        font: 'normal normal normal 16px Roboto',
        color: '#6E7375'
    },
    edit: {
        width: "115px",
        '&:hover': {
            backgroundColor: '#254A93',
            color: '#FFFFFF',
        }
    },
    status: {
        display: 'flex',
        alignItems: 'center',
        '&>.MuiSvgIcon-root': {
            marginLeft: '10px',
            padding: 0
        }
    },
    detailsBtns: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    }
})

const Details = ({status, area, address, type}) => {
    const classes = useStyles();
    const {t} = useTranslation();
    const [isEdit, setIsEdit] = useState(false);
    const [value, setValue] = useState({
        status: '',
        area: '',
        address: '',
        type: ''
    })

    useEffect(() => {
        setValue({status, area, address, type});
    }, [status, area, address, type])

    const handleChangeIsEdit = () => {
        setIsEdit(prevState => !prevState);
    }

    const handleChangeValue = (e) => {
        e.persist();
        setValue(prevState => ({...prevState, [e.target.id]: e.target.value}))
    }

    const statusesIcon = {
        free: <PauseIcon htmlColor='#4AD584'/>,
        stop: <StopIcon htmlColor='#FA505D'/>,
        shipping: <LocalShippingIcon htmlColor='#F88B38'/>
    }
    return (
        <>
            <div className={classes.detailsId}>ID 00170</div>
            <Grid container spacing={2} className={classes.detailsInfo}>
                <Grid item xs={12} container>
                    <Grid item md={5} xs={12}>
                        <div className={classes.detailsInfoTitle}>{t('housesDetailsStatusTitle')}</div>
                    </Grid>
                    <Grid item md={7} xs={12}>
                        <div className={classes.detailsInfoDescription}>
                            {isEdit
                                ? <TextField
                                    id='status'
                                    variant="outlined"
                                    defaultValue={value.status}
                                    onChange={handleChangeValue}
                                />
                                : (
                                    <div className={classes.status}>
                                        <span>{value.status}</span> {statusesIcon.free}
                                    </div>
                                )
                            }
                        </div>
                    </Grid>
                </Grid>
                <Grid item xs={12} container>
                    <Grid item md={5} xs={12}>
                        <div className={classes.detailsInfoTitle}>{t('housesDetailsAreaTitle')}</div>
                    </Grid>
                    <Grid item md={7} xs={12}>
                        <div className={classes.detailsInfoDescription}>
                            {isEdit
                                ? <TextField
                                    id='area'
                                    variant="outlined"
                                    defaultValue={value.area}
                                    onChange={handleChangeValue}
                                />
                                : value.area
                            }
                        </div>
                    </Grid>
                </Grid>
                <Grid item xs={12} container>
                    <Grid item md={5} xs={12}>
                        <div className={classes.detailsInfoTitle}>{t('housesDetailsAddressTitle')}</div>
                    </Grid>
                    <Grid item md={7} xs={12}>
                        <div className={classes.detailsInfoDescription}>
                            {isEdit
                                ? <TextField
                                    id='address'
                                    variant="outlined"
                                    defaultValue={value.address}
                                    onChange={handleChangeValue}
                                />
                                : value.address
                            }
                        </div>
                    </Grid>
                </Grid>
                <Grid item xs={12} container>
                    <Grid item md={5} xs={12}>
                        <div className={classes.detailsInfoTitle}>{t('housesDetailsTypeTitle')}</div>
                    </Grid>
                    <Grid item md={7} xs={12}>
                        <div className={classes.detailsInfoDescription}>
                            {isEdit
                                ? <TextField
                                    id='type'
                                    variant="outlined"
                                    defaultValue={value.type}
                                    onChange={handleChangeValue}
                                />
                                : value.type
                            }
                        </div>
                    </Grid>
                </Grid>
            </Grid>
            <div className={classes.detailsBtns}>
                <CustomButton width="130px"
                              endIcon={<ChatIcon/>}>
                    {t('settingClientInformationWriteBtnTitle')}
                </CustomButton>
                <CustomButton
                    color={isEdit ? 'primary' : 'secondary'}
                    className={classes.edit}
                    onClick={handleChangeIsEdit}
                    endIcon={isEdit ? <SaveIcon/> : <EditIcon/>}>
                    {isEdit
                        ? t('settingClientInformationSaveBtnTitle')
                        : t('settingClientInformationEditBtnTitle')
                    }
                </CustomButton>
            </div>
        </>
    )
}

Details.defaultProps = {
    status: 'Вільний',
    area: '80 m2',
    address: 'Яблуниця Івано-Франківська область, вул. Стальського 34',
    type: 'Standart'
}

Details.propTypes = {
    status: PropTypes.string.isRequired,
    area: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
}

export default Details;