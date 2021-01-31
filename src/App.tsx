/* copyright (c) 2020- Otso Kurkela & Elias Mäkelä */

// import React and 3rd party components
import React, { useState } from 'react';

// import 1st party components
import KlapiRouter from './components/Router/KlapiRouter';



//import stylesheets
import './App.css';

export default () => {
  const [scoutMode, setScoutMode] = useState("weeklyProgram");
  

  return ( // App component returns only Router component
    <KlapiRouter scoutMode={scoutMode}/>
  );
}