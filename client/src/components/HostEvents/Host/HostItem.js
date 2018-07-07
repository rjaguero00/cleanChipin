import React, { Component } from 'react';
import API from '../../../utils/API.js';


class HostItem extends Component {
    handleLoad = () => (
        this.props.loadActivities(this.props)
    );
    // Save a volunteer activity as one the user is attending
    deleteHostActivity = (event) => {
        event.preventDefault();
        API.deleteHostActivity(this.props.id)
            .then(this.handleLoad())
            // .then(res => console.log("deleted"))
            .catch(err => console.log(err));
    }
    updateAllHours = (event) => {
        event.preventDefault();
        API.updateAllHours(this.props.id)
            .then(res => console.log("verified all hours"))
            .catch(err => console.log(err));
    }


    render() {
        return (
            <div className="card resultItem">
                <div className="card-body">
                    <h5 className="card-title ">
                        <a href="">{this.props.title}</a></h5>
                    <p className="card-text">Location: {this.props.location}</p>
                    <button onClick={this.updateAllHours} className="btn btn-primary">Verify All Hours</button>
                    <button onClick={this.verify} className="btn btn-primary">Verify Hours</button>
                    <button onClick={this.deleteHostActivity} className="btn btn-primary">Remove Post</button>

                    {/* <Modal
                        id={this.props.id}
                        contact={this.props.contact}
                    ></Modal> */}

                </div>
            </div>
        )
    }
}

export default HostItem;