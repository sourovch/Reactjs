import React, { useState, useContext } from 'react';

export const themeContext = React.createContext();
export const themeContextUptade = React.createContext();

export const useThemeContext = () => useContext(themeContext);
export const useThemeContextUpdate = () =>
  useContext(themeContextUptade);

export function Provider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true);
  const toggolTheme = (e) => {
    setDarkTheme((dark) => !dark);
  };

  return (
    <themeContext.Provider value={darkTheme}>
      <themeContextUptade.Provider value={toggolTheme}>
        {children}
      </themeContextUptade.Provider>
    </themeContext.Provider>
  );
}
