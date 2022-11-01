import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { GameBox } from './components/game';
import { Inputs } from './components/inputs';
import { User } from './components/user/user';
const rootElm = document.getElementById('root');

class App extends Component {
  render() {
    return (
      <>
        <GameBox window={window} />
        <Inputs />
        <User />
      </>
    );
  }
}

ReactDOM.render(<App />, rootElm);
