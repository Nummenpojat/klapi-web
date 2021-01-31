/* copyright (c) 2020- Otso Kurkela */

// import React and 3rd party components
import { stringify } from 'querystring';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

//import stylesheets
import './../navigation.css';


export default (props:any) => {
    const [scoutMode, setScoutMode] = useState(props.scoutMode);
    const [bottomLinks, setBottomLinks] = useState({})

    interface bottomlinks {
        titles: string[];
        links: string[];
    }

    if (scoutMode === "weeklyProgramme") {
        setBottomLinks({
            
        })
    }
    return (
        <div className="bottom-nav">
    
        {
           
        }

        </div>
    );

    }