import React from 'react';
import ReactDOM from 'react-dom';

// import imageDp from './image/imageDp.jpg';

// let techs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'TypeScript',
//   'JQuary',
//   'NodeJs',
//   'Express',
// ];
// techs = techs.map((tech) => <li key={tech}>{tech}</li>);

// const Skill = (p) => <ul>{p.skills}</ul>;

// const user = {
//   firstName: 'Sourov',
//   lastName: 'Chowdhury',
// };

// const yearBorn = 1929;
// const age = new Date().getFullYear() - yearBorn;

// const userJsxStyle = {
//   width: '200px',
//   border: '1px solid',
//   borderRadius: '50%',
// };

// const personAge = (
//   <p>
//     {'  '}
//     {user.firstName} {user.lastName} is {age} years old
//   </p>
// );

// const UserComp = () => {
//   return (
//     <div>
//       {personAge}
//       <img src={imageDp} alt="Dp" style={userJsxStyle}></img>
//     </div>
//   );
// };

// const headerStyle = {
//   backgroundColor: '#61DBFB',
//   lineHight: 1.5,
// };

// const welcome = 'Welcome to 30 Dayes Of React';

// const Header = (p) => {
//   return (
//     <header style={headerStyle}>
//       <div className="header-wrapper">
//         <h1>{p.welcome}</h1>
//         <h2>Getting Started React</h2>
//         <h3>JavaScript Library</h3>
//       </div>
//     </header>
//   );
// };

// const hexcolor = () => {
//   const str = '0123456790abcdef';
//   let color = '';

//   for (let i = 0; i < 6; i++) {
//     let index = Math.floor(Math.random() * str.length);
//     color += str[index];
//   }
//   return `#${color}`;
// };

// const HexColor = () => <div>{hexcolor()}</div>;

// const Button = (p) => <button onClick={p.onClick}>{p.text}</button>;

// const mainStyle = {
//   backgroundColor: '#F3F0F5',
// };

// const Main = () => {
//   return (
//     <main style={mainStyle}>
//       <div className="main-wrapper">
//         <p>
//           Prerequisite to get Started{' '}
//           <strong>
//             <em>react.js</em>
//           </strong>
//         </p>
//         <Skill skills={techs} />
//         <UserComp />
//         <HexColor />
//         <Button onClick={() => alert('hi')} text="Hi!" />
//         <Button onClick={() => alert('bal')} text="Bal" />
//       </div>
//     </main>
//   );
// };

// const footerStyle = {
//   // backgroundColor: '#61DBFB',
//   backgroundColor: hexcolor(),
//   textAlign: 'center',
// };

// const Footer = () => {
//   return (
//     <footer style={footerStyle}>
//       <div className="footer-wrapper">
//         <p>Copyright 2020</p>
//       </div>
//     </footer>
//   );
// };

// const App = () => {
//   return (
//     <div>
//       <Header welcome={welcome} />
//       <Main />
//       <Footer />
//     </div>
//   );
// };

const skills = [
  ['HTML', 10],
  ['CSS', 7],
  ['JavaScript', 9],
  ['React', 8],
];

class Skill extends React.Component {
  render() {
    const {
      skill: [tech, level],
    } = this.props;

    return (
      <li key={tech}>
        {tech} {level}
      </li>
    );
  }
}

class Skills extends React.Component {
  render() {
    const { skills } = this.props;

    return (
      <ul>
        {skills.map((skill) => (
          <Skill key={skill[0]} skill={skill} />
        ))}
      </ul>
    );
  }
}

const countries = [
  { name: 'Finland', city: 'Helsinki' },
  { name: 'Sweden', city: 'Stockholm' },
  { name: 'Denmark', city: 'Copenhagen' },
  { name: 'Norway', city: 'Oslo' },
  { name: 'Iceland', city: 'Reykjavík' },
];

class Countries extends React.Component {
  render() {
    const { countries } = this.props;

    return (
      <div>
        {countries.map(({ name, city }) => (
          <div key={name}>
            <h1>{name}</h1>
            <small>{city}</small>
          </div>
        ))}
      </div>
    );
  }
}

const App = () => (
  <div>
    <Skills skills={skills} />
    <Countries countries={countries} />
  </div>
);

const rootEml = document.querySelector('.root');

ReactDOM.render(<App />, rootEml);
