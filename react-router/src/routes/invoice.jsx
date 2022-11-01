import {
  useParams,
  Outlet,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import { getinvoice, deleleInvoice } from '../data';

export default function Invoice() {
  const navigate = useNavigate();

  const location = useLocation();

  const params = useParams();

  let invoice = getinvoice(Number(params.invoiceId));

  const renData = invoice ? (
    <div style={{ padding: '1rem' }}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
      <p>
        <button
          onClick={(e) => {
            deleleInvoice(invoice.number);
            navigate('/invoices' + location.search);
          }}
        >
          Delele
        </button>
      </p>
      <Outlet />
    </div>
  ) : (
    <h1 style={{ padding: '1rem' }}>nothing found 404</h1>
  );

  return <>{renData}</>;
}
