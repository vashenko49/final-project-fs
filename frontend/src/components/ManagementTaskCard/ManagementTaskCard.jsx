import React from "react";
import PropTypes from 'prop-types';
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "../generic/Card";

const useStyles = makeStyles(() => ({
    main: {
        paddingTop: '15px',
        paddingLeft: '30px',
        position: 'relative'
    },
    title: {
        font: 'normal normal bold 16px Roboto',
        color: '#254A93',
        marginBottom: '5px'
    },
    date: {
        font: 'normal normal bold 14px Roboto',
        color: '#293134',
        marginBottom: '10px'
    },
    desc: {
        font: 'normal normal normal 12px Roboto',
        color: '#B1B4BA'
    },
    status: ({statusColor}) => ({
        position: 'absolute',
        display: 'inline-block',
        borderRadius: '12px',
        top: '15px',
        left: '9px',
        width: '7px',
        height: 'calc(100% - 30px)',
        backgroundColor: statusColor
    })
}))

const ManagementTaskCard = ({title, date, desc}) => {
    const statusColorTaskHelper = (date) => {
        return new Date() > new Date(date) ? '#FA505D' : '#F88B38';
    }

    const classes = useStyles({statusColor: statusColorTaskHelper(date)});

    return (
        <Card className={classes.main}>
            <div className={classes.title}>{title}</div>
            <div className={classes.date}>{date}</div>
            <div className={classes.desc}>{desc.substr(0,550)} ...</div>
            <div className={classes.status}/>
        </Card>
    )
}

ManagementTaskCard.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
}

export default ManagementTaskCard;