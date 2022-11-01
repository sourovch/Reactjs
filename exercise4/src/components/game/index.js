import React, { Component } from 'react';
import './index.css';

class GameObject extends Component {
  state = {
    position: this.props.onMouseOver(this.props.window),
  };
  render() {
    const { onMouseOver, window } = this.props;
    return (
      <h1
        onMouseOver={() =>
          this.setState({ position: onMouseOver(window) })
        }
        onTouchStart={() =>
          this.setState({ position: onMouseOver(window) })
        }
        className="game-object"
        style={{
          position: 'absolute',
          top: `${this.state.position.y}px`,
          left: `${this.state.position.x}px`,
        }}
      >
        30-dayes-of-react
      </h1>
    );
  }
}

class GameBox extends Component {
  randPosition = (window) => {
    return {
      x: Math.floor(Math.random() * (window.innerWidth - 200)),
      y: Math.floor(Math.random() * (window.innerHeight - 200)),
    };
  };
  render() {
    const { window } = this.props;
    return (
      <div
        className="game-box"
        style={{
          position: 'relative',
          width: window.innerWidth,
          height: window.innerHeight,
        }}
      >
        <GameObject onMouseOver={this.randPosition} window={window} />
      </div>
    );
  }
}

export { GameBox };
