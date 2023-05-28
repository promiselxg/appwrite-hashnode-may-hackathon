import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import LandingPage from './pages/LandingPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import Layout from './Layout.jsx';
import AdminPage from './pages/AdminPage';
import PhoneBookPage from './pages/PhoneBookPage';
import Dashboard from './pages/Dashboard';
import { FormToggleProvider } from './contexts/FormToggleContext';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index={true} path="/" element={<LandingPage />} />
      </Route>
      <Route index={true} path="login" element={<LoginPage />} />
      <Route path="admin" element={<AdminPage />}>
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/phone-book" element={<PhoneBookPage />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormToggleProvider>
      <RouterProvider router={router} />
    </FormToggleProvider>
  </React.StrictMode>
);
