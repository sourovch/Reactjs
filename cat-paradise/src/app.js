import React, { Component } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import axios from 'axios';

import { AllCatData } from './components/allCatData';

class App extends Component {
  state = {
    data: [],
    err: false,
  };
  componentDidMount() {
    const url = 'https://api.thecatapi.com/v1/breeds';
    axios(url)
      .then((res) => {
        this.setState({ data: res.data });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ err: true });
      });
  }
  render() {
    const { data } = this.state;
    return (
      <>
        <nav className="navbar">
          <h1 className="nav-title">Cat Paradise</h1>
          {data.length > 0 ? (
            <AllCatData data={data} />
          ) : (
            <div className="loading-wrapper small">
              <div className="loading-cont">
                <div className="loading"></div>
              </div>
            </div>
          )}
          <NavLink className="btn" to="/">
            Home
          </NavLink>{' '}
          <NavLink className="btn" to="cats">
            Cats
          </NavLink>{' '}
          <NavLink className="btn" to="about">
            About
          </NavLink>
        </nav>
        <div className="content">
          <Outlet />
        </div>
        <footer>
          <p style={{ margin: '.3em' }}>&copy;Copyright Resurved</p>
        </footer>
      </>
    );
  }
}

export { App };
