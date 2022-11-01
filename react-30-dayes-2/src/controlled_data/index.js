import React, { Component } from 'react';
class From extends Component {
  state = {
    userName: '',
  };

  #touched = {};

  #data;

  blurHandle = (e) => {
    const { name } = e.target;

    this.#touched[name] = true;
  };

  changeHandle = (e) => {
    this.#data = e.target.value;
  };

  submitHandle = (e) => {
    e.preventDefault();

    this.setState({ userName: this.#data });
  };

  validate = (name, data) => {
    if (this.#touched[name] && data.length > 3 && data.length < 20)
      return `${data}`;

    if (this.#touched[name]) return `${name} data is not valid`;
  };
  render() {
    return (
      <div className="input-wrapper">
        <h1>Controlled Data</h1>
        <form onSubmit={this.submitHandle}>
          <label htmlFor="u-name">Name:</label>
          <input
            type="text"
            name="userName"
            id="u-name"
            placeholder="Input Name"
            onBlur={this.blurHandle}
            onChange={this.changeHandle}
          />
          <button className="white-border" type="submit">
            Submit
          </button>

          <h2>{this.validate('userName', this.state.userName)}</h2>
        </form>
      </div>
    );
  }
}

export { From };
