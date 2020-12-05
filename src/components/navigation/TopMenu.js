/* copyright (c) 2020 Otso Kurkela */

//import react and 3rd party components
import React, { useState, useContext } from 'react';

//import 1st party components
import Sidebar from './Sidebar';

//import stylesheets
import './navigation.css';

const TopMenu = (props) => {
    

    return (
        <div className="topmenu" id="topmenu">
            
            <Sidebar pageWrapId={'page-wrap'} outerContainerId={'topmenu'} />
            <div className="outer-topmenu">
             <h2 style={{color: '#ffffff'}}>Local group</h2>
                <div className="inner-topmenu">
                    <img src="#" alt="logo" className="logo" height="50" width="50" style={{backgroundColor: 'white'}}/>
                </div>
            
            </div>
            
        </div>
    )
}
export default TopMenu;
