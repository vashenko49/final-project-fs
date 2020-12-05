import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {useTranslation} from "react-i18next";
import CustomButton from "../../components/generic/CustomButton";
import * as Yup from "yup";
import {useFormik} from "formik";
import Logo from "../Dashboard/Header/Logo/Logo";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/action/Auth";
import {FormHelperText} from "@material-ui/core";
import Auth from "../../redux/selector/auth/Auth";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    fontSize: '35px'
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignIn = ({history}) => {
  const classes = useStyles();
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const {message} = useSelector(Auth.getAuth);

  const validationSchema = Yup.object({
    email: Yup.string().required(t('validationRequired')),
    password: Yup.string().required(t('validationRequired')),
  });

  const {handleChange, handleSubmit, errors, values, setFieldValue} = useFormik({
    initialValues: {
      remember: false
    },
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema,
    onSubmit: data => {
      dispatch(login(data,history));
    }
  });

  return (
      <Container component="main" maxWidth="xs">
        <CssBaseline/>
        <div className={classes.paper}>
          <div className={classes.avatar}>
            <Logo/>
          </div>
          <form className={classes.form} noValidate>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label={t('signInEmail')}
                name="email"
                autoComplete="email"
                error={!!errors.email}
                helperText={errors.email}
                onChange={handleChange}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label={t('signInPassword')}
                type="password"
                id="password"
                autoComplete="current-password"
                error={!!errors.password}
                helperText={errors.password}
                onChange={handleChange}
            />
            {!!message && (
                <FormHelperText error={!!message}>
                  {t('signInFail')}
                </FormHelperText>
            )}
            <FormControlLabel
                control={<Checkbox color="primary"
                                   onChange={() => setFieldValue('remember', !values.remember)}/>}
                label={t('signInRemember')}
            />
            <CustomButton
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleSubmit}
            >
              {t('signInBtn')}
            </CustomButton>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  {t('signInForgot')}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
  );
}

export default SignIn;