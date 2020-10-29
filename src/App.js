/*
Copyright (c) 2020 Otso Kurkela & Elias Mäkelä
*/
// import React and 3rd party modules
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import custom components
import TopNav from './components/navigation/TopNav';
import BottomNav from './components/navigation/BottomNav';
import Sijainti from './components/sijainti/Sijainti';
import Tehtavat from './components/tehtavat/Tehtavat';
import Home from './components/Home';
import Rastilistat from './components/rastilistat/Rastilistat';

//import stylesheets
import './App.css';

const App = () => {
  // Defined state hooks
  const [mode, setMode] = useState('arki');

  return (
    <>

      <Router>
        <TopNav />
        <BottomNav />
        <div className="App">
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
