const toggleDropdown = (dropdown:any):void => {
    console.log(typeof(dropdown))
    if(dropdown.classList.contains("dropdown-invisible")) {
        dropdown.classList.remove("dropdown-invisible");
        dropdown.classList.add("dropdown-visible");
    } 
 
    else if (dropdown.classList.contains("dropdown-visible")){
        dropdown.classList.remove("dropdown-visible");
        dropdown.classList.add("dropdown-invisible");
    }
 
     else {
        console.log("Error");
    }
 }

 export default toggleDropdown;