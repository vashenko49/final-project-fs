import React, {useEffect, useState} from 'react';
import ClientDetailsForm from "./ClientDetailsForm";
import {makeStyles} from "@material-ui/core/styles";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import UsersAPI from "../../../services/UsersAPI";
import {startLoad, stopLoad} from "../../../redux/action/System";
import {errorShow} from "../../../redux/action/Error";

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
    const [user, setUser] = useState(null);
    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startLoad());
        UsersAPI.getUserById(id)
            .then(res => setUser(res.data))
            .catch(err => dispatch(errorShow(err.response.data)))
            .finally(() => dispatch(stopLoad()))
        // eslint-disable-next-line
    }, [id])

    return (
        <>
            {user &&
            (
                <>
                    <p className={classes.clientName}>{user.name}</p>
                    <ClientDetailsForm user={user}/>
                </>
            )
            }
        </>
    );
}

export default ClientDetails;