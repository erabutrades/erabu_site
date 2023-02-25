import React, { useState } from 'react'

import Image from 'react-bootstrap/Image';

import SubscribeComponent from "./SubscribeComponent"
import logo_banner from "./logo_banner.png";
import { useNavigate } from 'react-router-dom';

import Logo from "./logo.png";
import AngleBG from "./erabu_ac_bg_01.png";
import EBookPreview from "./et_guide_angle.png";


import BannerHome from "./BannerHome";




function StrategyGuideCC() {

    let navigate = useNavigate();

    function onBannerClick() {
        navigate("/");
    }

    return (
        <div className="scroll-div">
            <div className="bg-main">
                <div>
                    <Image src={AngleBG} className="bg-angle" />
                    <Image src={EBookPreview} className="ebook" />
                    <Image src={Logo} className="ebook-logo" />
                    <div className="ebook-header-container">
                        <h4>Erabu Trades Is Under Construction</h4>
                        <h1>Sign Up Now For Announcements</h1>
                        <h1>And Receive A <u>FREE</u></h1>
                        <h1 className="ebook-title">~ Erabu Trades Options Strategy Guide ~</h1>
                        <h1>Covered Call Edition</h1>
                        <br></br>
                        <div className="ebook-sub-btn">
                            <SubscribeComponent overrideText="<< Get My Free Guide" />
                        </div>
                        <br></br>
                        <h4>We detest SPAM and will never share your information.</h4>
                        <h4>Your Erabu Trades Options Strategy Guide is 100% FREE.</h4>
                        <h4>No obligation to make any purchases.</h4>
                    </div>
                </div>
                <div className="ebook-body-container">
                    <div className="ebook-body-title">
                        <h1>~ ERABU TRADES ~</h1>
                        <h1>Low Maintenance Covered Call Positions Management</h1>
                    </div>
                    <div className="ebook-body-body">
                        <ul>
                            <li><h2>Find effective trade entries</h2></li>
                            <li><h2>Detect profitable exits</h2></li>
                            <li><h2>Smart notifications that track your overall positions</h2></li>
                            <li><h2>Respects your time and focus with actionable information</h2></li>
                            <li><h2>Simple service backed up by intelligent formulas</h2></li>
                        </ul>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className="ebook-banner">
                        <BannerHome />
                    </div>
                    <br />
                    <br />
                </div>
                <div className="ebook-footer"></div>
            </div>
        </div >
    )
}

export default StrategyGuideCC