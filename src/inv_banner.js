import React, { useState } from 'react'

import logo_banner from "./logo_banner_inv.png";
import { useNavigate } from 'react-router-dom';

function BannerHomeInv() {

    let navigate = useNavigate();

    function onBannerClick() {
        navigate("/");
    }

    return (
        <div>
            <img className="logo-banner" src={logo_banner} alt="logo_banner_inv.png" onClick={onBannerClick} />
        </div >
    )
}

export default BannerHomeInv