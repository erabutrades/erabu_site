import React, { useState } from 'react'

import SubscribeComponent from "./SubscribeComponent"

import logo from "./logo.png";
import logo_banner from "./logo_banner.png";

function LandingPage() {
    return (
        <div className="main-div">
            <div className="bg-main">
                <div className="white-box-text">
                    <img className="logo-banner" src={logo_banner} alt="logo_banner.png" />
                    <p>Trade your options, not your time.</p>
                    <SubscribeComponent />
                </div>
            </div >
        </div >
    )
}

export default LandingPage