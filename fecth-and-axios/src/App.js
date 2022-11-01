import React, { Component } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './style.css';

class App extends Component {
  render() {
    return (
      <>
        <nav className="navbar">
          <div className="head-wrapper">
            <h1>Fetching data in React using Fetch/Axios</h1>
          </div>
          <NavLink className="btn" to="Fetch">
            Fetch
          </NavLink>
          <NavLink className="btn" to="Axios">
            Axios
          </NavLink>
          <NavLink className="btn" to="Exercise">
            Exercise
          </NavLink>
        </nav>
        <div className="App-data">
          <Outlet />
        </div>
      </>
    );
  }
}

export { App };
