import React from 'react';
import ReactDOM from 'react-dom';
import Dp_sourov from './images/Dp_sourov.jpg';
import countries from './countries';
const rootElm = document.querySelector('.root');

const sourov = {
  firstName: 'sourov',
  lastName: 'chowdhury',
  profetion: 'MERN stack developer',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'Express',
    'Mongoose',
    'MongoDB',
    'NodeJS',
    'Axios',
  ],
  profilePic: Dp_sourov,
};

class User extends React.Component {
  render() {
    const {
      user: { firstName, lastName, profetion, skills, profilePic },
      classSelc,
    } = this.props;

    const fullname = `${firstName} ${lastName}`;
    return (
      <div className="user-card">
        <div className="name-dp-wrapper">
          <div className="dp-wrapper">
            <img
              className="user-dp"
              src={profilePic}
              alt={`${fullname}'s profile`}
            />
          </div>
          <p className="user-name">{fullname}</p>
        </div>
        <h5 className="user-profetion">{profetion}</h5>
        <div className={classSelc('user-skills', 'dark2')}>
          <h3 className="skills-header">Skills</h3>
          <ul>
            {skills.map((skill) => (
              <li className="user-skill" key={skill}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

class Countries extends React.Component {
  indexSlc = (arr) => {
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
  };

  state = {
    country: this.indexSlc(this.props.countries),
  };

  render() {
    const { classSelc, countries } = this.props;
    const { country } = this.state;
    return (
      <div>
        <div className={classSelc('country-wrapper', 'dark2')}>
          <img
            className="country-flag"
            src={country.flag}
            alt={`${country.name}'s flag`}
          />
          <h2 className="country-name">{country.name}</h2>
          <p className="country-capital">
            capital: {country.capital}
          </p>
          <p className="country-languages">
            Languages:{' '}
            {country.languages.map((obj) => `${obj.name}`).join(',')}
          </p>
          <p className="country-currencies">
            currencies:{' '}
            {country.currencies.map((obj) => `${obj.name}`).join(',')}
          </p>
          <p className="country-population">
            population: {country.population.toLocaleString('en-US')}
          </p>
        </div>
        <button
          className={classSelc('u-btn country-btn', 'dark-btn')}
          onClick={() =>
            this.setState({
              country: this.indexSlc(countries),
            })
          }
        >
          Random Country
        </button>
      </div>
    );
  }
}

class Content extends React.Component {
  state = {
    loading: true,
  };

  async fetchdata(url) {
    const response = await fetch(url);
    let data = await response.json();
    data = data.results[0];
    setTimeout(() => {
      this.setState({ loading: false, data });
    }, 3000);
  }

  constructor(props) {
    super(props);
    this.fetchdata('https://randomuser.me/api/?results=1');
  }

  render() {
    const { classSelc } = this.props;
    const loading = (
      <div className="loading-wrapper">
        <div className={classSelc('animSqr', 'dark-anim')}></div>
      </div>
    );
    let returnData;
    this.state.loading
      ? (returnData = loading)
      : (returnData = (
          <div className="name-wrapper">
            <h2>Name: </h2>
            <h2>
              {this.state.data.name.first} {this.state.data.name.last}
            </h2>
          </div>
        ));

    return (
      <div className={classSelc('data-card', 'dark2')}>
        {returnData}
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    isDark: true,
  };

  classSelc = (curentCls, dark) =>
    this.state.isDark ? `${curentCls} ${dark}` : curentCls;

  render() {
    const mode = this.state.isDark ? false : true;
    return (
      <div className={this.classSelc('app', 'dark')}>
        <User user={sourov} classSelc={this.classSelc} />
        <button
          onClick={() => this.setState({ isDark: mode })}
          className={this.classSelc('u-btn change-btn', 'dark-btn')}
        >
          Change Background
        </button>
        <h1 className="country-headder">Random Country</h1>
        <Countries countries={countries} classSelc={this.classSelc} />
        <Content classSelc={this.classSelc} />
      </div>
    );
  }
}

ReactDOM.render(<App />, rootElm);
