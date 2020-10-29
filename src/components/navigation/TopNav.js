// import React and 3rd party components
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


// import custom components

// import stylesheets
import './navigation.css';

const TopNav = () => {
    const [dropdownClicked, setDropdownClicked] = useState(false);

    const handleBurgerClick = () => {
        const dropdown = document.querySelector("#top-dropdown");

        if (dropdownClicked == false) {
            dropdown.classList.remove("top-dropdown-invisible");
            dropdown.classList.add("top-dropdown-visible");
            setDropdownClicked(true);
        }
        if (dropdownClicked) {
            dropdown.classList.remove("top-dropdown-visible");
            dropdown.classList.add("top-dropdown-invisible");
            setDropdownClicked(false);
        }
    }
    return (
        <>
            <div className="top-nav">
                <div className="logo"><p>logo</p></div>
                <h3 className="organization">Hyvinkään Nummenpojat</h3>
                <div className="top-nav-burger" onClick={() => handleBurgerClick()}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className="dropdown-container">
                <div id="top-dropdown" className="top-dropdown-invisible">
                    <p>Top dropdown elements</p>
                </div>
            </div>

        </>
    )
}

export default TopNav;