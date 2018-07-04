import React from "react";
import { Link } from "react-router-dom";

import "./Sidebar.css";
import CreateEventsModal from "../CreateEventModal";

const Sidebar = props => (
    <nav id="sidebar">

        <ul className="list-unstyled components">
            <p>Organization/User Name</p> <img src="https://www.alaskapacific.edu/wp-content/uploads/2015/11/placeholder_profile_photo-200x200.png" className="rounded mx-auto d-block" alt="..." />

            <CreateEventsModal />
            <li>
                <Link to="/Dashboard/Saved" className={
                    props.currentPage === "/Dashboard/Saved" ? "active" : ""
                }
                >
                    Saved Events</Link>
            </li>
        </ul>

        <ul>
            Hours: 0 || Points: 0
        </ul>
    </nav>
);

export default Sidebar;
