import { useState } from 'react';

function useTimeOut(initValue) {
  const [state, setState] = useState(initValue);
  let timeOut = setTimeout(() => {
    setState(0);
  }, 1000);

  function controlTimeOut(controller) {
    setState((currValue) => {
      if (controller instanceof Function)
        return controller(currValue);

      if (typeof controller === 'boolean') {
        return controller
          ? (timeOut = setTimeout(() => {
              setState(0);
            }, 1000))
          : clearTimeout(timeOut);
      }
    });
  }

  return [state, controlTimeOut];
}

export { useTimeOut };
