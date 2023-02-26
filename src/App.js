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

import SubscribeThanksPage from "./SubscribeThanksPage";
import AC_Grandfather from './ac_grandfather';


import BannerHomeInv from "./inv_banner"
function InvBanner() {
  return (
    <div className="main-div">
      <div className="bg-main">
        <div className="white-box-text">
          <BannerHomeInv />
          <h4>Trade your options, not your time.</h4>
          <br />
        </div>
      </div >
    </div >
  )
}


function Layout() {
  return (
    <div>

      <nav>
        <ul>
          <li>
            <Link to="/">Landing</Link>
          </li>
          <li>
            <Link to="/subscribe_thanks">Subscribe Thanks</Link>
          </li>
          <li>
            <Link to="/ac_grandfather">AC Grandfather</Link>
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
        { path: "/subscribe_thanks", element: <SubscribeThanksPage /> },
        //{ path: '/signup', element: <SignUpPage /> },
        //{ path: '/login', element: <LoginPage /> },
        { path: '/ac_grandfather', element: <AC_Grandfather /> },
        { path: '/inv_banner', element: <BannerHomeInv /> },
        { path: '/*', element: home }
      ],
    },
  ];

  return useRoutes(routes);
}

export default App;