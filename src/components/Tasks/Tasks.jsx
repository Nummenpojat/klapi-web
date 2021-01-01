/* copyright (c) 2020- Otso Kurkela */


import {useState} from 'react';


//import 1st party modules
import baseUrl from '../../variables';

//import stylesheets
import './tasks.css';


export default props => {
    const [tasks, setTasks] = useState();
   
fetch(`${baseUrl}/api/users/john_doe/tasks`)
    
    .then(data => {
        setTasks(data);
    }); // save users tasks in state
    console.log(tasks);
    return (
        <h1></h1>
    );

}
