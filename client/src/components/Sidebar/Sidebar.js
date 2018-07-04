import React from "react";
import "./Sidebar.css";
import CreateEventsModal from "../CreateEventModal";

const Sidebar = () => (
    <nav id="sidebar">
        {/* <div className="sidebar-header">
            <h3>Organization/User Name</h3>
        </div> */}

        <ul className="list-unstyled components">
            <p><span id="user-name"></span></p> <img src="https://www.alaskapacific.edu/wp-content/uploads/2015/11/placeholder_profile_photo-200x200.png" className="rounded mx-auto d-block" alt="..." />

            {/* <li className="active">
                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Events</a>
                <ul className="collapse list-unstyled" id="homeSubmenu">
                    <li>
                        <a href="">Saved Events</a>
                    </li>
                    <li>
                        <a href="">Post Events</a>
                    </li>
                    <li>
                        <a href="">Home 3</a>
                    </li>
                </ul>
            </li> */}
            <CreateEventsModal />
            <li>
                <a href="">Post Events</a>
                <a href="">Saved Events</a>
                {/* <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Pages</a>
                <ul className="collapse list-unstyled" id="pageSubmenu">
                    <li>
                        <a href="">Page 1</a>
                    </li>
                    <li>
                        <a href="">Page 2</a>
                    </li>
                    <li>
                        <a href="">Page 3</a>
                    </li>
                </ul> */}
            </li>
            {/* <li>
                <a href="">Portfolio</a>
            </li>
            <li>
                <a href="">Contact</a>
            </li> */}
        </ul>

        <ul>
            Hours: <span id="hours"></span> || Points: <span id="points"></span>
        </ul>
    </nav>
);

export default Sidebar;
