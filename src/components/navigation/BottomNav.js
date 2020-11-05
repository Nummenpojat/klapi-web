/*
Copyright (c) 2020 Otso Kurkela & Elias Mäkelä
*/

// import React and 3rd party components
import React from 'react';
import { Link } from 'react-router-dom';

// import stylesheets
import './navigation.css';

// Component for bottom navigation bar
const BottomNav = () => {
    return (
        <nav className="bottom-nav">

            <Link to="/sijainti">
                <li>Sijainti</li>
            </Link>
            <Link to="/tehtavat">
                <li>Tehtävät</li>
            </Link>
            <Link to="/rastilistat">
                <li>Rastilistat</li>
            </Link>

        </nav>
    );
}

export default BottomNav;