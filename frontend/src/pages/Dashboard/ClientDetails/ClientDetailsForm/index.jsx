import React, {useState} from 'react';
import Card from "@components/generic/Card";
import ProfileSideBar from "./ProfileSideBar";
import SettingClient from "./SettingClient";
import makeStyles from "@material-ui/core/styles/makeStyles";
import * as PropTypes from "prop-types";
import HousesDetails from "./HousesDetails";
import DocumentsDetails from "./DocumentsDetails";
import RentDetails from "./RentDetails";

const useStyles = makeStyles({
    root: {
        padding: 0,
        marginBottom: '30px'
    },
    main: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    profile: {
        boxSizing: 'border-box',
        boxShadow: '5px 0 7px -5px #00000033',
        height: 'max-content',
        width: '35%'
    },
    settingClient: {
        width: '65%'
    }
})

const ClientDetailsForm = ({user}) => {
    const [isChooseHouses, setIsChooseHouses] = useState(false);
    const [isChooseDocuments, setIsChooseDocuments] = useState(false);
    const [isChooseRent, setIsChooseRent] = useState(false);

    const handleIsChooseHouses = (flag) => {
        setIsChooseHouses(flag)
    }
    const handleIsChooseDocuments = (flag) => {
        setIsChooseDocuments(flag)
    }
    const handleIsChooseRent = (flag) => {
        setIsChooseRent(flag)
    }

    const classes = useStyles();
    return (
        <>
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
                        <SettingClient
                            handleIsChooseHouses={handleIsChooseHouses}
                            handleIsChooseDocuments={handleIsChooseDocuments}
                            handleIsChooseRent={handleIsChooseRent}
                        />
                    </div>
                </div>
                {isChooseHouses ? <HousesDetails/> : null}
            </Card>
            {isChooseDocuments ? <DocumentsDetails/> : null}
            {isChooseRent ? <RentDetails/> : null}
        </>
    )
}

ClientDetailsForm.propTypes = {
    user: PropTypes.object.isRequired
}

export default ClientDetailsForm;