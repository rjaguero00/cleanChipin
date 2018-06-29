import React, { Component } from 'react';
import API from '../../utils/API.js';
import SearchModal from '../SearchModal/SearchModal.js';

class SearchItem extends Component {

    saveActivity = (event) => {
        const activityData = {
            title: this.props.title,
            body: this.props.body,
            contact: this.props.contact,
            location: this.props.location,
            hours: this.props.hours
        }
        console.log(activityData);
        API.saveActivity(activityData);
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
                    <button onClick={this.saveActivity} className="btn btn-primary">Save</button>
                    <SearchModal 
                    title={this.props.title}
                    body={this.props.body}
                    contact={this.props.contact}
                    location={this.props.location} 
                    hours={this.props.hours}>{this.state.modalIsOpen}</SearchModal>                
                </div>
            </div>
        )
    }
}

export default SearchItem;