import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { ShowDate } from './components/date';

class App extends Component {
  #currDate = new Date();

  season(mounth) {
    let season;

    switch (mounth + 1) {
      case 4:
      case 5:
        season = 'summer';
        break;
      case 6:
      case 7:
        season = 'Monsoon';
        break;
      case 8:
      case 9:
        season = 'Autumn';
        break;
      case 10:
      case 11:
        season = 'Late autumn';
        break;
      case 12:
      case 1:
        season = 'winter';
        break;
      case 2:
      case 3:
        season = 'spring';
        break;
      default:
        season = 'unidentifyed';
    }
    return season;
  }

  time(time) {
    if (time >= 0 && time <= 6) return 'Mid night';

    if (time <= 11 && time >= 7) return 'Morning';

    if (time <= 18 && time >= 12) return 'Day';

    if (time <= 22 && time >= 19) return 'Evening';

    if (time <= 24 && time >= 20) return 'Night';

    return 'unidentifyed';
  }

  randFealing() {
    const fealings = ['Good', 'Joyfull', 'Dull', 'Delightfull'];
    return fealings[Math.floor(Math.random() * fealings.length)];
  }

  render() {
    return (
      <div className="app">
        <h1>This is 30 Dayes Of React</h1>
        <ShowDate currDate={this.#currDate} />
        <h2>
          This is a {this.randFealing()}{' '}
          {this.time(this.#currDate.getHours())} of{' '}
          {this.season(this.#currDate.getMonth())}
        </h2>
      </div>
    );
  }
}

const RootElm = document.getElementById('root');
ReactDom.render(<App />, RootElm);
