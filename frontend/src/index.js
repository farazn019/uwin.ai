import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


/*
var buttons = {
  "news": "Clicked On News",
  "events": "Clicked On Events",
  "projects": "Clicked On Projects",
  "members": "Clicked On Members",
  "join": "Clicked on Join!"
};*/




//buttons.map((buttonName) => console.log(buttonName));

//var buttonNames = Object.keys(JSON.parse(buttons));
//console.log(buttonNames);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('News')
);

{/*
ReactDOM.render(
  <React.StrictMode>
  
  </React.StrictMode>
);*/
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
