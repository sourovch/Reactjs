import { useLocation, NavLink } from 'react-router-dom';

export default function QurryNavLink({ to, ...props }) {
  const location = useLocation();
  return <NavLink to={to + location.search} {...props} />;
}
