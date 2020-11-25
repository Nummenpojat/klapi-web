import React from 'react';
import { Link } from 'react-router-dom';

const BottomMenu = () => {
    return (
        <div className="bottom-nav">
            <Link to="/tasks"><p>Tehtävät</p></Link>
            <Link to="/checklists"><p>Rastilistat</p></Link>
            <Link to="/map"><p>Kartta</p></Link>
        </div>
    );
}

export default BottomMenu;