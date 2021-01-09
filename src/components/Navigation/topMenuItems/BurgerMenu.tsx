/* copyright (c) 2021- Otso Kurkela */
import toggleDropdown from './toggleDropdown';

export default () => {
    /* function for toggling dropdown visibility, 
    if dropdown has class invisible and hamburger is clicked, we add visible-class
    and remove invisible. If it has visible -class when clicken, then we add invisible and remove visible.
    CSS makes sure that elements with invisible-class are invisible. */
    
     
    return (
        <div className="burger" onClick={() => {
            toggleDropdown("#dropdown");
        }}>
            {
                [0, 1, 2].map((i) => {
                    return (<div key={i}></div>);
                }) // return map of three div elements that are burgers bars.
            }
        </div>
    );
}