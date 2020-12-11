import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Fab from '@material-ui/core/Fab';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import PropTypes from 'prop-types';
import {FormHelperText} from '@material-ui/core';
import {useTranslation} from "react-i18next";

const useStyles = makeStyles(() => ({
    root: {},
    upload: {
        margin: '0 auto',
        width: '67px',
        height: '67px',
        background: '#293134 0% 0% no-repeat padding-box',
        '& .MuiFab-label': {
            flexWrap: 'wrap'
        }
    },
    uploadText: {
        font: 'normal normal normal 12px/14px Roboto',
        textTransform: 'none',
        textAlign: 'center'
    },
    uploadIcon: {
        fontSize: '17px'
    },
    error: {
        maxWidth: 'fit-content',
        textAlign: 'center'
    },
    image: {
        height: 'inherit',
        borderRadius: '50%'
    },
    rootUpload: ({errorMsg}) => ({
        border: errorMsg ? '0.5px solid red' : 'none',
    })
}));

/**
 * @param image
 * @param name
 * @param onChange
 * @param errorMsg
 * @param otherProps
 */

const SmallUploadPhoto = ({name, onChange, errorMsg, ...otherProps}) => {
    const classes = useStyles({errorMsg});
    const {t} = useTranslation();

    return (
        <>
            <label className={classes.root} htmlFor={`upload_${name}`}>
                <input
                    style={{display: 'none'}}
                    id={`upload_${name}`}
                    name={name}
                    type="file"
                    onChange={(e) => e.target.files[0] && onChange(e)}
                />
                <ButtonBase component="span" className={classes.rootUpload}>
                    <Fab color="secondary" component="span" className={classes.upload}>
                        <PhotoCameraIcon className={classes.uploadIcon}/>
                        <p className={classes.uploadText}>{t('createUserChangePhoto')}</p>
                    </Fab>
                </ButtonBase>
                {errorMsg && (
                    <FormHelperText className={classes.error} error={true}>
                        {errorMsg}
                    </FormHelperText>
                )}
            </label>
        </>
    );
};

SmallUploadPhoto.propTypes = {
    image: PropTypes.object,
    errorMsg: PropTypes.string,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default SmallUploadPhoto;
