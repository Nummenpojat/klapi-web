const toggleDropdown = (dropdownId:string):void => {
    let dropdown = document.querySelector(dropdownId) || null;

    if (dropdown === null) {
        console.log("Dropdown element is null")
    } else {
        if(dropdown.classList.contains("dropdown-invisible")) {
            dropdown.classList.remove("dropdown-invisible");
            dropdown.classList.add("dropdown-visible");
        } 
     
        else if (dropdown.classList.contains("dropdown-visible")){
            dropdown.classList.remove("dropdown-visible");
            dropdown.classList.add("dropdown-invisible");
        }
     
        else {
            console.log("Error: Dropdown element classlist does not contain visible or invisible");
        }
    }
    
 }

 export default toggleDropdown;