import React, { useState, useEffect } from 'react';
import axios from 'axios';

import statImg from './images/stat_img.png';
import { Countries } from './components/countries';
import { Statistics } from './components/statistics';

function App() {
  const [data, setData] = useState([]);
  const [err, setErr] = useState(false);
  const [filter, setFilter] = useState(false);

  useEffect(() => {
    const url = 'https://restcountries.com/v2/all';
    axios(url)
      .then((res) => setData(res.data))
      .catch((err) => {
        console.log(err);
        setErr(true);
      });
  }, []);

  const handleChange = (e) => {
    setFilter(() =>
      e.target.value.length > 0 ? e.target.value : false
    );
  };

  return err ? (
    <h1>Somthing Went Wrong</h1>
  ) : data.length > 0 ? (
    <>
      <header>
        <div className="header-title">
          <h1>World Countries Data</h1>
          <h2>Currently, We Have {data.length} Countries</h2>
        </div>
        <div>
          <input
            className="search-bar"
            onChange={handleChange}
            name="filter"
            type="text"
            placeholder="Search by country name,capital or language"
          />
          <div>
            <a href="#statestics">
              <img
                src={statImg}
                alt="statics"
                style={{ width: '50px' }}
              />
            </a>
          </div>
        </div>
      </header>
      <main>
        <div className="country-wrapper">
          <Countries data={data} filter={filter} />
        </div>
        <Statistics data={data} />
      </main>
      <footer>
        <div>
          <h2>Project Done By: Sourov Chowdhury</h2>
          <h3>Designed by: Asabeneh Yetayeh</h3>
        </div>
        <p>&copy; Copyright Resurved</p>
      </footer>
    </>
  ) : (
    <h1>loading</h1>
  );
}

export { App };
