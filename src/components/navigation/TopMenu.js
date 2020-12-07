/* copyright (c) 2020 Otso Kurkela */

//import react and 3rd party components
import React, { useState, useContext } from 'react';

//import 1st party components

//import stylesheets
import './navigation.css';

const TopMenu = (props) => {
    
const toggleDropdown = (dropdown) => {
    if (dropdown === "none") {
        document.querySelector("#dropdown-menu").style.display = "flex";
    } else {
        document.querySelector("#dropdown-menu").style.display = "none";
    }
}
    return (
        <>
        <div className="topmenu" id="topmenu">
            
            <div className="burger" onClick={() => {
            let dropdownMenuDisplay = document.querySelector("#dropdown-menu").style.display;
            toggleDropdown(dropdownMenuDisplay);
        }}>
                {
                    [0, 1, 2].map(() => {
                        return (<div></div>);
                    })
                }
            </div>
            <h2 style={{color: '#ffffff'}}>Local group</h2>
               
            <img src="#" alt="logo" className="logo" height="50" width="50" style={{backgroundColor: 'white'}}/>
            
        </div>
        <div className="dropdown-menu" id="dropdown-menu" >
            <p>Dropdown item</p>
            <p>Dropdown item</p>
            <p>Dropdown item</p>
        </div>
        </>
    )
}
export default TopMenu;
