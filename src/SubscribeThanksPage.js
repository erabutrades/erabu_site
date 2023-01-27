import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'

import BannerHome from "./BannerHome";


function SubscribeThanksPage(props) {
    return (
        <div className="main-div">
            <div className="bg-main">
                <div className="white-box-text">
                    <BannerHome />
                    <h1>Thank you for subscribing.</h1>
                    <br />
                    <h3>We will be in touch with the latest news.</h3>
                </div>
            </div>
        </div>
    );
}


export default SubscribeThanksPage