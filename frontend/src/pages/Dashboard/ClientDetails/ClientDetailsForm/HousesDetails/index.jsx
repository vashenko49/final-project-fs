import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Photos from "./Photos";
import Details from "./Details";
import {useSelector} from "react-redux";
import ChooseHouseSettingSelector from "@redux/selector/ChooseHouseSetting";

const useStyles = makeStyles({
    root: {
        display: 'flex',
        padding: '20px'
    },
    photos: {
        width: '45%'
    },
    details: {
        width: '55%',
        marginLeft: '30px',
    },
})

const HousesDetails = () => {
    const classes = useStyles();
    const house = useSelector(ChooseHouseSettingSelector.getChooseHouseSetting);

    return (
        <div className={classes.root}>
            <div className={classes.photos}>
                <Photos />
            </div>
            <div className={classes.details}>
                <Details house={house}/>
            </div>
        </div>
    )
}

export default HousesDetails;