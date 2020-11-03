import Card from '@material-ui/core/Card';
import PhoneEnabledIcon from '@material-ui/icons/PhoneEnabled';
import EmailIcon from '@material-ui/icons/Email';
import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Avatar from '@material-ui/core/Avatar';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(() => ({
  card: {
    width: 356,
    height: 110,
    margin: '0 30px 0 30px',
    borderRadius: 20
  },
  title: {
    font: 'normal normal medium 18px/24px Roboto',
    fontSize: 18,
    fontWeight: '500',
    letterSpacing: -0.09,
    color: '#254A93',
    textTransform: 'capitalize',
    margin: '35px 100px 20px 130px'
  },
  name: {
    marginLeft: 105,
    color: '#293134',
    fontWeight: '600',
    letterSpacing: -0.08,
    font: 'normal normal medium 16px/25px Poppins'
  },
  line: {
    width: 7,
    height: 82,
    borderRadius: 12,
    backgroundColor: '#fa505d',
    position: 'absolute'
  },
  contacts: {
    margin: '8px 0 0 105px',
    font: 'normal normal normal 14px/19px Roboto',
    letterSpacing: -0.07,
    color: '#6E7375',
    align: 'center'
  },
  contactsText: {
    margin: '0 0 0 10px'
  },
  avatar: {
    position: 'absolute',
    margin: '21px 0 21px 37px',
    width: 67,
    height: 67
  }
}));

const DrawerManager = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const managerInfo = useSelector(state => {
    return state.DrawerManager.managerInfo;
  });
  return (
    <div>
      <p className={classes.title}>{t('personalManager')}</p>
      <Card className={classes.card}>
        <CardActionArea>
          <Avatar
            className={classes.avatar}
            alt="Avatar"
            src="https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png" /* src={manager.photo} */
          />
          <CardContent>
            <div className={classes.line}>{}</div>
            <Typography className={classes.name}>
              <span>{managerInfo.managerName}</span>
            </Typography>
            <Typography className={classes.contacts}>
              <PhoneEnabledIcon style={{ fontSize: 15 }} />
              <span className={classes.contactsText}>{managerInfo.managerTel}</span>
            </Typography>
            <Typography className={classes.contacts}>
              <EmailIcon style={{ fontSize: 15 }} />
              <span className={classes.contactsText}>{managerInfo.managerMail}</span>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

DrawerManager.propTypes = {
  userName: PropTypes.string,
  tel: PropTypes.string,
  email: PropTypes.string
};

export default DrawerManager;
