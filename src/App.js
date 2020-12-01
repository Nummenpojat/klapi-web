/*
Copyright (c) 2020 Otso Kurkela & Elias Mäkelä
*/
// import React and 3rd party components
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import 1st party components
import TopMenu from './components/navigation/TopMenu';
import BottomMenu from './components/navigation/BottomMenu';
import Checklists from './components/Checklists/Checklists';
import Tasks from './components/Tasks/Tasks';
import Map from './components/Map/Map';
import Settings from './components/Settings/Settings';
import Profile from './components/Profile/Profile';

//import stylesheets
import './App.css';

const user = {
  firstName: "John",
  lastName: "Doe",
  localGroup: "Hyvinkään Nummenpojat",
  ageSection: "Explorer",
  positions: []
}


const bottomLinks = [
  {
      name: "Tehtävät",
      link: "/tasks"
  },
  {
      name: "Kartta",
      link: "/map"
  },
  {
    name: "Rastilistat",
    link: "/checklists"
  }
];

const App = () => {
  const [scoutMode, setScoutMode] = useState('');

  return (
    <Router>
      <div className="App" id="outer-container">
        <TopMenu />
        <div id="page-wrap">
          <Switch>
            <Route exact path="/map" component={Map} />
            <Route exact path="/checklists" component={Checklists} />
            <Route exact path="/tasks" component={Tasks} />
            <Route exact path="/settings" component={Settings} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </div>

        <BottomMenu bottomLinks={bottomLinks} scoutMode={scoutMode} />
      </div>
    </Router>

  );
}
export default App;
