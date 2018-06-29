import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
    <div className="jumbotron" style ={ { backgroundImage: "url('http://images.globes.co.il/images/NewGlobes/big_image_800/2016/w800jpg.2016925T144215.jpg')" } }>
        <h2 id="jumbo-heading">Chipin</h2>
        <p id="jumbo-text">Sample Text</p>
    </div>
);

export default Jumbotron;