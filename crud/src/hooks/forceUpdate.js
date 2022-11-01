import { useState } from 'react';

export default function useForceUpdate() {
  const [, update] = useState(true);

  function change() {
    update((bool) => !bool);
  }

  return change;
}
