import React from 'react';

import { DataInput } from './components/dataInput';
import { TimeOut } from './components/timeOut';
import { ToggleData } from './components/toggolData';

function App() {
  return (
    <>
      <DataInput />
      <ToggleData />
      <TimeOut />
    </>
  );
}

export { App };
