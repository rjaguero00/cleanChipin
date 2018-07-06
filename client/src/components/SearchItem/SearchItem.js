import React, { Component } from 'react';
import API from '../../utils/API.js';
import Geocode from "react-geocode";
import SearchModal from '../SearchModal/SearchModal.js';

// set Google Maps Geocoding API 
Geocode.setApiKey("AIzaSyCqQDw0OBij-vioCfgLN0eTDS12Q_sYbJw");

// Enable or disable logs. Its optional.
Geocode.enableDebug();

class SearchItem extends Component {
    //Map lattitude and longitude State
    state = {
        userID: "",
        lat: "",
        lng: ""
    };

    // Save/Favorite volunteer activity
    saveActivity = (event) => {
        event.preventDefault();
        const activityData = {
            title: this.props.title,
            body: this.props.body,
            contact: this.props.contact,
            location: this.props.location,
            hours: this.props.hours
        }
        console.log(activityData);
        // Call axios api with activity data to store in database
        API.saveActivity(activityData);

    }

    // Save a volunteer activity as one the user is attending
    saveAttending = (event) => {
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
            <div className="card resultItem">
                <div className="card-body">
                    <h5 className="card-title ">
                        <a href="">{this.props.title}</a></h5>
                    <p className="card-text">Description: {this.props.body}</p>
                    <p className="card-text">Contact: {this.props.contact}</p>
                    <p className="card-text">Location: {this.props.location}</p>
                    <p className="card-text">Hours: {this.props.hours}</p>
                    <button onClick={this.saveAttending} className="btn btn-primary">Attend</button>
                    <button onClick={this.saveActivity} className="btn btn-primary">Save</button>

                    <SearchModal 
                    id={this.props.id}
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

export default SearchItem;