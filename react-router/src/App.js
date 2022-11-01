import './App.css';
import { NavLink, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      <nav
        style={{
          paddingBottom: '1rem',
          borderBottom: '1px solid',
        }}
      >
        <NavLink
          style={({ isActive }) => {
            return { color: isActive ? 'red' : '' };
          }}
          to="/info"
        >
          Info
        </NavLink>{' '}
        <NavLink
          style={({ isActive }) => {
            return { color: isActive ? 'red' : '' };
          }}
          to="/tutorial"
        >
          Tutorial
        </NavLink>{' '}
        <NavLink
          style={({ isActive }) => {
            return { color: isActive ? 'red' : '' };
          }}
          to="/invoices"
        >
          Invoices
        </NavLink>{' '}
        <NavLink
          style={({ isActive }) => {
            return { color: isActive ? 'red' : '' };
          }}
          to="/brands"
        >
          brands
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
