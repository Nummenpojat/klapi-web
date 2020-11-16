/*
Copyright (c) 2020 Otso Kurkela & Elias Mäkelä
*/

// import React and 3rd party components
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// import stylesheets
import './navigation.css';

// Component for bottom navigation bar
const BottomNav = () => {
    const [dashFloat, setDashFloat] = useState('');

    const swapDash = (float) => {
        if (float === "left") {
            setDashFloat('0');
        } else if (float === "center") {
            setDashFloat('33%');
        } else if (float === "right") {
            setDashFloat('66%')
        }

        document.querySelector("#bottom-dash").style.marginLeft = dashFloat;
    }
    return (
        <nav className="bottom-nav">
            <div className="nav-links">
                <Link to="/map" onClick={() => swapDash("left")}>
                    <li>Sijainti</li>
                </Link>
                <Link to="/tasks" onClick={() => swapDash("center")}>
                    <li>Tehtävät</li>
                </Link>
                <Link to="/checklists" onClick={() => swapDash("right")}>
                    <li>Rastilistat</li>
                </Link>
            </div>
            <div id="bottom-dash"></div>
        </nav>
    );
}

export default BottomNav;