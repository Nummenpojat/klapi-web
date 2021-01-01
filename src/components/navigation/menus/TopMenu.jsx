/* 
copyright (c) 2020-2021 Otso Kurkela
*/

//import react and 3rd party components

//import 1st party components
import Dropdown from './../Dropdown';
import BurgerMenu from './../topMenuItems/BurgerMenu';
import Header from './../topMenuItems/Header';
import Logo from './../topMenuItems/Logo';

//import stylesheets
import './../navigation.css';

const TopMenu = (props) => {
    
    // function for toggling between dropdown-visible and dropdown-invisible classes

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
export default TopMenu;
