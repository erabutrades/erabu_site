import React, { Component } from 'react'
import { createUser, verifyUser } from './utility/Cognito'

class Signup extends Component {
  constructor (props) {
    super(props)
    this.changeEmail = this.changeEmail.bind(this)
    this.changePhoneNumber = this.changePhoneNumber.bind(this)
    this.changeGivenName = this.changeGivenName.bind(this)
    this.changeFamilyName = this.changeFamilyName.bind(this)
    this.changePassword = this.changePassword.bind(this)
    this.handleSignupSubmit = this.handleSignupSubmit.bind(this)
    this.handleSignupSubmit = this.handleSignupSubmit.bind(this)

    //this.changeVerifyCode = this.changeVerifyCode.bind(this)
    //this.handleVerifySubmit = this.handleVerifySubmit.bind(this)

    this.state = {
      email: '',
      password: '',
      givenName: '',
      familyName: '',
      phoneNumber: '',
     // verifyCode: '',
      showVerification: false,
    }
  }

  changeEmail (e) {
    this.setState({ email: e.target.value })
  }

  changePhoneNumber (e) {
    this.setState({ phoneNumber: e.target.value })
  }

  changeGivenName (e) {
    this.setState({ givenName: e.target.value })
  }

  changeFamilyName (e) {
    this.setState({ familyName: e.target.value })
  }

  changePassword (e) {
    this.setState({ password: e.target.value })
  }

  // changeVerifyCode (e) {
  //   this.setState({ verifyCode: e.target.value })
  // }

  handleSignupSubmit (e) {
    const { givenName, familyName, email, phoneNumber, password } = this.state
    e.preventDefault()
    console.log('Entered:', this.state)
    createUser(givenName, familyName, email, phoneNumber, password, (err, result) => {
      if (err) {
        console.log(err)
        return
      }
      console.log(result.user)
      this.setState({ showVerification: true })
    })
  }

  // handleVerifySubmit (e) {
  //   e.preventDefault()
  //   verifyUser(this.state.username, this.state.verifyCode, (err, result) => {
  //     if (err) {
  //       console.log(err)
  //       return
  //     }
  //     alert(result)
  //   })
  // }

  render () {
    return (
      <div className="Signup">
        <h2>Sign Up</h2>
        {
          !this.state.showVerification ? (
            <form onSubmit={this.handleSignupSubmit}>
              <div>
                <input
                  value={this.state.email}
                  placeholder='Email'
                  type='email'
                  onChange={this.changeEmail} />
              </div>
              <div>
                <input
                  value={this.state.phoneNumber}
                  placeholder='Phone Number'
                  type='tel'
                  onChange={this.changePhoneNumber} />
              </div>
              <div>
                <input
                  value={this.state.givenName}
                  placeholder='Given Name'
                  onChange={this.changeGivenName} />
              </div>
              <div>
                <input
                  value={this.state.familyName}
                  placeholder='Family Name'
                  onChange={this.changeFamilyName} />
              </div>
              <div>
                <input
                  value={this.state.password}
                  placeholder='Password'
                  type='password'
                  minLength={6}
                  onChange={this.changePassword} />
              </div>
              <div>
                <button type='submit'>Sign up</button>
              </div>
            </form>
          ) : (

            <div>A verification email has been sent. Please check your email inbox.</div>
            // <form onSubmit={this.handleVerifySubmit}>
            //   <input
            //     value={this.state.verifyCode}
            //     onChange={this.changeVerifyCode}
            //     placeholder='code' />
            //   <button type='submit'>Verify</button>
            // </form>
          )
        }
      </div>
    )
  }
}

export default Signup
