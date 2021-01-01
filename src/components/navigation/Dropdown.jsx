/* copyright (c) 2020- Otso Kurkela */

// import 3rd party components
import { Link } from 'react-router-dom';

export default () => {
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