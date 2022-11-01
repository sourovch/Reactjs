import React, { Component } from 'react';

class ShowDate extends Component {
  render() {
    const { currDate } = this.props;
    return (
      <h3 className="date-component">{currDate.toDateString()}</h3>
    );
  }
}

export { ShowDate };
