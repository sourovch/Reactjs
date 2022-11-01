import React, { useState } from 'react';

function IncDicNum() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3>UseState()</h3>
      <h1>Incrm and Decrm Number</h1>
      <button
        onClick={(e) => {
          setCount((prevCount) => prevCount + 1);
        }}
      >
        Inc
      </button>
      <h1>{count}</h1>
      <button
        onClick={(e) => {
          setCount((prevCount) => prevCount - 1);
        }}
      >
        Dicr
      </button>
    </div>
  );
}

export { IncDicNum };
