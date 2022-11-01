import React from 'react';
import ReactDOM from 'react-dom';

import htmlLogo from './image/html.png';
import cssLogo from './image/css.png';
import jsLogo from './image/javascript.png';
import reactLogo from './image/react.png';
import displyPic from './image/Dp.jpg';
import blueTickimg from './image/blueTick.png';
import clockimg from './image/clock.png';

const rootElm = document.querySelector('.root');
const imgStyle = { width: 'clamp(50px, 20%, 100px)' };
let skills = [
  'HTML',
  'CSS',
  'Sass',
  'Js',
  'React',
  'Redux',
  'Node',
  'MongoDB',
  'Python',
  'Flask',
  'Django',
  'Numpy',
  'Pandas',
  'Data Analysis',
  'MYSQL',
  'GraphQl',
  'D3.js',
  'Gatsby',
  'Doker',
  'Heroku',
  'Git',
];

skills = skills.map((skill) => <li key={skill}>{skill}</li>);

const Level1 = () => (
  <div className="card">
    <h3>Front End Technologies</h3>
    <div className="logo-wrapper">
      <img src={htmlLogo} alt="html logo" style={imgStyle} />
      <img src={cssLogo} alt="css logo" style={imgStyle} />
      <img src={jsLogo} alt="javascript logo" style={imgStyle} />
      <img src={reactLogo} alt="react logo" style={imgStyle} />
    </div>
  </div>
);

const Level2 = () => (
  <div className="card-2">
    <h1>SUBSCRIBE</h1>
    <p>Sing up with your email address to receive news and updates</p>
    <form>
      <input type="text" placeholder="First name" />
      <input type="text" placeholder="Last name" />
      <input type="text" placeholder="Email" />
      <button type="submit" className="btn">
        Subscribe
      </button>
    </form>
  </div>
);

const blueTick = (
  <img src={blueTickimg} alt="verifyed" style={{ width: '.8em' }} />
);
const clock = (
  <img src={clockimg} alt="clock" style={{ width: '1em' }} />
);

const Level3 = () => (
  <div className="card-3">
    <div className="dp" style={{ width: 'clamp(150px, 20%, 500px)' }}>
      <img src={displyPic} style={{ width: '100%' }} alt="Display" />
    </div>
    <h3 className="p-name">Asabeneg yetayeh{blueTick}</h3>
    <h5 className="p-job">senior developer, finland</h5>
    <div className="skills">
      <h3>SKILLS</h3>
      <ul>{skills}</ul>
    </div>
    <h5>{clock}Joind on Aug 30, 2020</h5>
  </div>
);

const hex = () => {
  const str = '0123456789abcdef';
  let color = '';

  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return `#${color}`;
};

const Level301 = () => {
  const colorCount = 6;
  const arr = [];
  for (let i = 0; i < colorCount; i++) {
    const color = hex();
    arr.push(
      <div style={{ backgroundColor: color }} className="rand-color">
        <p>{color}</p>
      </div>
    );
  }
  return <div className="card-301">{arr}</div>;
};

const App = () => (
  <div>
    <h2>Exercise lvl.1</h2>
    <Level1 />
    <h2>Exercise lvl.2</h2>
    <Level2 />
    <div style={{ backgroundColor: '#eff0f6', padding: '1em' }}>
      <h2>Exercise lvl.3</h2>
      <Level3 />
      <h3>Exercise lvl 3.1</h3>
      <Level301 />
    </div>
  </div>
);

ReactDOM.render(<App />, rootElm);
