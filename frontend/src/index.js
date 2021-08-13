import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

import SubHeader from './Sub-Header';
import News from './News';
import Events from './Events';


ReactDOM.render(
  <React.StrictMode>
    <SubHeader />
  </React.StrictMode>,
  document.getElementById("main-heading")
);



ReactDOM.render(
  <React.StrictMode>
    <News/>
  </React.StrictMode>,
  document.getElementById('News')
);



ReactDOM.render(
  <React.StrictMode>
    <Events/>
  </React.StrictMode>,

  document.getElementById("Events")
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
