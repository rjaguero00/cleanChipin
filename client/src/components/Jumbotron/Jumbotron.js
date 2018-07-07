import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
    <div className="jumbotron" id="jumbo-image" style ={ { backgroundImage: "url('http://images.globes.co.il/images/NewGlobes/big_image_800/2016/w800jpg.2016925T144215.jpg')" } }>
        <h2 id="jumbo-heading">Welcome to ChipIn!</h2>
    </div>
);

export default Jumbotron;