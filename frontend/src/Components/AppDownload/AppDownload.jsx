import React from 'react';
import "./AppDownload.css"
import {assets} from "../../assets/assets.js";
const AppDownload = () => {
    return (
        <div className="AppDownload" id="appDownload">
            <p>For Better Experience Download <br/> Orderly Bite App </p>
            <div className="app-download-platforms">
                <img src={assets.play_store} alt="Play store"/>
                <img src={assets.app_store} alt="App store"/>
            </div>

        </div>
    );
};

export default AppDownload;
