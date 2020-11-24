import React from 'react';
import Sidebar from './Sidebar';
import './../../styles/Topmenu.css';

const TopMenu = () => {
    return (
        <div className="topmenu">
            <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
        </div>
    )
}
export default TopMenu;