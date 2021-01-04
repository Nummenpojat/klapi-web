/* copyright (c) 2021- Otso Kurkela */
    
export default () => {
    /* function for toggling dropdown visibility, 
    if dropdown has class invisible and hamburger is clicked, we add visible-class
    and remove invisible. If it has visible -class when clicken, then we add invisible and remove visible.
    CSS makes sure that elements with invisible-class are invisible. */
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
                }) // we return map of three div elements that are burgers bars.
            }
        </div>
    );
}