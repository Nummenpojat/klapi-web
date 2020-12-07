//import React and 3rd party components
import React from 'react';
import {useState} from 'react';

//import stylesheets
import './tasks.css';


const Tasks = (props) => {
    const [tasks, setTasks] = useState([
        {
            name: "take picture",
            points: 10
        },
        {
            name: "dance on stage",
            points: 10
        }
    ]);

    return (
        <>
          <div className="completed-container">
              <h3>Completed tasks: </h3>
              <div className="completed-tasks">

              </div>
            </div>  
            <div className="uncompleted-container">
                <h3>Uncompleted tasks: </h3>
                <div className="uncompleted-tasks">
                    
                </div>
            </div>
        </>
    );
}

export default Tasks;