import React from 'react';
import ReactDOM from 'react-dom/client';

import ExampleOne from './example-one'
import ExampleTwo from './example-two'
import ExampleThree from './example-three';
import "./styles.css";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ExampleOne />
    <hr />
    <ExampleTwo />
    <hr />
    <ExampleThree />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
