import React, { Component } from 'react';
import mountingCss from './style.module.css';

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    console.log('Constructor Run First');
    this.state = {
      firstName: '',
      count: 0,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivetStateFromProps will run secend');

    // state.firstName = props.firstName;
    // return null;
    return { firstName: props.firstName };
  }

  async componentDidMount() {
    console.log('componentDidMount will run last');
    try {
      const url = 'https://restcountries.com/v3.1/all';
      const res = await fetch(url);
      const data = await res.json();
      this.setState({ data });
    } catch (err) {
      console.log(err);
    }
  }

  shouldComponentUpdate(nextProp, nextState) {
    if (nextState.count > 31) {
      return false;
    }
    return true;
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('updated');
    if (prevState.count === 30) {
      this.setState({ congrets: 'Congrets' });
    }
  }

  incCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  random = (arr = []) => {
    const randIndex = Math.floor(Math.random() * arr.length);

    return arr[randIndex];
  };

  render() {
    console.log('render will run Third');
    const btnText = this.state.count ? this.state.count : 'inc Count';
    return (
      <div class={mountingCss.card}>
        <h1>Testing</h1>
        <div class={mountingCss.innerCard}>
          <h3>State From Props: {this.state.firstName}</h3>
          <h3>
            Fetched Data:{' '}
            {this.state.data &&
              this.random(this.state.data).name.common}
          </h3>
          <button onClick={this.incCount} className={mountingCss.btn}>
            {btnText}
          </button>
          <h1>{this.state.congrets && this.state.congrets}</h1>
        </div>
      </div>
    );
  }
}

export { LifeCycle };
