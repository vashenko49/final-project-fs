import React, {useState} from "react";
import * as PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import House from "../House";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    housesList: {
        overflow: 'auto',
        flexWrap: 'nowrap'
    },
}))

const HouseList = ({houses, onSelectHouse, children})=>{
    const classes = useStyles();
    const [selectHouse, setSelectHouse] = useState(0);

    const handleSelectHouse = (idx) => {
        setSelectHouse(idx);
        onSelectHouse && onSelectHouse(idx);
    }

    return(
        <Grid container spacing={1} className={classes.housesList}>
            {houses.map((i, idx) => (
                <Grid item key={idx}>
                    <ButtonBase onClick={() => handleSelectHouse(idx)}>
                        <House
                            contractDate={i.contractDate}
                            isActive={selectHouse === idx}
                            address={i.address}
                            img={i.img}
                            status={i.status}
                            isCreated={false}
                            houseId={i.houseId}
                        />
                    </ButtonBase>
                </Grid>
            ))}
            {children}
        </Grid>
    )
}

HouseList.defaultProps = {
    houses: []
}

HouseList.propTypes = {
    houses: PropTypes.array.isRequired,
    onSelectHouse: PropTypes.func
}

export default HouseList;