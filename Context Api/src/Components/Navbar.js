import { useUserData } from '../Contexts/userInfo';
import { NavLink } from 'react-router-dom';

export function Navbar() {
  const userData = useUserData();

  return (
    <nav
      style={{
        padding: '.2em 1em',
        backgroundColor: 'rgb(0, 20, 25)',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <h1
        style={{
          fontWeight: 700,
          color: '#fff',
        }}
      >
        LOGO
      </h1>
      <div
        style={{
          display: 'flex',
          marginLeft: 'auto',
          color: '#fff',
          gap: '1em',
        }}
      >
        <>
          <NavLink
            to={`/`}
            style={{ color: '#fff', textDecoration: 'none' }}
          >
            Home
          </NavLink>
          {userData?.loggedIn ? (
            <NavLink
              to={`/me`}
              style={{ color: '#fff', textDecoration: 'none' }}
            >
              {userData.name}
            </NavLink>
          ) : (
            <NavLink
              to={`/login`}
              style={{ color: '#fff', textDecoration: 'none' }}
            >
              Login
            </NavLink>
          )}
        </>
      </div>
    </nav>
  );
}
