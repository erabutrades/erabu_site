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
                    <h4>Erabu Trades Is Under Construction</h4>
                    <BannerHome />
                    <h2>Trade your options, not your time.</h2>
                    <br />
                    <div className="ebook-sub-btn">
                        <SubscribeComponent overrideText="<< Get Announcements" />
                    </div>
                </div>
            </div >
        </div >
    )
}

export default LandingPage