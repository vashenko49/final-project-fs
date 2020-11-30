import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Fab from '@material-ui/core/Fab';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import PropTypes from 'prop-types';
import { FormHelperText } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(() => ({
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
    maxWidth: '100%',
    marginBottom: '5%'
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
 * @param titleBtn PropTypes.string
 * @param imageFile PropTypes.object
 * @param errorMsg PropTypes.string
 * @param name PropTypes.string.isRequire
 * @param onChange PropTypes.func.isRequired
 */
const UploadPhoto = ({ imageFile, titleBtn, name, onChange, errorMsg, ...otherProps }) => {
  const classes = useStyles({ errorMsg });
  const [imageUrl, setImageUrl] = useState(undefined);

  useEffect(() => {
    if (imageFile) {
      let reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result);
      };
      reader.readAsDataURL(imageFile);
    }
  }, [imageFile]);

  return (
    <div>
      <label htmlFor="upload">
        <input
          style={{ display: 'none' }}
          id="upload"
          name={name}
          type="file"
          onChange={event => onChange(name, event.currentTarget.files[0])}
        />
        <ButtonBase component="span" className={classes.rootUpload}>
          {imageUrl && (
            <CardMedia
              className={classes.image}
              component="img"
              src={imageUrl}
              title={imageFile && imageFile.name}
            />
          )}
          <Fab color="secondary" component="span" className={classes.upload}>
            <PhotoCameraIcon className={classes.uploadIcon} />
            <p className={classes.uploadText}>{titleBtn}</p>
          </Fab>
        </ButtonBase>
      </label>
      {errorMsg && (
        <FormHelperText className={classes.error} error={true}>
          {errorMsg}
        </FormHelperText>
      )}
    </div>
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
