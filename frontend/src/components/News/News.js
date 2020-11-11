import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EventNoteIcon from '@material-ui/icons/EventNote';
import Button from '../generic/Button';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import NewsSelector from '../../redux/selector/NewsSelector';
import { getNews } from '../../redux/action/News';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    margin: '10px 30px 0 0'
  },
  heading: {
    fontWeight: theme.typography.fontWeightRegular,
    font: 'normal normal medium 18px/26px Roboto',
    color: '#FFFFFF',
    fontSize: 18
  },
  header: {
    background: '#254A93 0% 0% no-repeat padding-box',
    boxShadow: '0px 2px 2px #00000029',
    borderRadius: '20px 20px 0px 0px'
  },
  iconArrow: {
    color: '#FFFFFF'
  },
  border: {
    boxShadow: '0px 2px 2px #00000029',
    borderRadius: '20px'
  },
  photoContainer: {
    margin: '10px 15px 0 0'
  },
  photo: {
    width: 135,
    height: 135,
    borderRadius: '20px',
    background: 'transparent 0% 0% no-repeat padding-box'
  },
  detailsHeader: {
    font: 'normal normal medium 18px/26px Roboto',
    color: '#293134',
    margin: '10px 0 0 30px',
    fontSize: 18
  },
  detailsContent: {
    font: 'normal normal normal 16px/21px Roboto',
    textAlign: 'left',
    letterSpacing: 0,
    color: '#6E7375',
    fontSize: 16,
    marginTop: 19
  },
  detailsDate: {
    font: 'normal normal normal 12px/16px Roboto',
    color: '#99A0A3',
    fontSize: 12,
    marginTop: 10
  },
  detailsBtn: {
    float: 'right',
    marginRight: 10
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: '#99A0A3'
  },
  icon: {
    float: 'right',
    marginLeft: 10,
    fontSize: 16,
    display: 'inline-block'
  }
}));

export default function News() {
  const news = useSelector(NewsSelector.getNews);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <div className={classes.root}>
      <Accordion className={classes.border} square={true}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon className={classes.iconArrow} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          className={classes.header}
        >
          <Typography className={classes.heading}>
            {t('news')}
            <div className={classes.icon}>
              <EventNoteIcon />
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className={classes.photoContainer}>
            <img className={classes.photo} src={news.imgFirst} alt="#" />
          </div>
          <Typography className={classes.detailsHeader}>
            {news.headerFirst}
            <div className={classes.detailsContent}>{news.contentFirst}</div>
            <div className={classes.detailsDate}>
              {news.dateFirst}
              <div className={classes.detailsBtn}>
                <Button background={'#254A93'} color={'#FFFFFF'} content={t('btnDetails')} />
              </div>
            </div>
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <div className={classes.line}></div>
        </AccordionDetails>
        <AccordionDetails>
          <div className={classes.div}>
            <img className={classes.img} src={news.imgSecond} alt="#" />
          </div>
          <Typography className={classes.detailsHeader}>
            {news.headerSecond}
            <div className={classes.detailsContent}>{news.contentSecond}</div>
            <div className={classes.detailsDate}>
              {news.dateSecond}
              <div className={classes.detailsBtn}>
                <Button background={'#254A93'} color={'#FFFFFF'} content={t('btnDetails')} />
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
