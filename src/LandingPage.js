import React, { useState } from 'react'

import SubscribeComponent from "./SubscribeComponent"

import logo from "./logo.png";

function LandingPage() {
    return (
        <div className="main-div">
            <div className="bg-main">
                <img className="logo-header" src={logo} alt="logo.png" />
                <h1>ERABU TRADES</h1>
            </div>
            <div className="white-box-text">
                <h1>Under Construction V2</h1>
                <SubscribeComponent />
            </div>
        </div >
    )
}

export default LandingPage