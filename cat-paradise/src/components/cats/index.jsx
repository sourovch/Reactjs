import React, { Component } from 'react';
import axios from 'axios';

import { Cat } from '../cat';

class Cats extends Component {
  state = {
    data: [],
    filter: false,
    err: false,
  };

  componentDidMount() {
    const url = 'https://api.thecatapi.com/v1/breeds';
    axios(url)
      .then((res) => this.setState({ data: res.data }))
      .catch((err) => {
        console.log(err);
        this.setState({ err: true });
      });
  }

  allCountrys() {
    const { data } = this.state;
    const countryObj = {};
    if (data.length > 0) {
      data.forEach((i) => {
        if (!countryObj[i.origin]) {
          countryObj[i.origin] = 1;
        } else {
          countryObj[i.origin]++;
        }
      });
    }
    return countryObj;
  }

  render() {
    const { data, err, filter } = this.state;
    return err ? (
      <div
        style={{
          display: 'grid',
          placeContent: 'center',
        }}
      >
        <h1> somthing went wrong</h1>
      </div>
    ) : (
      <>
        {data.length > 0 ? (
          <div className="container">
            <div style={{ margin: '1em', padding: '1em' }}>
              {Object.entries(this.allCountrys())
                .sort()
                .map(([key, value]) => (
                  <button
                    onClick={(e) => {
                      this.setState({ filter: key });
                    }}
                    className="btn country-btn"
                    key={key}
                  >
                    {key}({value})
                  </button>
                ))}
              <button
                onClick={(e) => {
                  this.setState({ filter: false });
                }}
                className="btn country-btn"
                key="all"
              >
                All
              </button>
            </div>
            {data.map((i) => {
              if (filter)
                return i.image && i.origin === filter ? (
                  <Cat cat={i} key={i.name} />
                ) : (
                  ''
                );
              return i.image ? <Cat cat={i} key={i.name} /> : '';
            })}
          </div>
        ) : (
          <div className="loading-wrapper big">
            <div className="loading-cont">
              <p
                style={{
                  fontSize: '1em',
                  textAlign: 'center',
                  margin: '0',
                }}
              >
                loading..
              </p>
              <div className="loading"></div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export { Cats };
