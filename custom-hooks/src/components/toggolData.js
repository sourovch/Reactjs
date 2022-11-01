import React from 'react';

import { useToggoleData } from '../hooks/useToggleData';

function ToggleData() {
  const [state, setToggleData] = useToggoleData(false);
  return (
    <>
      <h1>{String(state)}</h1>
      <button onClick={() => setToggleData()}>toggle</button>
      <button onClick={() => setToggleData(true)}>true</button>
      <button onClick={() => setToggleData(false)}>false</button>
    </>
  );
}

export { ToggleData };
