import React, { useState } from 'react'

import SubscribeComponent from "./SubscribeComponent"

import logo from "./logo.png";
import logo_banner from "./logo_banner.png";

import BannerHome from "./BannerHome"

function LandingPage() {
    return (
        <div className="main-div">
            <div className="bg-main">
                <div className="white-box-text">
                    <BannerHome/>
                    <p>Trade your options, not your time.</p>
                    <SubscribeComponent />
                </div>
            </div >
        </div >
    )
}

export default LandingPage