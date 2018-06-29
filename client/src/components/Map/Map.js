import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

class Maps extends Component {
    render(){
const middle = {
    lat: parseFloat(this.props.lat),
    lng: parseFloat(this.props.lng)
}

console.log(middle);
        return(
            <GoogleMap
                defaultZoom={8}
                    defaultCenter={middle}
            >
                <Marker
                    position={middle}
                />
            </GoogleMap>
        );
    }
}
export default withGoogleMap(Maps);