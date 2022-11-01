import React from 'react';

import { useTimeOut } from '../hooks/useTimeOut';

function TimeOut() {
  const [state, contTimeout] = useTimeOut(0);

  return (
    <div style={{ border: '1px solid black' }}>
      <h1>This is not yet working</h1>
      <h1>{String(state)}</h1>
      <button
        onClick={() =>
          contTimeout((currValue) => {
            return currValue + 1;
          })
        }
      >
        Incriment
      </button>
      <button onClick={() => contTimeout(false)}>
        Clear Timeout
      </button>
      <button onClick={() => contTimeout(true)}>Reset TimeOut</button>
    </div>
  );
}

export { TimeOut };
