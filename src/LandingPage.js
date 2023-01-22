import React, { Component } from 'react'


import logo from "./logo.png";

class LandingPage extends Component {

    render() {
        return (
            <div className="main-div">
                <div className="bg-main">
                    <img className="logo-header" src={logo} alt="logo.png" />
                    <h1>ERABU TRADES</h1>
                </div>
                <div className="white-box-text">
                    <h1>Under Construction V2</h1>
                    {/*!hasSubscribed ? SubscribeSection(formEmailValue, setFormEmailValue, subscribeSectionSubmitHandler) : ThanksSection()*/}
                </div>
            </div >
        )
    }
}

export default LandingPage