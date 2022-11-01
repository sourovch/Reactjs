import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import AuthProvider, { useUserData } from './Contexts/userInfo';

import App from './App';
import Profile from './Components/profile';
import Login from './Components/login';

const root = ReactDOM.createRoot(document.getElementById('root'));

const IfLoggedin = ({ element }) => {
  const isLoggedIn = useUserData().loggedIn;

  return isLoggedIn ? element : <Navigate to="/login" />;
};

const IfNotLoggedIn = ({ element }) => {
  const isNotLoggedIn = !useUserData.loggedIn;

  return isNotLoggedIn ? element : <Navigate to="/" />;
};

root.render(
  <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<h1>index</h1>} />
          <Route
            path="/me"
            element={<IfLoggedin element={<Profile />} />}
          />
          <Route
            path="/login"
            element={<IfNotLoggedIn element={<Login />} />}
          />
        </Route>
      </Routes>
    </Router>
  </AuthProvider>
);
