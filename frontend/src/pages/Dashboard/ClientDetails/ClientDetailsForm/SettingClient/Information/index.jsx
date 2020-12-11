import React, {useState} from 'react';
import CustomButton from "../../../../../../components/generic/CustomButton";
import ChatIcon from '@material-ui/icons/Chat';
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import {useTranslation} from "react-i18next";
import {TextField} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    mb15: {
        marginBottom: '15px'
    },
    text: {
        marginBottom: '20px',
        font: 'normal normal normal 14px/19px Roboto',
        color: '#B1B4BA'
    },
    title: {
        font: 'normal normal bold 16px/21px Roboto',
        color: '#293134'
    },
    edit: {
        width: "115px",
        '&:hover': {
            backgroundColor: '#254A93',
            color: '#FFFFFF',
        }
    },
    status: {
        backgroundColor: '#EEF5FF',
        width: "115px",
        '&:hover': {
            backgroundColor: '#EEF5FF',
        },
        '&.MuiButton-root.Mui-disabled': {
            color: '#6E7375'
        }
    },
    input: {
        '&.MuiFormControl-root': {
            width: "115px"
        },
    }
}));

const Information = () => {
    const classes = useStyles();
    const {t} = useTranslation();
    const [isEdit, setIsEdit] = useState({
        affiliate: false,
        paymentStatus: false,
        description: false
    })
    const [value, setValue] = useState({
        affiliate: 'Instagram',
        paymentStatus: 'Выполнено',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    })

    const handleChangeIsEdit = (key) => {
        setIsEdit(prevState => ({...prevState, [key]: !prevState[key]}))
    }

    const handleChangeValue = (e) => {
        setValue(prevState => ({...prevState, [e.currentTarget.id]: e.currentTarget.value}))
    }

    return (
        <>
            <Grid className={classes.mb15} container alignItems="center">
                <Grid item xs={4}>
                    <span className={classes.title}>{t('settingClientInformationAffiliateTitle')}</span>
                </Grid>
                <Grid item xs={5}>
                    {isEdit.affiliate
                        ? <TextField
                            id='affiliate'
                            variant="outlined"
                            defaultValue={value.affiliate}
                            onChange={handleChangeValue}
                            className={classes.input}
                        />
                        : <CustomButton className={classes.status}
                                        disabled color="secondary">
                            {value.affiliate}
                        </CustomButton>
                    }

                </Grid>
                <Grid item xs={3} container justify="flex-end">
                    <CustomButton className={classes.edit}
                                  color={isEdit.affiliate ? 'primary' : 'secondary'}
                                  onClick={() => handleChangeIsEdit('affiliate')}
                                  endIcon={isEdit.affiliate ? <SaveIcon/> : <EditIcon/>}>
                        {isEdit.affiliate
                            ? t('settingClientInformationSaveBtnTitle')
                            : t('settingClientInformationEditBtnTitle')
                        }
                    </CustomButton>
                </Grid>
            </Grid>

            <Grid className={classes.mb15} container alignItems="center">
                <Grid item xs={4}>
                    <span className={classes.title}>{t('settingClientInformationPaymentStatusTitle')}</span>
                </Grid>
                <Grid item xs={5}>
                    {isEdit.paymentStatus
                        ? <TextField
                            id='paymentStatus'
                            variant="outlined"
                            defaultValue={value.paymentStatus}
                            onChange={handleChangeValue}
                            className={classes.input}
                        />
                        : <CustomButton className={classes.status}
                                        color="secondary"
                                        disabled>
                            {value.paymentStatus}
                        </CustomButton>
                    }

                </Grid>
                <Grid item xs={3} container justify="flex-end">
                    <CustomButton color={isEdit.paymentStatus ? 'primary' : 'secondary'}
                                  onClick={() => handleChangeIsEdit('paymentStatus')}
                                  className={classes.edit}
                                  endIcon={isEdit.paymentStatus ? <SaveIcon/> : <EditIcon/>}>
                        {isEdit.paymentStatus
                            ? t('settingClientInformationSaveBtnTitle')
                            : t('settingClientInformationEditBtnTitle')
                        }
                    </CustomButton>
                </Grid>
            </Grid>

            <div className={classes.text}>
                {isEdit.description
                    ? <TextField fullWidth
                                 id='description'
                                 variant="outlined"
                                 multiline
                                 defaultValue={value.description}
                                 onChange={handleChangeValue}
                    />
                    : <p>{value.description}</p>
                }
            </div>

            <Grid container>
                <Grid item xs={6}>
                    <CustomButton width="130px"
                                  endIcon={<ChatIcon/>}>{t('settingClientInformationWriteBtnTitle')}</CustomButton>
                </Grid>
                <Grid item xs={6} container justify="flex-end">
                    <CustomButton color={isEdit.description ? 'primary' : 'secondary'}
                                  className={classes.edit}
                                  onClick={() => handleChangeIsEdit('description')}
                                  endIcon={isEdit.description ? <SaveIcon/> : <EditIcon/>}>
                        {isEdit.description
                            ? t('settingClientInformationSaveBtnTitle')
                            : t('settingClientInformationEditBtnTitle')
                        }
                    </CustomButton>
                </Grid>
            </Grid>
        </>
    )
}

export default Information;