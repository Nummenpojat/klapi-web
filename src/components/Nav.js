import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className="bottom-nav">
            <ul className="nav-links">
                <Link to="/sijainti">
                    <li>Sijainti</li>
                </Link>
                <Link to="/tehtavat">
                    <li>Tehtävät</li>
                </Link>
                <Link to="/rastilistat">
                    <li>Rastilistat</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;