/* copyright (c) 2020- Otso Kurkela */

// import React and 3rd party components
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

//import stylesheets
import './../navigation.css';

const BottomMenu = (props) => {

const [bottomLinks, useBottomLinks] = useState(props.bottomLinks);
    return (
        <div className="bottom-nav">
    {bottomLinks.map((link, i) => {
        return (
        <Link to={link.link}><p className="bottom-link">{link.name}</p></Link>
        );
    })}


        </div>
    );
    }
export default BottomMenu;