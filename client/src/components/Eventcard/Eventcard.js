import React from "react";
import "./Eventcard.css";

const Eventcard = () => (

    <div className="card">
        <div className="card-body">
            <h5 className="card-title"><strong>Event Title: </strong><span id="title"></span></h5>
            <hr />
            <p className="card-text"><strong>Description: </strong><span id="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet diam tortor, id consequat mauris ullamcorper eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </span></p>
            <p className="card-title"><strong>Location: </strong><span id="location"></span></p>
            <p className="card-title"><strong>Contact: </strong><span id="contact"></span></p>
            <a href="#" className="btn btn-primary">Not Attending</a>
        </div>
    </div>
);

export default Eventcard;
