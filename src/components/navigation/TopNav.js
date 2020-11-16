/*
Copyright (c) 2020 Otso Kurkela
*/

// import React and 3rd party components
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


// import custom components

// import stylesheets
import './navigation.css';

// component for top navigation bar
const TopNav = () => {
    const [dropdownClicked, setDropdownClicked] = useState(false);

    const handleBurgerClick = () => {
        const dropdown = document.querySelector("#top-dropdown");

        if (dropdownClicked === false) {
            dropdown.style.animation = 'navLinkFade 0.5s forward 2s';
            dropdown.classList.remove("top-dropdown-invisible");
            dropdown.classList.add("top-dropdown-visible");
            setDropdownClicked(true);
        }
        if (dropdownClicked) {
            dropdown.style.animation = 'navLinkFade 0.5s forward 2s';
            dropdown.classList.remove("top-dropdown-visible");
            dropdown.classList.add("top-dropdown-invisible");
            setDropdownClicked(false);
        }
    }
    return (
        <>
            <div className="top-nav">

                <Link to="/" className="link"><div className="logo"><p>logo</p></div></Link>
                <Link to="/" className="link"><h3 className="organization">Hyvinkään Nummenpojat</h3></Link>
                <div className="top-nav-burger" onClick={() => handleBurgerClick()}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <div id="top-dropdown" className="top-dropdown-invisible">
                <p>Top dropdown elements</p>
            </div>

        </>
    )
}

export default TopNav;