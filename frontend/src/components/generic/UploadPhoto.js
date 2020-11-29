import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Fab from '@material-ui/core/Fab';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import PropTypes from 'prop-types';
import { FormHelperText } from '@material-ui/core';

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
  rootUpload: propsStyle => ({
    background: '#F7FAFF 0% 0% no-repeat padding-box',
    border: `0.5px solid ${propsStyle.errorMsg ? 'red' : 'rgba(0, 0, 0, 0.23)'}`,
    borderRadius: '20px',
    padding: '77px 57px'
  })
}));
/**
 *
 * @param titleBtn PropTypes.string
 * @param errorMsg PropTypes.string
 * @param name PropTypes.string.isRequire
 * @param onChange PropTypes.func.isRequired
 */
const UploadPhoto = ({ titleBtn, name, onChange, errorMsg, ...otherProps }) => {
  const classes = useStyles({ errorMsg });

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
  errorMsg: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default UploadPhoto;
