/* copyright (c) 2020- Otso Kurkela */

// import 3rd party components
import { Link } from 'react-router-dom';
import {useTranslation} from 'react-i18next'

//DO NOT REMOVE. LOOKS USELESS BUT IS NECESSARY FOR REASONS I DO NOT FULLY UNDERSTAND
import '../../services/i18n'


// dropdown menu
export default () => {

    const { t, i18n }  = useTranslation();

    /* dropdown has dropdown-invisible -class which turns dropdown invisible in CSS. 
    In BurgerMenu, there is function that makes dropdown visible 
    when hamburger is clicked.*/
    
    return(
        <div className="dropdown-invisible" id="dropdown">
            <div className="dropdown-links">
            <Link to="/settings">
                <p>{t("dropdown.settings")}</p>
            </Link>
            <Link to="/profile">
                <p>{t("dropdown.profile")}</p>
            </Link>
            </div>
            
        </div>
    );
}