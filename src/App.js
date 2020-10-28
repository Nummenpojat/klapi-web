/*
Copyright (c) 2020 Otso Kurkela & Elias Mäkelä
*/
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Sijainti from './components/sijainti/Sijainti';
import Tehtavat from './components/tehtavat/Tehtavat';
import Home from './components/Home';
import Rastilistat from './components/rastilistat/Rastilistat';

const App = () => {
  // Defined state hooks
  const [mode, setMode] = useState('arki');

  return (
    <>

      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/sijainti" exact component={Sijainti} />
            <Route path="/tehtavat" exact component={Tehtavat} />
            <Route path="/rastilistat" exact component={Rastilistat} />
          </Switch>
        </div>
      </Router>

    </>
    /* 
return view with components. React Router is used for navigating between different components.
Switch and exact-keyword are used for making sure that every path works correctly.
   */
  );
}

export default App;
