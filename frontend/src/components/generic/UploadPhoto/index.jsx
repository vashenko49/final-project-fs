import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Fab from '@material-ui/core/Fab';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import PropTypes from 'prop-types';
import {FormHelperText} from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(() => ({
    root: {},
    upload: {
        margin: '0 auto',
        width: '67px',
        height: '67px',
        background: '#ACB5B9 0% 0% no-repeat padding-box',
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
    rootUpload: propsStyle => ({
        display: 'flex',
        flexDirection: 'column',
        background: '#F7FAFF 0% 0% no-repeat padding-box',
        border: `0.5px solid ${propsStyle.errorMsg ? 'red' : 'rgba(0, 0, 0, 0.23)'}`,
        borderRadius: '20px',
        padding: '15%'
    })
}));
/**
 *
 * @param photo
 * @param titleBtn PropTypes.string
 * @param errorMsg PropTypes.string
 * @param name PropTypes.string.isRequire
 * @param onChange PropTypes.func.isRequired
 * @param otherProps
 */
const UploadPhoto = ({photo, titleBtn, name, onChange, errorMsg, ...otherProps}) => {
    const classes = useStyles({errorMsg, classes: otherProps.classes});
    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        if (photo instanceof Blob) {
            let reader = new FileReader();
            reader.onloadend = () => {
                setImageUrl(reader.result);
            };
            reader.readAsDataURL(photo);
        } else {
            setImageUrl(photo);
        }
    }, [photo])

    return (
        <>
            <label className={classes.root} htmlFor="upload">
                <input
                    style={{display: 'none'}}
                    id="upload"
                    name={name}
                    type="file"
                    onChange={(e) => e.target.files[0] && onChange(e)}
                />
                <ButtonBase component="span" className={classes.rootUpload}>
                    {imageUrl && (
                        <CardMedia
                            className={classes.image}
                            component="img"
                            src={imageUrl}
                            title={photo && photo.name}
                        />
                    )}
                    {!imageUrl && (
                        <Fab color="secondary" component="span" className={classes.upload}>
                            <PhotoCameraIcon className={classes.uploadIcon}/>
                            <p className={classes.uploadText}>{titleBtn}</p>
                        </Fab>
                    )}
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

UploadPhoto.propTypes = {
    titleBtn: PropTypes.string,
    image: PropTypes.object,
    errorMsg: PropTypes.string,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};

export default UploadPhoto;
