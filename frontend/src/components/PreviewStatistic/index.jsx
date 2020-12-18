import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { useTranslation } from 'react-i18next';
import CustomButton from '../generic/CustomButton';

const useStyles = makeStyles({
  card: {
    width: 290,
    height: 170,
    borderRadius: 20
  },
  title: {
    textAlign: 'left',
    font: 'normal normal medium 18px/27px Roboto',
    color: '#293134',
    textTransform: 'capitalize',
    fontSize: 18
  },
  subtitle: {
    font: 'normal normal normal 12px/27px Roboto',
    color: '#B1B4BA',
    marginTop: -7
  },
  arrow: {
    color: '#4AD584',
    fontSize: 18
  },
  detailsBtn: {
    background: '#F88B38 0% 0% no-repeat padding-box',
    borderRadius: 8,
    width: 100,
    height: 30,
    margin: '-40px 0px 0px 160px',
    position: 'absolute'
  }
});

const PreviewStatistics = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <Typography className={classes.title}>Загальний Дохід</Typography>
          <Typography className={classes.subtitle}>Будинки: M-2 ID0170, ID 00177</Typography>
          <Typography className={classes.title}>
            $12.438K <ArrowUpwardIcon className={classes.arrow} />
          </Typography>
          <Typography className={classes.subtitle}>Локація 1</Typography>
          <Typography className={classes.title}>
            $6.135K <ArrowUpwardIcon className={classes.arrow} />
          </Typography>
          <Typography className={classes.subtitle}>Локація 2</Typography>
          <CustomButton
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.detailsBtn}
          >
            {t('btnDetails')}
          </CustomButton>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PreviewStatistics;
