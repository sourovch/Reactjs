import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import { App } from './App';
import { Fetch } from './routes/fetch';
import { Axios } from './routes/axios';
import { Exercise } from './routes/exercise';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="Fetch" element={<Fetch />} />
        <Route path="Axios" element={<Axios />} />
        <Route path="Exercise" element={<Exercise />} />
      </Route>
    </Routes>
  </Router>
);
