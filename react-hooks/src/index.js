import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

import { IncDicNum } from './components/Number';
import { CatDog } from './components/catDog';
import { UseEffect } from './components/useEffect';
import { WindowChange } from './components/windowSize';
import { Input } from './components/input';
import { From } from './components/Form';
import { UseRefComp } from './components/useRef';

const App = () => {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>
        Deff Components Using diff hooks
      </h1>
      <div className="main-content">
        <IncDicNum />
        <CatDog />
        <UseEffect />
        <WindowChange />
        <Input />
        <From />
        <UseRefComp />
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App />);
