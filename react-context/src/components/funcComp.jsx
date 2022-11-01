import React from 'react';
import {
  useThemeContext,
  useThemeContextUpdate,
} from '../hooks/themeContext';

export default function FuncComp() {
  const theme = useThemeContext();
  const toggoleFunc = useThemeContextUpdate();

  const selectTheme = (bool) => {
    return !bool
      ? {
          backgroundColor: 'gray',
          color: 'black',
          margin: '2em',
          padding: '2em',
        }
      : {
          backgroundColor: 'black',
          color: 'white',
          margin: '2em',
          padding: '2em',
        };
  };

  return (
    <>
      <button onClick={toggoleFunc}>Change theme</button>
      <div style={selectTheme(theme)}>Function Component</div>
    </>
  );
}
