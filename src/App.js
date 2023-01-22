import './App.css';
import logo from "./logo.png";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import React, { useState } from 'react';
import axios, * as others from 'axios';
import { logDOM } from '@testing-library/react';

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

  return (
    <div className="main-div">
      <div className="bg-main">
        <img className="logo-header" src={logo} alt="logo.png" />
        <h1>ERABU TRADES</h1>
      </div>
      <div className="white-box-text">
        <h1>Under Construction V2</h1>
        {!hasSubscribed ? SubscribeSection(formEmailValue, setFormEmailValue, subscribeSectionSubmitHandler) : ThanksSection()}
      </div>
    </div >
  );
}

export default App;