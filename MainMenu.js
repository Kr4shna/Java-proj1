// src/components/MainMenu.js
import React from 'react';
import { Link } from 'react-router-dom';

const MainMenu = () => {
    return (
        <nav>
            <h2>Main Menu</h2>
            <ul>
                <li><Link to="/bus-routes">Bus Routes</Link></li>
                <li><Link to="/driver-profile">Driver Profile</Link></li>
                <li><Link to="/student-profile">Student Profile</Link></li>
                <li><Link to="/notifications">Notifications</Link></li>
            </ul>
        </nav>
    );
};

export default MainMenu;
