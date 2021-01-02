/* copyright (c) 2020- Otso Kurkela */


import {useState} from 'react';


//import 1st party modules
import baseUrl from '../../variables';

//import stylesheets
import './tasks.css';


export default () => {
    

    const [tasks, setTasks] = useState([
        {
            id: 0,
            title: "Take picture",
            description: "Take a photo with camp leader.",
            points: 10,
            completed: false
        },
        {
            id: 1,
            title: "Go to stage",
            description: "Go to stage of event and take photo.",
            points: 20,
            completed: true
        },
        {
            id: 2,
            title: "Dance with leader",
            description: "Dance with leader of your scout group",
            points: 10,
            completed: false
        },
    ]);

    console.log(tasks)
    return (
        <div>
            {
                tasks.map((task, i) => {
                    return(<p>{task.title}</p>);
                })
            }
        </div>
    );

}
