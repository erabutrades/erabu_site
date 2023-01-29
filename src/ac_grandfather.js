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
                    <br />
                    <h1 className="text-impact">Grandfather built his financial legacy with options trading.</h1>
                    <br />
                    <h3>He spent his retirement glued to the computer, watching and waiting.</h3>
                    <br />
                    <h3><i>Waiting</i> for the perfect trading opportunity.</h3>
                    <br />
                    <h1 className="text-impact">But the clock waits for no one.</h1>
                    <br />
                    <h1 className="text-impact">He traded away his golden years.</h1>
                    <br />
                    <h3>His effort successfully secured our family's financial future.</h3>
                    <br />
                    <h3>Yet, the cost was something even more precious: time with family.</h3>
                    <br />
                    <h1 className="text-impact">Does trading options require trading away your time too?</h1>
                    <br />
                    <br />
                    <h1><b>--NOT ANYMORE--</b></h1>
                    <br />

                    <BannerHome />
                    <SubscribeComponent />

                    <br />
                    <h1 className="text-impact">Low Maintenance Covered Call Positions Management</h1>
                    <br />
                    <h3>Designed to help you find profitable exits and give you back your time.</h3>
                    <br />
                    <br />
                    <h3>We will be live soon.</h3>
                    <br />
                    <h1 className="text-impact">Subscribe now to be the first notified.</h1>
                    <br />

                    <BannerHome />
                    <h4>Trade your options, not your time.</h4>
                    <br />
                    <SubscribeComponent />


                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
            </div >
        </div >
    )
}

export default AC_Grandfather