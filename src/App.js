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
  Route,
  Routes,
  Switch,
  Redirect,
  Outlet, Link, useRoutes, useLocation
} from "react-router-dom";


const Layout = () => (
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
  </div>
);



function validateEmail(email) {

  if (typeof (email) != 'string') {
    return false;
  }

  let res = String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

  return res;
};


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
      let endpoint = "https://gw9t58i6ti.execute-api.us-east-1.amazonaws.com/erabu-add-subscription"

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
            <Button type="submit" className="mb-2" disabled={!validateEmail(formEmailValue)}>Subscribe</Button>
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

function App() {
  const [formEmailValue, setFormEmailValue] = useState();
  const [hasSubscribed, setHasSubscribed] = useState(false);

  function subscribeSectionSubmitHandler() {
    setHasSubscribed(true);
  }

  const home = <LandingPage />;

  const routes = [
    {
      path: '/',
      element: <Layout />,
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