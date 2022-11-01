import { Navbar } from './Components/Navbar';
import React from 'react';

import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
