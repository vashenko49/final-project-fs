import React from 'react';
import Card from "../../../../components/generic/Card";
import ProfileSideBar from "./ProfileSideBar";
import SettingClient from "./SettingClient";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    main: {
        display: 'flex',
        '&:nth-child(1)': {
            flexBasis: '35%'
        }
    }
})

const ClientDetailsForm = () => {
    const classes = useStyles();
    return (
        <Card className={classes.main}>
            <ProfileSideBar/>
            <SettingClient/>
        </Card>
    )
}

export default ClientDetailsForm;