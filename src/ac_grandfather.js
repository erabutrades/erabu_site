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
                    <h1 className="text-impact">My Grandfather built his financial <b>legacy</b> through options trading.</h1>
                    <br />
                    <h3>He was <i>disciplined</i>, <i>smart</i>, and <i>full of heart</i>.</h3>
                    <br />
                    <h3>His retirement was consumed, glued to the computer, watching and waiting.</h3>
                    <br />
                    <h3><b>Waiting</b> for the perfect trading opportunity.</h3>
                    <br />
                    <h1 className="text-impact">But the clock waits for no one.</h1>
                    <br />
                    <h3>His time came, as it does for us all.</h3>
                    <br />
                    <h3>His effort was not in vain, he ensured that his family would never be poor.</h3>
                    <br />
                    <h3>I am grateful to him for all his sacrifices for our family.</h3>
                    <br />
                    <h3>His effort ensured that our family would never be poor.</h3>
                    <br />
                    <h3>Yet the cost was spending his golden years away from his family watching a screen.</h3>
                    <br />
                    <h1 className="text-impact">What if it didn't have to be this way?</h1>
                    <br />
                    <h3>What if trading options didn't mean sacrificing your time too?</h3>
                    <br />
                    <h1>Welcome to</h1>
                    <BannerHome />
                    <br />
                    <h1 className="text-impact">The ultimate options position manager.</h1>
                    <br />
                    <h3>A watched pot never boils.</h3>
                    <br />
                    <h3>Make your trade. Live your life.</h3>
                    <br />
                    <h3>Erabu Trades will notify you when the water is ready.</h3>
                    <br />
                    <br />
                    <br />
                    <br />
                    <h3>Erabu Trades will be live soon.</h3>
                    <br />
                    <h1 className="text-impact">Subscribe now and be the first notified.</h1>
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