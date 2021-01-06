/* copyright (c) 2020- Otso Kurkela */

// import React and 3rd party components
import {useEffect} from 'react';
import { Link } from 'react-router-dom';

//import stylesheets
import './../navigation.css';

export default (props:any) => {
// links to apply in bottom menu are got from parent components

return (
        <div className="bottom-nav">
    
        {
            Object.keys(props.bottomLinks).map((bottomLink, i) => {
                return (
                    <Link key={i} to={props.bottomLinks[bottomLink].link}><p className="bottom-link">{props.bottomLinks[bottomLink].title}</p></Link>
                );
            })
        }

        </div>
    );

    }