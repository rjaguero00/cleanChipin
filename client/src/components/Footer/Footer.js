import React from "react";
import Logo from './Logo.png';
import "./Footer.css";

const Footer = () => (
    <footer className="footer">
        <div className="footer-bottom">
            <img id="footer-logo" src={Logo} alt="logo"/>
        </div>
    </footer>
);

export default Footer;