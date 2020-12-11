import React from 'react';
import ClientDetailsForm from "./ClientDetailsForm";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    clientName: {
        textAlign: 'left;',
        font: 'normal normal bold 18px / 24px Roboto',
        color: '#293134',
        textTransform: 'capitalize',
        marginBottom: '20px'
    }
})

const ClientDetails = () => {
    const classes = useStyles();

    return (
        <>
            <p className={classes.clientName}>Андрій Олександрович</p>
            <ClientDetailsForm/>
        </>
    );
}

export default ClientDetails;