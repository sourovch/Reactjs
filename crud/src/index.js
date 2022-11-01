import React from 'react';
import ReactDOM from 'react-dom/client';

import './style.css';

import { posts } from './utils/data';

import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App posts={posts} />
  </>
);
