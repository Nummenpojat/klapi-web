//import React and 3rd party components
import React from 'react';
import {useState} from 'react';


//import 1st party modules
import baseUrl from './../../variables';

//import stylesheets
import './tasks.css';


const Tasks = (props) => {
    
fetch(`${baseUrl}/api/users/john_doe/tasks`)
    .then(response => response.json())
    .then(data => console.log(data));

    return (
        <h1>Moiz</h1>
    );

    /* return (
        <div className="tasks">
          <div className="completed-container">
              <h3>Completed tasks: </h3>
              <table className="completed-tasks">
                {
                    tasks.map(task => {
                        if (task.completed === true) {
                            return (
                                <tr>
                                    <td>{task.name}</td>
                                    <td>{task.points} points</td>
                                </tr>
                            );
                        }
                    })
                }
              </table>
            </div>  
            <div className="uncompleted-container">
                <h3>Uncompleted tasks: </h3>
                <table className="uncompleted-tasks">
                    {
                        tasks.map(task => {
                            if (task.completed === false) {
                                return (
                                    <tr>
                                        <td>{task.name}</td>
                                        <td>{task.points} points</td>
                                    </tr>
                                );
                            }
                        })
                    }
                </table>
            </div>
        </div>
    ); */
}

export default Tasks;