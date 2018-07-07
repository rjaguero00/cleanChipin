import React from "react";
import Logo from './Logo.png';
import "./Footer.css";

const Footer = () => (
    <footer className="footer">
        <img id="footer-logo" src={Logo} alt="logo"/>
    </footer>
);

export default Footer;