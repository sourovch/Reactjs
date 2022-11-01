import { useEffect, useState } from 'react';

function getSavedValue(key, initValue) {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) return savedValue;

  if (initValue instanceof 'function') return initValue();

  return initValue;
}

function useLocalStorage(key, initValue) {
  const [state, setState] = useState(() =>
    getSavedValue(key, initValue)
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
}

export { useLocalStorage };
