import React, { useState } from 'react'

import Image from 'react-bootstrap/Image';

import SubscribeComponent from "./SubscribeComponent"
import logo_banner from "./logo_banner.png";
import { useNavigate } from 'react-router-dom';

import BannerHome from "./BannerHome";

function AC_Grandfather() {

    let navigate = useNavigate();

    function onBannerClick() {
        navigate("/");
    }

    return (
        <div className="scroll-div">
            <div className="bg-main-long">
                <div className="white-box-text-long">
                    <br />
                    <br />
                    <h1 className="text-impact">My Grandfather built his <b>legacy</b> through options trading.</h1>
                    <br />
                    <h3>He spent his retirement glued to the computer, watching and waiting.</h3>
                    <br />
                    <h3><b>Waiting</b> for the perfect trading opportunity.</h3>
                    <br />
                    <h3>No one denies his dedication or heart. He was <i>disciplined</i>, <i>smart</i>, and <i>noble</i>.</h3>
                    <br />
                    <h3>He ensured that his family would <u>never</u> be poor.</h3>
                    <br />
                    <h1 className="text-impact">But the clock waits for no one.</h1>
                    <br />
                    <h3>His time came, as it does for us all.</h3>
                    <br />
                    <h3>I am grateful to him for all his sacrifices for our family.</h3>
                    <br />
                    <h3>Yet, he traded away his golden years and missed out on the rewards for his .</h3>
                    <br />
                    <h1 className="text-impact">What if my Grandfather did not need to trade away his <b>TIME?</b></h1>
                    <br />
                    <h3>What if trading options did not require sacrificing your precious time too?</h3>
                    <br />
                    <h3>You could make your trades <b>AND</b> enjoy your time.</h3>
                    <br />
                    <h3>He was displined, smart, and stubborn.</h3>
                    <br />
                    <h3>He made sure that his family would never be poor.</h3>
                    <br />
                    <h1 className="text-impact">But the clock waits for no one.</h1>
                    <br />
                    <h3>He made sure that his family would never be poor.</h3>
                    <br />
                    <br />
                    <br />
                    <h1 className="text-impact"><b>My Grandfather built his legacy through options trading.</b></h1>
                    <br />
                    <h3>He spent his retirement glued to the computer, watching and waiting.</h3>
                    <br />
                    <h3>Waiting for the perfect opportunity.</h3>
                    <br />
                    <h3>He was displined, smart, and stubborn.</h3>
                    <br />
                    <h3>He made sure that his family would never be poor.</h3>
                    <br />
                    <h1 className="text-impact">This is what <b>Erabu Trades</b> is all about.</h1>
                    <br />
                    <br />

                    <BannerHome />
                    <p>Trade your options, not your time.</p>
                    <SubscribeComponent />
                </div>
            </div >
        </div >
    )
}

export default AC_Grandfather