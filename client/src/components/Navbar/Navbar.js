import React from "react";
import { Link } from "react-router-dom";
import OrgSignUp from "../OrgSignUp";
import UserSignUp from "../UserSignUp";
import LoginModal from "../LoginModal";
import Logo from './Logo.png';
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-light">
        <Link className="navbar-brand" to="/">
            <img id="logo" src={Logo} alt="logo"/>
        </Link>
    
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li>
                    <LoginModal />
                </li>
                <li>
                    <UserSignUp />
                </li>
                <li
                    className={
                        window.location.pathname === "/" ||
                            window.location.pathname === "/about"
                            ? "nav-item active"
                            : "nav-item"
                    }>
                    <Link to="/" className="nav-link about">
                        About
                    </Link>
                </li>
                <li
                    className={
                        window.location.pathname === "/Dashboard"
                            ? "nav-item active"
                            : "nav-item"
                    }>
                    <Link to="/Dashboard" className="nav-link">
                        Dashboard
                    </Link>
                </li>
                <li
                    className={
                        window.location.pathname === "/SearchEvents"
                            ? "nav-item active"
                            : "nav-item"
                    }>
                    <Link to="/SearchEvents" className="nav-link">
                        Search Events
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
);

export default Navbar;