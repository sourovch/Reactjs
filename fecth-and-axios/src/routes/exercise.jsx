import React, { Component } from 'react';
import axios from 'axios';

const Cat = ({ cat, breedCount }) => {
  const {
    name,
    weight: { metric },
    life_span,
    image,
  } = cat;
  const weightNumbers = metric.split(' - ').map((i) => Number(i));
  const weightTotal = weightNumbers.reduce(
    (prevValue, currValue) => prevValue + currValue,
    0
  );
  const avgWeight = weightTotal / weightNumbers.length;

  const lifeSpanNumbers = life_span
    .split(' - ')
    .map((i) => Number(i));
  const lifeSpanTotal = lifeSpanNumbers.reduce(
    (prev, curr) => prev + curr,
    0
  );
  const lifeSpanAvg = lifeSpanTotal / lifeSpanNumbers.length;
  return (
    <div className="cat-wrapper">
      <h1>Cat: {name}</h1>
      <h3>There are {breedCount} breed</h3>
      <div className="txt-wrapper">
        <h3>Avarage A Cat Can Weight</h3>
        <span className="round-txt">{avgWeight}</span>
        <h3>kg and lives</h3>
        <span className="round-txt">{lifeSpanAvg}</span>{' '}
        <h3>years</h3>
      </div>
      <div
        style={{
          maxWidth: '40%',
          aspectRatio: 1,
          borderRadius: '33px',
          overflow: 'hidden',
          margin: '1em auto',
        }}
      >
        <img src={image.url} alt={name} style={{ height: '100%' }} />
      </div>
    </div>
  );
};

class Exercise extends Component {
  state = {
    data: [],
    err: false,
  };
  componentDidMount() {
    const url = 'https://api.thecatapi.com/v1/breeds';
    axios(url)
      .then((res) => this.setState({ data: res.data }))
      .catch((err) => {
        console.log(err);
        this.setState({ err: true });
      });
  }
  render() {
    const { data, err } = this.state;
    const renData =
      data.length > 0 ? (
        <Cat
          cat={data[Math.floor(Math.random() * data.length)]}
          breedCount={data.length}
        />
      ) : (
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>
      );
    return err ? <h1>somthing went wrong</h1> : <>{renData}</>;
  }
}

export { Exercise };
