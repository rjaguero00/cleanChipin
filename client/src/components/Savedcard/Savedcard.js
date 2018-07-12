import React, { Component } from 'react';
import "./Savedcard.css";
import API from '../../utils/API.js';
import Geocode from "react-geocode";
import SearchModal from '../SearchModal/SearchModal.js';

// set Google Maps Geocoding API 
Geocode.setApiKey("AIzaSyCqQDw0OBij-vioCfgLN0eTDS12Q_sYbJw");

// Enable or disable logs. Its optional.
Geocode.enableDebug();

class Savedcard extends Component {
    //Map lattitude and longitude State
    state = {
        userID: "",
        lat: "",
        lng: "",
        userID: ""
    };
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
        API.activeUser()
            .then(res => {
                if (res.data.success) {
                    let userid = res.data.user.id
                    this.setState({ userID: userid });
                    this.loadActivities();
                };
            })
            .catch(err => console.log(err));

    }

    // Save/Favorite volunteer activity
    updateSavedActivity = (event) => {
        event.preventDefault();
        API.updateSavedActivity({
            id: this.props.id,
            UserId: this.state.userID
        }).then(() => {
            this.props.recollectData();
        })
    }

    // Save a volunteer activity as one the user is attending
    saveAttending = (event) => {
        console.log("id is: " + this.props.id);
        console.log("userID is: " + this.state.userID);
        console.log(this.state.userID);
        event.preventDefault();
        API.saveAttending({
            id: this.props.id,
            UserId: this.state.userID
            // hours: this.props.hours
        })
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
        // this.loadAttendingActivities();
        // Get userID of logged-in user and set as state
        API.activeUser()
            .then(res => {
                if (res.data.success) {
                    let userid = res.data.user.id
                    console.log(userid);
                    this.setState({ userID: userid });
                    console.log(this.state);
                };
            })
            .catch(err => console.log(err));

    }


    render() {
        return (
            <div className="card result-item">
                <div className="card-body">
                    <h5 className="card-title ">
                        <SearchModal id={this.props.id}
                            title={this.props.title}
                            body={this.props.body}
                            contact={this.props.contact}
                            location={this.props.location}
                            hours={this.props.hours}
                            lat={this.state.lat}
                            lng={this.state.lng}></SearchModal>
                    </h5>
                    <p className="card-text">Description: {this.props.body}</p>
                    <p className="card-text">Contact: {this.props.contact}</p>
                    <p className="card-text">Location: {this.props.location}</p>
                    <p className="card-text">Date: {this.props.time}</p>
                    <p className="card-text">Points: {this.props.points}</p>
                    <button onClick={this.saveAttending} className="btn btn-info">Attend</button>
                    <button onClick={this.updateSavedActivity} className="btn btn-info">Remove</button>
                    {/* <SearchModal
                        title={this.props.title}
                        body={this.props.body}
                        contact={this.props.contact}
                        location={this.props.location}
                        time={this.props.time}
                        points={this.props.points}
                        lat={this.state.lat}
                        lng={this.state.lng}></SearchModal> */}
                </div>
            </div>
        )
    }
}

export default Savedcard;