import React from "react";
import "./Eventcard.css";

const Eventcard = () => (

    <div className="card">
        <div className="card-body">
            <h5 className="card-title">Event title</h5>
            <p className="card-text">Description: Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <p className="card-title">Location: 1234 Wildcat Drive</p>
            <p className="card-title">Contact: 123-456-7890</p>
            <a href="#" className="btn btn-primary">Not Attending</a>
        </div>
    </div>
);

export default Eventcard;
