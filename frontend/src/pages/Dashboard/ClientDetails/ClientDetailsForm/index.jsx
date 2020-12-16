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
import HousesDetails from "./HousesDetails";

const useStyles = makeStyles({
    root: {
        padding: 0
    },
    main: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    profile: {
        boxSizing: 'border-box',
        boxShadow: '5px 5px 7px -5px #00000033',
        height: 'max-content',
        width: '35%'
    },
    settingClient: {
        width: '65%'
    }

})

const ClientDetailsForm = ({id}) => {
    const [user, setUser] = useState(null)
    const [isChooseHouses, setIsChooseHouses] = useState(null)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startLoad());
        UsersAPI.getUserById(id)
            .then(res => setUser(res.data))
            .catch(err => dispatch(errorShow(err.response.data)))
            .finally(() => dispatch(stopLoad()))
        // eslint-disable-next-line
    }, [id])

    const handleIsChooseHouses = (flag) => {
        setIsChooseHouses(flag)
    }

    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <div className={classes.main}>
                <div className={classes.profile}>
                    {user && <ProfileSideBar email={user.email}
                                             id={user.id}
                                             name={user.name}
                                             phones={user.contacts}
                                             photo={user.urlAvatar}/>
                    }
                </div>
                <div className={classes.settingClient}>
                    <SettingClient handleIsChooseHouses={handleIsChooseHouses}/>
                </div>
            </div>
            {isChooseHouses ? <HousesDetails/> : null}
        </Card>
    )
}

ClientDetailsForm.defaultProps = {
    id: 2
}

ClientDetailsForm.propTypes = {
    id: PropTypes.number.isRequired
}

export default ClientDetailsForm;