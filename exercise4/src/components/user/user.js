import React, { Component } from 'react';

class User extends Component {
  state = {
    firstName: '',
    lastName: '',
    address: '',
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    console.log(this.state);
  };

  render() {
    return (
      <>
        <form onSubmit={this.onSubmit}>
          <h2>Form</h2>
          <input
            type="text"
            id="firstName"
            name="firstName"
            onChange={this.onChange}
          />
          <input
            type="text"
            id="lastName"
            name="lastName"
            onChange={this.onChange}
          />
          <input
            type="text"
            id="address"
            name="address"
            onChange={this.onChange}
          />
          <button type="submit">Submit</button>
        </form>
        <div>
          <h2>User</h2>
          <p>First Name: {this.state.firstName}</p>
          <p>Last Name: {this.state.lastName}</p>
          <p>Address: {this.state.address}</p>
        </div>
      </>
    );
  }
}

export { User };
