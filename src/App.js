import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Sijainti from './components/sijainti/Sijainti';
import Tehtavat from './components/tehtavat/Tehtavat';
import Home from './components/Home';
import Rastilistat from './components/rastilistat/Rastilistat';

function App() {
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

    <>

  );
}

export default App;
