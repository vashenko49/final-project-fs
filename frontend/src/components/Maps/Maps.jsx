import React from "react";
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';

const Maps = ({google, height, position}) => {

    return (
        <Map
            google={google}
            zoom={13}
            containerStyle={{
                width: '100%',
                height: height,
                position: 'relative',
                boxShadow: '0px 1px 3px #00000033',
                borderRadius: '20px',
                overflow: 'hidden'
            }}
            initialCenter={position}
        >
            <Marker position={position}/>
        </Map>
    )
}


export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
})(Maps);