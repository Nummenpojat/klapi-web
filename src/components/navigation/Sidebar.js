/* copyright (c) 2020 Otso Kurkela*/
import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './../../styles/Sidebar.css';

const Sidebar = props => {
    return (
        <Menu>
            <a className="menu-item" href="/salads">
                Profiili
                </a>
            <a className="menu-item" href="/pizzas">
                Asetukset
                </a>
            <a className="menu-item" href="/desserts">
                Leiri
                 </a>
        </Menu>
    );
};

export default Sidebar;
