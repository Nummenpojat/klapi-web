/* copyright (c) 2020- Otso Kurkela & Elias Mäkelä */

// import React and 3rd party components
import React, { useState, useEffect } from 'react';

// import 1st party components
import KlapiRouter from './components/Router/KlapiRouter';



//import stylesheets
import './App.css';

export default () => {
  const [user, setUser] = useState({});
  const [scoutMode, setScoutMode] = useState("weeklyProgram");
  

 
  

  return ( // App component which is meant to be as clear as possible
    <KlapiRouter scoutMode={scoutMode}/>
  );
}