import { useState } from 'react';

function useToggoleData(initValue) {
  const [state, setState] = useState(initValue);

  function setToggleData(bool) {
    setState((currValue) => {
      return typeof bool === 'boolean' ? bool : !currValue;
    });
  }

  return [state, setToggleData];
}

export { useToggoleData };
