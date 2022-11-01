import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { From } from './controlled_data';
import { UcForm } from './uncontrolled_data';
import { LifeCycle } from './mounting';

class Counter extends React.Component {
  state = {
    count: 0,
  };

  render() {
    const count = this.state.count;
    return (
      <div>
        <h1>Counter</h1>
        <button onClick={() => this.setState({ count: count + 1 })}>
          add 1
        </button>
        <h1>{count}</h1>
        <button onClick={() => this.setState({ count: count - 1 })}>
          minus 1
        </button>
      </div>
    );
  }
}

class CatDog extends React.Component {
  state = {
    image:
      'https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg',
    animaleName: 'cat',
  };

  changeAnimale = () => {
    const catImg =
      'https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg';
    const dogImg =
      'https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg';
    const image = this.state.image === catImg ? dogImg : catImg;
    const animaleName =
      this.state.animaleName === 'cat' ? 'dog' : 'cat';
    this.setState({ image, animaleName });
  };

  render() {
    return (
      <div>
        <h1>Animale Chenger</h1>
        <img src={this.state.image} alt={this.state.animaleName} />
        <button onClick={this.changeAnimale}>Change</button>
      </div>
    );
  }
}

class LogReq extends React.Component {
  render() {
    return <h1>Please Login</h1>;
  }
}

class Welcome extends React.Component {
  render() {
    return <h1>Welcome To Site</h1>;
  }
}

class Message extends React.Component {
  state = {
    message: 'Welcome to 30 Dayes of React',
  };

  showDate(date) {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const Date = date.getDate();
    return `${Date} ${month} ${year}`;
  }

  greetPeople() {
    const message = 'Welcome to 30 Dayes of React';
    this.setState({ message });
  }

  showTime() {
    const message = this.showDate(new Date());
    this.setState({ message });
  }

  render() {
    const { message } = this.state;

    return (
      <div>
        <h1>{message}</h1>
        <button onClick={() => this.showTime()}>Show Time</button>
        <button onClick={() => this.greetPeople()}>
          Greet people
        </button>
      </div>
    );
  }
}

class Event extends React.Component {
  count = 0;

  state = {
    message: '',
  };

  handleChange = (e) => {
    this.setState({ message: e.target.value });
  };

  handleClick = (e) => {
    this.setState({ message: 'welcome to 30-dayes-of-react' });
  };

  handleMouseMove = (e) => {
    this.setState({ message: `Mouse is Moving` });
  };

  handleKeyPress = (e) => {
    this.setState({ message: e.target.value });
  };

  handleBlur = (e) => {
    this.setState({ message: 'input field is blured' });
  };

  handleCopy = (e) => {
    this.setState({ message: 'Text Copied' });
  };

  focusTxtBox = () => {
    this.boxRef.focus();
  };

  render() {
    const h2Style = { margin: 0 };
    return (
      <>
        <h1>Events in react</h1>
        <h2 style={h2Style}>textbox onChange event</h2>
        <input
          ref={(el) => (this.boxRef = el)}
          onChange={this.handleChange}
        />
        <h2 style={h2Style}>onClick event</h2>
        <button onClick={this.handleClick}>click</button>
        <h2 style={h2Style}>onMouseMove event</h2>
        <div
          onMouseMove={this.handleMouseMove}
          style={{
            border: '1px solid',
            width: '150px',
            aspectRatio: '1',
          }}
        ></div>
        <h2 style={h2Style}>onKeyUp event</h2>
        <input onKeyUp={this.handleKeyPress} />
        <h2 style={h2Style}>onBlur event</h2>
        <input onBlur={this.handleBlur} />
        <h2 style={h2Style}>copy event</h2>
        <p onCopy={this.handleCopy}> copy Text</p>
        <h2 onClick={this.focusTxtBox}>
          Event: {this.state.message}
        </h2>
      </>
    );
  }
}

class App extends React.Component {
  state = {
    loggedIn: false,
  };

  render() {
    const status = this.state.loggedIn ? <Welcome /> : <LogReq />;
    const btnMsg = this.state.loggedIn ? 'Logout' : 'Login';
    return (
      <div>
        <Counter />
        <CatDog />
        {status}
        <button
          onClick={() =>
            this.setState({ loggedIn: !this.state.loggedIn })
          }
        >
          {btnMsg}
        </button>
        <Message />
        <Event />
        <From />
        <UcForm />
        <LifeCycle firstName="Sourov" />
      </div>
    );
  }
}

const rootElm = document.querySelector('.root');
ReactDOM.render(<App />, rootElm);
