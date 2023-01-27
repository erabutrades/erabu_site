import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios';


import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

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

function performSubscription(email, route) {
    let data = { "email": email, "route": route };
    let endpoint = "https://gw9t58i6ti.execute-api.us-east-1.amazonaws.com/erabu-add-subscription"

    axios({
        method: 'post',
        url: endpoint,
        data: data,
    }).then((response) => {
        console.log(response);
    }).catch((err) => {
        if (err.response) {
            console.log("client received an error response (5xx, 4xx)");
        }
        else if (err.request) {
            console.log("client never got a response, or the request never left");
        }
        else {
            console.log("unknown error occured during post");
        }
        console.error(err);
    });
}

function SubscribeComponent(props) {
    const [formEmailValue, setFormEmailValue] = useState();
    const location = useLocation(); //the url route
    const navigate = useNavigate();

    function onInput({ target: { value } }) {
        setFormEmailValue(value);
    }

    function onFormSubmit(e) {
        e.preventDefault();
        performSubscription(formEmailValue, location.pathname);
        setFormEmailValue("");
        navigate("/subscribe_thanks");
    }

    return (
        <div>
            <Form onSubmit={onFormSubmit}>
                <Row className="justify-content-md-center">
                    <Col xs="auto">
                        <Form.Control
                            className="mb-2"
                            id="inlineFormInput"
                            placeholder="Enter email"
                            onChange={onInput}
                            value={props.formEmailValue}
                        />
                    </Col>
                    <Col xs="auto">
                        <Button type="submit" className="mb-2" disabled={!validateEmail(formEmailValue)}>Subscribe</Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}


export default SubscribeComponent