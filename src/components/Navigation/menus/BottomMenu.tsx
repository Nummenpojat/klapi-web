/* copyright (c) 2020- Otso Kurkela */

// import React and 3rd party components
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import BottomLinks from './bottomLinks';

//import stylesheets
import './../navigation.css';


export default (props:any) => {
    const klapiBottomLinks = new BottomLinks;
    const [scoutMode, setScoutMode] = useState(props.scoutMode);
    const [bottomLinks, setBottomLinks] = useState(klapiBottomLinks.getLinks(scoutMode));
    
    return (
        <div className="bottom-nav">
    
        {
           bottomLinks.map((bottomLink, i) => {
               return (
                   <Link to={bottomLink.link} className="bottom-link" key={i}>{bottomLink.title}</Link>
               );
           })
        }

        </div>
    );

    }