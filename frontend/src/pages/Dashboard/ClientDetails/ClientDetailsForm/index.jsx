import React, {useEffect, useState} from 'react';
import Card from "@components/generic/Card";
import ProfileSideBar from "./ProfileSideBar";
import SettingClient from "./SettingClient";
import makeStyles from "@material-ui/core/styles/makeStyles";
import UsersAPI from "@services/UsersAPI";
import * as PropTypes from "prop-types";
import {useDispatch} from "react-redux";
import {startLoad, stopLoad} from "@redux/action/System";
import {errorShow} from "@redux/action/Error";

const useStyles = makeStyles({
    main: {
        display: 'flex',
        padding: 0,
        '&>:first-of-type': {
            flexBasis: '35%'
        }
    },
    profile: {
        boxShadow: '5px 0px 7px -5px #00000033'
    }
})

const ClientDetailsForm = ({id}) => {
    const [user, setUser] = useState(null)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startLoad());
        UsersAPI.getUserById(id)
            .then(res => setUser(res.data))
            .catch(err => dispatch(errorShow(err.response.data)))
            .finally(() => dispatch(stopLoad()))
        // eslint-disable-next-line
    }, [id])

    const classes = useStyles();
    return (
        <Card className={classes.main}>
            <div className={classes.profile}>
                {user && <ProfileSideBar email={user.email}
                                         id={user.id}
                                         name={user.name}
                                         phones={user.contacts}
                                         photo={user.urlAvatar}/>
                }
            </div>
            <SettingClient/>
        </Card>
    )
}

ClientDetailsForm.defaultProps = {
    id: 2
}

ClientDetailsForm.prototype = {
    id: PropTypes.number.isRequired
}

export default ClientDetailsForm;