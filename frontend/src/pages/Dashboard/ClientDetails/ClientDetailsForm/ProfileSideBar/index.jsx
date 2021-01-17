import React from 'react';
import PropTypes from 'prop-types';
import UploadPhoto from "@components/generic/UploadPhoto";
import PublicIcon from '@material-ui/icons/Public';
import {makeStyles} from "@material-ui/core/styles";
import {useTranslation} from "react-i18next";
import * as Yup from "yup";
import {useFormik} from "formik";
import {TextField} from "@material-ui/core";
import CustomButton from "@components/generic/CustomButton";
import NumberFormat from 'react-number-format';
import Button from "@material-ui/core/Button";
import ButtonBase from "@material-ui/core/ButtonBase";
import {useDispatch} from "react-redux";
import {updateProfile} from "@redux/action/Users";
import {jsonToFormData} from "@utils/JsonToFormData";

const useStyles = makeStyles({
    root: {
        padding: '20px'
    },
    field: {
        marginBottom: '3px',
        '& .MuiInputLabel-root ': {
            font: 'normal normal bold 18px/19px Roboto',
            color: '#6E7375',
        },
        '& .MuiInputBase-root': {
            font: 'normal normal normal 14px/19px Roboto',
            color: '#293134',
        },
        '& .MuiFormControl-root': {
            marginBottom: '15px'
        }
    },
    head: {
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginBottom: '10px'
    },
    rootUpload: {
        backgroundColor: '#DEEAF9',
        borderRadius: '50%',
        border: 'none',
        display: 'inline-block',
        width: '66px',
        height: '66px'
    },
    upload: {
        backgroundColor: '#293134'
    },
    location: {
        flexDirection: 'column',
        textAlign: 'center',
        float: 'right',
        font: 'normal normal normal 14px/19px Roboto',
        letterSpacing: '0px',
        color: '#6E7375',
        opacity: '1'
    },
    addPhonesContainer: {
        marginBottom: '15px',
        '& .MuiFormControl-root': {
            marginBottom: 0
        }
    },
    titleAddPhones: {
        font: 'normal normal bold 18px Roboto',
        color: '#6E7375',
        transform: 'translate(0, 1.5px) scale(0.75)',
        transformOrigin: 'top left'
    },
    btnAddPhones: {
        padding: 0,
        justifyContent: 'flex-start',
        borderBottom: '1px solid rgba(0, 0, 0, 0.42)',
        borderRadius: 0,
        '& .MuiButton-label': {
            font: 'normal normal normal 14px/19px Roboto',
            color: '#4AD584',
            textAlign: 'left',
            textTransform: 'none'
        }
    }
})

