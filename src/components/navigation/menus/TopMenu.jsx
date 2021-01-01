/* copyright (c) 2020- Otso Kurkela */


//import 1st party components
import Dropdown from './../Dropdown';
import BurgerMenu from './../topMenuItems/BurgerMenu';
import Header from './../topMenuItems/Header';
import Logo from './../topMenuItems/Logo';

//import stylesheets
import './../navigation.css';

export default props => {
    

    return (
        <>
        <div className="topmenu" id="topmenu">
            
            <BurgerMenu />
            <Header />
            <Logo />
        </div>
        <Dropdown />
        </>
    )
}