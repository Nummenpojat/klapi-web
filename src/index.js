/*
Copyright (c) 2020 Otso Kurkela
*/

//import React and 3rd party components

import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

// import custom components
import App from './App';

// import stylesheets
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
