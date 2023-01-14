
import React, { Component } from 'react'
import Signup from '../Signup'

class SignUpPage extends Component {

  render() {
    return (
      <div className="main-div">
        <div className="bg-image"></div>
        <div className="bg-text">
          <Signup />
        </div>
      </div>
    );
  }
}

export default SignUpPage