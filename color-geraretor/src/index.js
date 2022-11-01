import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

import { App } from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="main-wrapper">
    <h1 style={{ marginBottom: 0 }}>Color Genaretor</h1>
    <h2>Made by Sourov</h2>
    <App />
  </div>
);
