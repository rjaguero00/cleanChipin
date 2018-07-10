import React from "react";
import { Link } from "react-router-dom";

import "./Sidebar.css";
import CreateEventsModal from "../CreateEventModal";

const Sidebar = props => (

    <nav id="sidebar">

        <ul className="list-unstyled components">
            <p><span id="user-name"></span></p> <img src={props.imageString} className="rounded mx-auto d-block" alt="..." />


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
    </nav>
);

export default Sidebar;
