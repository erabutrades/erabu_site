import React, { useState } from 'react'

import logo_banner from "./logo_banner.png";
import { useNavigate } from 'react-router-dom';

function BannerHome() {

    let navigate = useNavigate();

    function onBannerClick() {
        navigate("/");
    }

    return (
        <div>
            <img className="logo-banner" src={logo_banner} alt="logo_banner.png" onClick={onBannerClick} />
        </div >
    )
}

export default BannerHome