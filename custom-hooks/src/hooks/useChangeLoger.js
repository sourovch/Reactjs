import { useEffect } from 'react';

function useChangeLoger(value) {
  useEffect(() => {
    console.log(value);
  }, [value]);
}

export { useChangeLoger };
