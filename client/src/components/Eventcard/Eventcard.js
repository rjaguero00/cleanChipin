import React, { Component } from 'react';
import "./Eventcard.css";
import API from '../../utils/API.js';
import Geocode from "react-geocode";
import SearchModal from '../SearchModal/SearchModal.js';

// set Google Maps Geocoding API 
Geocode.setApiKey("AIzaSyCqQDw0OBij-vioCfgLN0eTDS12Q_sYbJw");

// Enable or disable logs. Its optional.
Geocode.enableDebug();

class Eventcard extends Component {
    //Map lattitude and longitude State
    state = {
        lat: "",
        lng: ""
    };

    // Save a volunteer activity as one the user is attending
    saveAttending = (event) => {
        event.preventDefault();
        const attendingData = {
            title: this.props.title,
            body: this.props.body,
            contact: this.props.contact,
            location: this.props.location,
            hours: this.props.hours
        }
        console.log(attendingData);
        API.saveAttending(attendingData);
    }


    componentDidMount() {
        // Convert address from database into latitude and longitude with react-geocode package in order for google maps api to use
        Geocode.fromAddress(this.props.location).then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
                // set the Map State with lat and lng results 
                this.setState({ lat: lat })
                this.setState({ lng: lng })
            },
            error => {
                console.error(error);
            }
        );

    }

    render() {
        return (
            <div className="card result-item">
                <div className="card-body">
                    <h5 className="card-title ">
                        <a href="">{this.props.title}</a></h5>
                    <p className="card-text">Description: {this.props.body}</p>
                    <p className="card-text">Contact: {this.props.contact}</p>
                    <p className="card-text">Location: {this.props.location}</p>
                    <p className="card-text">Hours: {this.props.hours}</p>
                    <button onClick={this.saveAttending} className="btn btn-primary">Not Attending</button>
                    <SearchModal
                        title={this.props.title}
                        body={this.props.body}
                        contact={this.props.contact}
                        location={this.props.location}
                        hours={this.props.hours}
                        lat={this.state.lat}
                        lng={this.state.lng}></SearchModal>
                </div>
            </div>
        )
    }
}

export default Eventcard;
