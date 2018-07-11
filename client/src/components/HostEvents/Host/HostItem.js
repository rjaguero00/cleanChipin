import React, { Component } from 'react';
import API from '../../../utils/API.js';


class HostItem extends Component {

    // Save a volunteer activity as one the user is attending
    deleteHostActivity = (event) => {
        event.preventDefault();
        API.deleteHostActivity(this.props.id
        ).then(() => {
            this.props.recollectData();
        })
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
                        {this.props.title}</h5>
                    <p className="card-text">Location: {this.props.location}</p>
                    <button onClick={this.updateAllHours} className="btn btn-info">Verify All Points</button>
                    <button onClick={this.deleteHostActivity} className="btn btn-info">Remove Post</button>

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