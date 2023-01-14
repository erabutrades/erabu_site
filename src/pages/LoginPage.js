
import React, { Component } from 'react'
import Signin from '../Signin'
import { getCurrentUser } from '../utility/Cognito'

import {
  Link
} from "react-router-dom";


function NormalLogin(props) {
  return <Signin />;
}

function AlreadySignedIn(props) {
  return <h1>
    You are already signed in.
    <li>
      <Link to="/">Goto Landing</Link>
    </li>
  </h1>;
}


function Check(email) {

  let isLoggedIn = (email != null);

  if (!isLoggedIn) {
    return NormalLogin();
  }
  else {
    return AlreadySignedIn();
  }
}

class LoginPage extends Component {

  constructor(props) {
    super(props)
    this.state = {
      email: null,
    }
  }

  componentDidMount() {
    getCurrentUser(attributes => {
      for (let i = 0; i < attributes.length; i++) {
        if (attributes[i].Name === 'email') {
          this.setState({ email: attributes[i].Value })
        }
      }
    })
  }

  render() {
    return (
      <div className="main-div">
        <div className="bg-image"></div>
        <div className="bg-text">
          {Check(this.state.email)}
        </div>
      </div>
    );
  }
}

export default LoginPage