import React from 'react';
import ClassComp from './components/classComp';
import FuncComp from './components/funcComp';
import { Provider } from './hooks/themeContext';

export default function App() {
  return (
    <Provider>
      <FuncComp />
      <ClassComp />
    </Provider>
  );
}
