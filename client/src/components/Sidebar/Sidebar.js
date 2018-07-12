import React from "react";
import { Link } from "react-router-dom";
import { FacebookIcon, FacebookShareButton, TwitterShareButton, TwitterIcon, LinkedinShareButton, LinkedinIcon, } from 'react-share';

import "./Sidebar.css";
import CreateEventsModal from "../CreateEventModal";

const Sidebar = props => (

    <nav id="sidebar">

        <ul className="list-unstyled components">
            <p><span id="user-name"></span></p> <img src={props.imageString} className="rounded mx-auto d-block" alt="..." height="200px" width="200px" />
            <h2>{props.name}</h2>
            <li>
                <Link to="/Dashboard" className={
                    props.currentPage === "/Dashboard" ? "active" : ""
                }
                >
                    Attending Events</Link>
            </li>
            <li>
                <Link to="/Dashboard/Saved" className={
                    props.currentPage === "/Dashboard/Saved" ? "active" : ""
                }
                >
                    Saved Events</Link>
            </li>
            <li>
                <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Hosting</a>
                <ul className="collapse list-unstyled" id="pageSubmenu">
                    <li>
                        <Link to="/Dashboard/Host" className={
                            props.currentPage === "/Dashboard/Host" ? "active" : ""
                        }
                        >
                            My Events</Link>
                    </li>
                    <li className="modalButton" align="center">
                        <CreateEventsModal />
                    </li>
                </ul>
            </li>
        </ul>

        <ul>
            Hours: <span id="hours">{props.hours}</span> || Points: <span id="points">{props.points}</span>
        </ul>
        <br></br>
        <div className="shareTitle" align="center">
            <h4>Share your points</h4>
        </div>

        <div className="socialcontainer" align="center">
            <div className="mediadiv">
                <FacebookShareButton
                    className="socialBtn"
                    url='https://afternoon-wildwood-32656.herokuapp.com/'
                    quote={props.socialmsg}
                    hashtag='#Chipin'
                    className="fbsharebutton">
                    <FacebookIcon className="fbIcon"
                        size={30}
                        round />
                </FacebookShareButton>
            </div>
            <div className="mediadiv">
                <TwitterShareButton
                    className="socialBtn"
                    url="https://afternoon-wildwood-32656.herokuapp.com/"
                    title={props.socialmsg}
                    className="twtsharebutton">
                    <TwitterIcon
                        size={30}
                        round />
                </TwitterShareButton>
            </div>
        </div>
    </nav>
);

export default Sidebar;
