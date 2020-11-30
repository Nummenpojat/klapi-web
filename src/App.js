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

//import stylesheets
import './App.css';

const user = {
  firstName: "John",
  localGroup: "",
  ageSection: "",
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
          </Switch>
        </div>
        <BottomMenu bottomLinks={bottomLinks} scoutMode={scoutMode} />
      </div>
    </Router>

  );
}
export default App;
