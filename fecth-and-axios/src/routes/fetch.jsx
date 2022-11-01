import React, { Component } from 'react';
import Country from './country';

class Fetch extends Component {
  state = {
    data: [],
    err: false,
  };
  async componentDidMount() {
    try {
      const url = 'https://restcountries.com/v2/all';
      const res = await fetch(url);
      const data = await res.json();
      this.setState({ data });
    } catch (err) {
      console.log(err);
      this.setState({ err: true });
    }
  }
  render() {
    const { data, err } = this.state;
    const renData =
      data.length > 0 ? (
        <Country
          country={data[Math.floor(Math.random() * data.length)]}
        />
      ) : (
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>
      );
    return <>{err ? <h1>Something Went Wrong</h1> : renData}</>;
  }
}

export { Fetch };
