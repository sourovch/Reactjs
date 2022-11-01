import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
  Navigate,
} from 'react-router-dom';
import './index.css';
import App from './App';
import Info from './routes/info';
import Tutorial from './routes/tutorial';
import Invoices from './routes/invoices';
import Invoice from './routes/invoice';
import Brands from './routes/brands';
import { getInvoices } from './data';
import BrandInfo from './routes/brandInfo';

const SecretComp = () => {
  return (
    <>
      <h1>this is Secret</h1>
      <Link to="secretLink">Secret Link</Link>
      <Outlet />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
const invoices = getInvoices();
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route
          index
          element={
            <div>
              <h1>Welcome Select An Option</h1>
            </div>
          }
        />
        <Route path="info" element={<Info />} />
        <Route path="tutorial" element={<Tutorial />} />
        <Route
          path="invoices"
          element={<Invoices invoices={invoices} />}
        >
          <Route
            index
            element={
              <div style={{ padding: '1rem' }}>
                <h1>select an invoice</h1>
              </div>
            }
          />
          <Route path=":invoiceId" element={<Invoice />} />
          <Route
            path="*"
            element={
              <div style={{ padding: '1rem' }}>
                <h1>there is nothig hear</h1>
              </div>
            }
          />
        </Route>
        <Route path="/brands" element={<Brands />}>
          <Route index element={<BrandInfo />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
      <Route path="/secret" element={<SecretComp />}>
        <Route
          path="secretLink"
          element={
            <h1>I am working on it. it will take some time</h1>
          }
        ></Route>
        <Route path="*" element={<h1>'there is nothing hare'</h1>} />
      </Route>
    </Routes>
  </BrowserRouter>
);
