import './App.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import React, { useState } from 'react';
import axios, * as others from 'axios';


import HomePage from './pages/HomePage';
import OtherPage from './pages/OtherPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Switch,
  Redirect,
  Outlet, Link, useRoutes, useLocation
} from "react-router-dom";

import UserStatus from './UserStatus'


function SubscribeSection(formEmailValue, setFormEmailValue, subscribeSectionSubmitHandler) {

  function onInput({ target: { value } }) {
    setFormEmailValue(value);
  }

  function onFormSubmit(e) {
    e.preventDefault();
    console.log(formEmailValue);
    setFormEmailValue("");
    subscribeSectionSubmitHandler();




    {
      let data = { "email": formEmailValue };
      let endpoint = "https://505u3bdxg5.execute-api.us-east-1.amazonaws.com/construction_site_subscribe_lambda"

      axios({
        method: 'post',
        url: endpoint,
        data: data,
      }).then((response) => {
        console.log(response);
      }).catch((err) => {
        let x = 0;
        if (err.response) {
          //client received an error response (5xx, 4xx)
          x++
        }
        else if (err.request) {
          //client never got a response, or the request never left
          x++
        }
        else {
          x++
        }
        console.error(err);
      });
    }
  }

  return (
    <div>
      <p>Subscribe below to receive the latest information.</p>
      <Form onSubmit={onFormSubmit}>
        <Row className="justify-content-md-center">
          <Col xs="auto">
            <Form.Control
              className="mb-2"
              id="inlineFormInput"
              placeholder="Enter email"
              onChange={onInput}
              value={formEmailValue}
            />
          </Col>
          <Col xs="auto">
            <Button type="submit" className="mb-2">Subscribe</Button>
          </Col>
        </Row>
      </Form>
    </div>);
}


function ThanksSection() {
  return (
    <div>
      <h3>Thanks for subscribing.</h3>
      <p>We will be in touch with the latest news.</p>
    </div>);

}

const Layout = () => (
  <div>
    <h1>
      <UserStatus/>
    </h1>
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
  </div>
);

function App() {

  const home = <HomePage />;

  const routes = [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: home }, // The index route defines what should be displayed nn the default route i.e. '/'
        { path: '/home', element: home },
        { path: '/signup', element: <SignUpPage /> },
        { path: '/login', element: <LoginPage /> },
        { path: '/otherpage', element: <OtherPage /> },
      ],
    },
  ];

  const [formEmailValue, setFormEmailValue] = useState();
  const [hasSubscribed, setHasSubscribed] = useState(false);

  function subscribeSectionSubmitHandler() {
    setHasSubscribed(true);
  }

  return useRoutes(routes);

  //   <div className="main-div">
  //     <div className="bg-image"></div>
  //     <div className="bg-text">
  //       <h1>Under Construction V2</h1>
  //       <Signup />
  //       <hr />
  //       <Signin />
  //       <UserStatus />
  //     </div>
  //   </div>
  // );
  //{!hasSubscribed ? SubscribeSection(formEmailValue, setFormEmailValue, subscribeSectionSubmitHandler) : ThanksSection()}


}

export default App;