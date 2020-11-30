import React from 'react';
import CustomTextField from '../../generic/CustomTextField';
import {FormHelperText} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import CustomButton from '../../generic/CustomButton';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import {makeStyles} from '@material-ui/core/styles';
import UploadPhoto from '../../generic/UploadPhoto';
import {useTranslation} from 'react-i18next';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import {createUsers} from '../../../redux/action/CurrentUser';

const useStyles = makeStyles(() => ({
    buttons: {
        display: 'flex',
        justifyContent: 'center',
        '& > *:first-child': {
            marginRight: '56px'
        }
    },
    buttonsRoot: {
        marginBottom: '20px'
    },
    buttonsError: {
        textAlign: 'center'
    },
    fields: {
        display: 'flex',
        marginBottom: '15px',
        '& > *:first-child': {
            padding: '0 5%',
            width: '25%'
        }
    },
    inputs: {
        flexBasis: '50%',
        '& > *': {
            marginBottom: '10px'
        },
        '& > *:last-child': {
            marginBottom: '0px',
            marginTop: '15px'
        }
    }
}));

const UsersCreateForm = () => {
    const classes = useStyles();
    const {t} = useTranslation();
    const dispatch = useDispatch();

    const validationSchema = Yup.object({
        name: Yup.string().required(t('validationRequired')),
        type: Yup.string().required(t('validationRequired')),
        email: Yup.string()
            .email(t('validationEmail'))
            .required(t('validationRequired')),
        password: Yup.string()
            .min(6, t('validationMin6Char'))
            .required(t('validationRequired')),
        repeatPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], t('validationConfirmPassword'))
            .required(t('validationRequired')),
        photo: Yup.mixed()
            .required(t('validationRequired'))
            .test('fileFormat', t('validationFormatFile'), value => {
                return value && ['image/jpg', 'image/jpeg', 'image/png'].includes(value.type);
            })
    });

    const {handleChange, handleSubmit, errors, setFieldValue, values} = useFormik({
        initialValues: {},
        validateOnChange: false,
        validateOnBlur: false,
        validationSchema,
        onSubmit: data => {
            const formData = new FormData();
            for (let key in data) {
                if (key !== 'repeatPassword') {
                    formData.append(key, data[key]);
                }
            }
            dispatch(createUsers(formData));
        }
    });

    return (
            <form>
                <div className={classes.buttonsRoot}>
                    <div className={classes.buttons}>
                        <CustomButton
                            onClick={() => setFieldValue('type', 'client')}
                            fontSize="14px"
                            color={values.type === 'client' ? 'primary' : 'secondary'}
                        >
                            {t('createUserSelectClient')}
                        </CustomButton>
                        <CustomButton
                            onClick={() => setFieldValue('type', 'manager')}
                            fontSize="14px"
                            color={values.type === 'manager' ? 'primary' : 'secondary'}
                        >
                            {t('createUserSelectManager')}
                        </CustomButton>
                    </div>
                    {errors.type && (
                        <FormHelperText className={classes.buttonsError} error={true}>
                            {errors.type}
                        </FormHelperText>
                    )}
                </div>
                <div className={classes.fields}>
                    <UploadPhoto
                        imageFile={values.photo}
                        errorMsg={errors.photo}
                        titleBtn={t('createUserChangePhoto')}
                        name="photo"
                        onChange={setFieldValue}
                    />
                    <div className={classes.inputs}>
                        <CustomTextField
                            error={!!errors.name}
                            helperText={errors.name}
                            name="name"
                            onChange={handleChange}
                            startAdornment={<PersonIcon/>}
                            placeholder={t('createUserName')}
                        />
                        <CustomTextField
                            error={!!errors.email}
                            helperText={errors.email}
                            name="email"
                            onChange={handleChange}
                            startAdornment={<EmailIcon/>}
                            placeholder={t('createUserEmail')}
                        />
                        <CustomTextField
                            error={!!errors.password}
                            helperText={errors.password}
                            name="password"
                            type="password"
                            onChange={handleChange}
                            startAdornment={<LockIcon/>}
                            placeholder={t('createUserPassword')}
                        />
                        <CustomTextField
                            error={!!errors.repeatPassword}
                            helperText={errors.repeatPassword}
                            name="repeatPassword"
                            type="password"
                            onChange={handleChange}
                            startAdornment={<LockIcon/>}
                            placeholder={t('createUserRepeatPassword')}
                        />
                        <CustomButton fontSize="18px" width="160px" onClick={handleSubmit}>
                            {t('createUserSend')}
                        </CustomButton>
                    </div>
                </div>
            </form>
    );
};

export default UsersCreateForm;
