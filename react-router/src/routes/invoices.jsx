import { Outlet, useSearchParams } from 'react-router-dom';
import QurryNavLink from './qurryNavLink';

export default function Invoices({ invoices }) {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div style={{ display: 'flex' }}>
      <nav
        style={{
          borderRight: '1px solid',
          padding: '1rem',
        }}
      >
        <input
          value={searchParams.get('filter') || ''}
          onChange={(e) => {
            const filter = e.target.value;
            if (filter) return setSearchParams({ filter });
            setSearchParams({});
          }}
        />
        {invoices
          .filter((i) => {
            const filter = searchParams.get('filter');
            if (!filter) return true;
            const name = i.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((i) => (
            <QurryNavLink
              style={({ isActive }) => {
                return {
                  display: 'block',
                  margin: '1rem 0',
                  color: isActive ? 'red' : '',
                };
              }}
              to={`${i.number}`}
              key={i.number}
            >
              {i.name}
            </QurryNavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
}
