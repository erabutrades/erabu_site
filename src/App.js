import './App.css';

import LandingPage from "./LandingPage";
import OtherPage from "./OtherPage"

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import React, { useState } from 'react';
import axios, * as others from 'axios';

import {
  BrowserRouter as Router,
  Outlet, Link, useRoutes, useLocation
} from "react-router-dom";


function Layout() {
  return (
    <div>

      <nav>
        <ul>
          <li>
            <Link to="/">Landing</Link>
          </li>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/otherpage">Other Page</Link>
          </li>
        </ul>
      </nav>

      <hr />
      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>);
};

function App() {

  const home = <LandingPage />;

  const routes = [
    {
      path: '/',
     //element: <Layout />,
      children: [
        { index: true, element: home }, // The index route defines what should be displayed nn the default route i.e. '/'
        { path: '/home', element: home },
        //{ path: '/signup', element: <SignUpPage /> },
        //{ path: '/login', element: <LoginPage /> },
        { path: '/otherpage', element: <OtherPage /> },
        { path: '/*', element: home }
      ],
    },
  ];

  return useRoutes(routes);
}

export default App;