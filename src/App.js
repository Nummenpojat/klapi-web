/*
Copyright (c) 2020-2021 Otso Kurkela & Elias Mäkelä
*/

// import React and 3rd party components
import React, { useState, createContext, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import 1st party components
import TopMenu from './components/navigation/TopMenu.jsx';
import BottomMenu from './components/navigation/BottomMenu.jsx';
import Checklists from './components/Checklists/Checklists.jsx';
import Tasks from './components/Tasks/Tasks.jsx';
import Map from './components/Map/Map.jsx';
import Settings from './components/general/Settings.jsx';
import Profile from './components/general/Profile.jsx';
import Index from './components/general/Index.jsx';

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
  

  fetch(`${baseUrl}/api/users/john_doe`)
    .then(response => response.json())
    .then(data => {
      setUser(data);
    })
    .catch(error => {
      console.log(`Error: ${error}`);
      console.log("If this error is 404, it might be because you don't have server running on your local host.");
      console.log("This code expects that you have a local copy of backend runnning on port 3001.");
    });


  return (
    
    <Router>
      <div className="App" id="outer-container">
        <TopMenu user={user} />
        <div id="page-wrap">
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/map" component={Map} />
            <Route exact path="/checklists" component={Checklists} />
            <Route exact path="/tasks" component={Tasks} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/profile" component={Profile} />
          </Switch>

        </div>
        <BottomMenu bottomLinks={bottomLinks} />
      </div>
    </Router>
  );
}
export default App;
