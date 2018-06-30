import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

class Maps extends Component {


    render(){
        // parse latitude and longitude props into numbers and store in an object so it could be read by google maps api 
        const middle = {
            lat: parseFloat(this.props.lat),
            lng: parseFloat(this.props.lng)
        };

        // return map with marker centered on volunteer activity address
        return(
            <GoogleMap
                defaultZoom={14}
                    defaultCenter={middle}
            >
                <Marker
                    position={middle}
                />
            </GoogleMap>
        );
    };
}
export default withGoogleMap(Maps);