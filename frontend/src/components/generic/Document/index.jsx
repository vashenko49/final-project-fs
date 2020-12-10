import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PrintIcon from '@material-ui/icons/Print';
import GetAppIcon from '@material-ui/icons/GetApp';

const useStyles = makeStyles({
  card: {
    width: 290,
    height: 180,
    margin: '0 30px 0 30px',
    borderRadius: 20
  },
  title: {
    textAlign: 'center',
    font: 'normal normal medium 14px/19px Roboto',
    letterSpacing: 0,
    color: '#464C4E',
    marginLeft: 128,
    fontSize: 14
  },
  subTitle: {
    textAlign: 'center',
    font: 'normal normal normal 12px/16px Roboto',
    letterSpacing: 0,
    color: '#6E7375',
    margin: '10px 0 0 128px',
    fontSize: 12
  },
  img: {
    margin: '5px 0 0 0',
    height: 140,
    width: 95,
    position: 'absolute'
  },
  downloadIcon: {
    margin: '15px 0 0 190px',
    color: '#254A93'
  },
  printIcon: {
    color: '#254A93',
    marginLeft: 20
  }
});

const Document = ({ title, subTitle, ...otherProps }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardContent>
          <img className={classes.img} src="https://i.ibb.co/3M7RDyb/file-3.png" alt="document" />
          <Typography className={classes.title}>{title}</Typography>
          <Typography className={classes.subTitle}>{subTitle}</Typography>
          <GetAppIcon className={classes.downloadIcon} />
          <PrintIcon className={classes.printIcon} />
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Document;