const ProfileSideBar = ({id, name, photo, email, phones}) => {
    const classes = useStyles();
    const {t} = useTranslation();
    const dispatch = useDispatch();

    const validationSchema = Yup.object({
        name: Yup.string().required(t('validationRequired')),
        email: Yup.string()
            .email(t('validationEmail'))
            .required(t('validationRequired')),
        photo: Yup.mixed()
            .test('photoCheck', t('validationFormatFile'), value =>
                value instanceof Blob
                    ? ['image/jpg', 'image/jpeg', 'image/png'].includes(value.type)
                    : true
            )
            .test('photoCheckSize', t('validationFileSize'), value =>
                value instanceof Blob
                    ? value.size < 1048000
                    : true
            ),
        phone: Yup.object().shape({
            value: Yup.string().min(10, t('validationMin10Char'))
        }),
        phones: Yup.array().of(
            Yup.object().shape({
                value: Yup.string().min(10, t('validationMin10Char')).required(t('validationRequired'))
            })),
    });

    const {
        handleChange,
        handleBlur,
        setFieldTouched,
        handleSubmit,
        errors,
        touched,
        setFieldValue,
        values
    } = useFormik({
        initialValues: {
            name,
            photo,
            email,
            phone: phones.filter(p => p.type === 'MAIN_PHONE')[0] || {
                'type': 'MAIN_PHONE',
                'value': ''
            },
            phones: phones.filter(p => p.type !== 'MAIN_PHONE')
        },
        validationSchema,
        onSubmit: data => {
            const newData = {...data};
            console.log(data === newData)
            newData.phone && newData.phones.push(newData.phone)
            delete newData.phone
            if (!(newData.photo instanceof Blob)) {
                delete newData.photo
            }
            newData.id = id
            let formData = jsonToFormData(newData);
            dispatch(updateProfile(formData));
        }
    })

    const setPhones = (value, idx) => {
        const newValues = [...values.phones];
        newValues[idx].value = value;
        setFieldValue('phones', newValues)
    }

    const createNewPhones = () => {
        setFieldValue('phones', [
            ...values.phones,
            {
                'type': 'OTHER_PHONE',
                'value': ''
            }
        ])
    }

    const hasErrorPhones = idx => {
        return touched.phones && touched.phones[idx] && touched.phones[idx].value &&
            errors.phones && errors.phones[idx] && errors.phones[idx].value;
    }

    const hasErrorPhone = () => {
        return touched.phone && touched.phone.value &&
            errors.phone && errors.phone.value;
    }

    return (
        <form className={classes.root}>
            <div className={classes.head}>
                <UploadPhoto
                    classes={{
                        rootUpload: classes.rootUpload,
                        upload: classes.upload
                    }}
                    photo={values.photo}
                    errorMsg={touched.photo && errors.photo}
                    titleBtn={t('createUserChangePhoto')}
                    name="photo"
                    onChange={e => setFieldValue('photo', e.currentTarget.files[0])}
                />
                <ButtonBase className={classes.location}>
                    <PublicIcon/>
                    <p>Київ, Україна</p>
                </ButtonBase>
            </div>
            <div className={classes.field}>
                <TextField
                    id="name"
                    label={t('profileTitleFieldName')}
                    defaultValue={values.name}
                    error={touched.name && errors.name}
                    helperText={touched.name && errors.name}
                    fullWidth
                    onBlur={handleBlur}
                    onChange={handleChange}
                />
                <NumberFormat
                    id="phone"
                    label={t('profileTitleFieldPhone')}
                    fullWidth
                    customInput={TextField}
                    defaultValue={values.phone && values.phone.value}
                    error={hasErrorPhone()}
                    helperText={hasErrorPhone()}
                    onValueChange={({value}) => setFieldValue('phone.value', value)}
                    onBlur={() => setFieldTouched('phone.value', true)}
                    format="+38 (###) ###-##-##"
                    allowEmptyFormatting
                    mask="_"
                />
                <div className={classes.addPhonesContainer}>
                    <div className={classes.titleAddPhones}>{t('profileTitleFieldPhones')}</div>
                    <Button className={classes.btnAddPhones}
                            id="addPhones"
                            fullWidth
                            onClick={createNewPhones}
                    >{t('profileBtnAddPhones')}
                    </Button>
                    {values.phones.map((el, idx) => (
                        <NumberFormat
                            key={idx}
                            id={"phones" + idx}
                            isNumericString
                            error={hasErrorPhones(idx)}
                            helperText={hasErrorPhones(idx)}
                            defaultValue={el.value}
                            fullWidth
                            customInput={TextField}
                            format="+38 (###) ###-##-##"
                            allowEmptyFormatting
                            mask="_"
                            onBlur={() => setFieldTouched(`phones[${idx}].value`, true)}
                            onValueChange={({value}) => setPhones(value, idx)}
                        />
                    ))}
                </div>
                <TextField
                    id="email"
                    label={t('profileTitleFieldEmail')}
                    defaultValue={values.email}
                    error={touched.email && errors.email}
                    helperText={touched.email && errors.email}
                    fullWidth
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
            </div>
            <CustomButton color="secondary" fullWidth onClick={handleSubmit}>{t('profileBtnSave')}</CustomButton>
        </form>
    )
}

ProfileSideBar.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phones: PropTypes.array.isRequired
}

export default ProfileSideBar;