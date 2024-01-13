import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import DrawMap from './DrawMap';

const root = ReactDOM.createRoot(document.getElementById('root'));
document.body.style.backgroundColor = "#0F0F0F";
root.render(

  <React.StrictMode>
    <DrawMap />
  </React.StrictMode>
);

