/* copyright (c) 2020 Otso Kurkela */

//import react and 3rd party components
import React, { useState, useContext } from 'react';

//import 1st party components

//import stylesheets
import './navigation.css';

const TopMenu = (props) => {
    
    // function for toggling between dropdown-visible and dropdown-invisible classes
const toggleDropdown = (dropdown) => {

   if(dropdown.classList.contains("dropdown-invisible")) {
       dropdown.classList.remove("dropdown-invisible");
       dropdown.classList.add("dropdown-visible");
   } 

   else if (dropdown.classList.contains("dropdown-visible")){
       dropdown.classList.remove("dropdown-visible");
       dropdown.classList.add("dropdown-invisible");
   }

    else {
       console.log("Error");
   }
}
    return (
        <>
        <div className="topmenu" id="topmenu">
            
            <div className="burger" onClick={() => {
                toggleDropdown(document.querySelector("#dropdown"));
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
        <div className="dropdown-invisible" id="dropdown">
            <p>Dropdown item</p>
            <p>Dropdown item</p>
            <p>Dropdown item</p>
        </div>
        </>
    )
}
export default TopMenu;
