/* copyright (c) 2020- Otso Kurkela */

// import 3rd party components
import { Link } from 'react-router-dom';

// dropdown menu
export default () => {
    /* dropdown has dropdown-invisible -class which turns dropdown invisible in CSS. 
    In BurgerMenu, there is function that makes dropdown visible 
    when hamburger is clicked.*/
    
    return(
        <div className="dropdown-invisible" id="dropdown">
            <div className="dropdown-links">
            <Link to="/settings">
                <p>Settings</p>
            </Link>
            <Link to="/profile">
                <p>Profile</p>
            </Link>
            </div>
            
        </div>
    );
}