import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EventNoteIcon from '@material-ui/icons/EventNote';
import Button from '../generic/Button';

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
  div: {
    margin: '10px 15px 0 0'
  },
  img: {
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

export default function SimpleAccordion() {
  const classes = useStyles();

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
            Новини
            <div className={classes.icon}>
              <EventNoteIcon />
            </div>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className={classes.div}>
            <img
              className={classes.img}
              src="https://upload.wikimedia.org/wikipedia/commons/8/89/%D0%92%D1%80%D0%B0%D0%B6%D0%B0%D1%8E%D1%87%D0%B8%D0%B9_%D0%BA%D1%80%D0%B0%D1%94%D0%B2%D0%B8%D0%B4.jpg"
              alt=""
            />
          </div>
          <Typography className={classes.detailsHeader}>
            Доступне місце розташування!
            <div className={classes.detailsContent}>
              Вітаємо клієнтів MARKSEM! MARKSEM відкриває нове місце на березі мальовничого озера в
              Карпатах. У новому місці також з’являться нові розваги та послуги для вашого.
            </div>
            <div className={classes.detailsDate}>
              25.07.2020
              <div className={classes.detailsBtn}>
                <Button background={'#254A93'} color={'#FFFFFF'} content={'Детально'} />
              </div>
            </div>
          </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <div className={classes.line}></div>
        </AccordionDetails>
        <AccordionDetails>
          <div className={classes.div}>
            <img
              className={classes.img}
              src="https://delo.ua/files/news/images/3592/25/picture2_dlitelnye-rukopoz_359225_p0.jpg"
              alt=""
            />
          </div>
          <Typography className={classes.detailsHeader}>
            Нові умови співпраці!
            <div className={classes.detailsContent}>
              MARKSEM запускає новий проект співпраці. Вкладіть гроші в продукт MARKSEM і отримайте
              план розстрочки вже сьогодні. З отриманого доходу оплатіть покупку! Перейдіть за
              посиланням та дізнайтеся більше
            </div>
            <div className={classes.detailsDate}>
              25.07.2020
              <div className={classes.detailsBtn}>
                <Button background={'#254A93'} color={'#FFFFFF'} content={'Детально'} />
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
