/* copyright (c) 2020- Otso Kurkela */


import {useState} from 'react';

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
    ]); // these are not real tasks - they are here just for development purposes

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
