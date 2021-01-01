/* copyright (c) 2021- Otso Kurkela */
    
export default () => {
    const toggleDropdown = (dropdown) => {

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
     
    return (
        <div className="burger" onClick={() => {
            toggleDropdown(document.querySelector("#dropdown"));
        }}>
            {
                [0, 1, 2].map(() => {
                    return (<div></div>);
                })
            }
        </div>
    );
}