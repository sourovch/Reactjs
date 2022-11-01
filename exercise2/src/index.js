import React from 'react';
import ReactDom from 'react-dom';

const numCount = 32;
const numbers = [];
for (let i = 0; i < numCount; i++) {
  numbers.push(i);
}

const isPrime = (num) => {
  let isPrime = true;
  if (num === 1 || num === 0) return (isPrime = false);

  const absNum = Math.abs(num);

  for (let i = 2; i < absNum; i++) {
    if (absNum % i === 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
};

const randColor = () => {
  const str = '0123456789abcdef';
  let color = '';
  for (let i = 0; i < 6; i++) {
    color += str[Math.floor(Math.random() * str.length)];
  }
  return `#${color}`;
};

const colorCount = 32;
const colors = [];
for (let i = 0; i < colorCount; i++) {
  colors.push(randColor());
}

const tenHighestPopulation = [
  { country: 'World', population: 7693165599 },
  { country: 'China', population: 1377422166 },
  { country: 'United States of America', population: 323947000 },
  { country: 'India', population: 1295210000 },
  { country: 'Brazil', population: 206135893 },
  { country: 'Indonesia', population: 258705000 },
  { country: 'Pakistan', population: 194125062 },
  { country: 'Nigeria', population: 186988000 },
  { country: 'Bangladesh', population: 161006790 },
  { country: 'Russian Federation', population: 146599183 },
  { country: 'Japan', population: 126960000 },
];

const Number = ({ number }) => {
  if (isPrime(number))
    return (
      <div className="num prime">
        <h1>{number}</h1>
      </div>
    );

  if (number % 2 !== 0)
    return (
      <div className="num odd">
        <h1>{number}</h1>
      </div>
    );

  return (
    <div className="num even">
      <h1>{number}</h1>
    </div>
  );
};

const NumGraph = ({ numbers }) => {
  return (
    <div className="card1">
      <h1>30 Dayes Of React</h1>
      <h2>Color Genaretor</h2>
      <div className="num-cont">
        {numbers.map((number) => (
          <Number key={number} number={number} />
        ))}
      </div>
    </div>
  );
};

const ColorGraph = ({ colors }) => {
  return (
    <div className="card2">
      <h1>30 Dayes Of React</h1>
      <h2>Hexadecimal Colors</h2>
      <div className="color-cont">
        {colors.map((color) => (
          <div
            key={color}
            style={{ backgroundColor: color }}
            className="color"
          >
            <p>{color}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

class Population extends React.Component {
  render() {
    const { obj, maxPop } = this.props;
    return (
      <div className="bar-wrapper">
        <p>{obj.country}</p>
        <div className="bar-containar">
          <div
            className="bar"
            style={{
              width: this.#calcPersent(maxPop, obj.population),
            }}
          ></div>
        </div>
        <p>{obj.population.toLocaleString('en-US')}</p>
      </div>
    );
  }

  #calcPersent = (numM, numP) => {
    const per = (numP / numM) * 100;

    return `${per}%`;
  };
}

class PopulationGraph extends React.Component {
  render() {
    const { data, sortKey } = this.props;
    this.#sortObjArr(data, sortKey);
    const maxPop = data[0][sortKey];

    return (
      <div className="card3">
        <h1>30 Dayes Of React</h1>
        <h2>World Population</h2>
        {data.map((obj) => (
          <Population key={obj.country} obj={obj} maxPop={maxPop} />
        ))}
      </div>
    );
  }

  #sortObjArr(arr, key) {
    arr.sort((a, b) => {
      const x = a[key];
      const y = b[key];
      return x > y ? -1 : 1;
    });
  }
}

const App = () => (
  <div className="app">
    <NumGraph numbers={numbers} />
    <ColorGraph colors={colors} />
    <PopulationGraph
      data={tenHighestPopulation}
      sortKey="population"
    />
  </div>
);

const rootElm = document.querySelector('.root');
ReactDom.render(<App />, rootElm);
