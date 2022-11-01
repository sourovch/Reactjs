import React from 'react';

import { themeContext } from '../hooks/themeContext';

export default class ClassComp extends React.Component {
  selectTheme = (bool) => {
    return !bool
      ? {
          backgroundColor: 'gray',
          color: 'black',
          margin: '2em',
          padding: '2em',
        }
      : {
          backgroundColor: 'black',
          color: 'white',
          margin: '2em',
          padding: '2em',
        };
  };

  render() {
    return (
      <themeContext.Consumer>
        {(value) => (
          <div style={this.selectTheme(value)}>Class Component</div>
        )}
      </themeContext.Consumer>
    );
  }
}
