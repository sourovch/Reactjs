import React, { Component } from 'react';

class UcForm extends Component {
  username = React.createRef();
  username2 = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();

    console.log(this.username.current.value);
    console.log(this.username2.current.value);
  };
  render() {
    return (
      <div className="input-wrapper">
        <h1>Uncontrolled Data</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="u-name">Name</label>
          <input
            type="text"
            name="userName"
            id="u-name"
            ref={this.username}
            placeholder="Name"
          />
          <label htmlFor="u-name2">Name Again</label>
          <input
            type="text"
            name="userName2"
            id="u-name2"
            ref={this.username2}
            placeholder="Name Again"
          />
          <button className="white-border" type="submit">
            submit
          </button>
        </form>
      </div>
    );
  }
}

export { UcForm };
