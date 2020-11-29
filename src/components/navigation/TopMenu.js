/* copyright (c) 2020 Otso Kurkela */
import React from 'react';
import Sidebar from './Sidebar';
import './../../styles/navigation.css';

const TopMenu = () => {
    return (
        <div className="topmenu" id="topmenu">
            
            <Sidebar pageWrapId={'page-wrap'} outerContainerId={'topmenu'} />
            <div className="outer-topmenu">
                <h2 style={{color: '#ffffff'}}>Nummenpojat</h2>
                <div className="inner-topmenu">
                    <img src="#" alt="logo" className="logo" height="50" width="50" style={{backgroundColor: 'white'}}/>
                </div>
            
            </div>
            
        </div>
    )
}
export default TopMenu;
