import React, { Component } from 'react';
import './style.css';

class Inputs extends Component {
  render() {
    return (
      <>
        <input type="text" />
        <input type="number" />
        <input type="range" min={0} max={100} />

        <input type="email" />
        <input type="password" />
        <input type="tel" />

        <input type="checkbox" />
        <input type="radio" />

        <input type="color" />

        <input type="url" />
        <input alt="input image" type="image" />
        <input type="file" />

        <input type="hidden" />

        <input type="date" />
        <input type="datetime-local" />
        <input type="month" />
        <input type="week" />
        <input type="time" />

        <input type="reset" />
        <input type="search" />
        <input type="submit" />
        <input type="button" />
      </>
    );
  }
}

export { Inputs };
