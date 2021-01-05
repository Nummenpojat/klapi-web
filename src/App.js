/* copyright (c) 2020- Otso Kurkela & Elias Mäkelä */

// import React and 3rd party components
import React, { useState, useEffect } from 'react';

// import 1st party components
import KlapiRouter from './components/Router/KlapiRouter';

// import 1st party modules

//import 3rd party modules
import axios from 'axios';

//import stylesheets
import './App.css';
import userEvent from '@testing-library/user-event';

// import environment variables
import baseUrl from "./variables";

const bottomLinks = [
  {
      name: "Tasks",
      link: "/tasks"
  },
  {
    name: "Checklists",
    link: "/checklists"
  }
];

const App = (props) => {
  const [user, setUser] = useState({});
  
  const [scoutMode, setScoutMode] = useState("");
  const [bottomLinks, setBottomLinks] = useState([]);

  useEffect(() => {

    setScoutMode("weeklyProgramme");

    if (scoutMode == "weeklyProgramme") {
      setBottomLinks({
        tasks: {
          title: "Tasks",
          link: "/tasks"
        },
        map: {
          title: "Checklists",
          link: "/checklists"
        }
      })

    } 
    else if (scoutMode == "camp") {
      setBottomLinks({
        tasks: {
          title: "Tasks",
          link: "/tasks"
        },
        map: {
          title: "Map",
          link: "/map"
        }
      })

    } 
    
    else {
      setBottomLinks({});
    }
  }, [scoutMode])
  

  return ( // App component which is meant to be as clear as possible
    <KlapiRouter bottomLinks={bottomLinks}/>
  );
}

export default App;
