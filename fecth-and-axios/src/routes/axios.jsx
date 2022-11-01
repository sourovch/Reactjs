import React, { Component } from 'react';
import axios from 'axios';
import Post from './posts';

class Axios extends Component {
  state = {
    data: [],
    err: false,
  };
  componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    axios(url, {
      timeout: 4000,
    })
      .then((res) => {
        this.setState({ data: res.data });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ err: true });
      });
  }
  render() {
    const postCount = 5;
    const posts = [];
    const { data, err } = this.state;
    if (data.length > 0) {
      for (let i = 0; i < postCount; i++) {
        posts.push(
          <Post
            key={i}
            post={data[Math.floor(Math.random() * data.length)]}
          />
        );
      }
    }
    const renData =
      data.length > 0 ? (
        <>{posts}</>
      ) : (
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>
      );
    return err ? <h1>Somthing Went Wrong</h1> : <div>{renData} </div>;
  }
}

export { Axios };
