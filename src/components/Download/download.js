import React, { Component } from 'react';

import './download.css';
import TabletPhoneImage from '../../img/Seedoo_tablet_phone.png';
import EmailCapture from '../Home-Ad/Email-Capture/email';

export default class DownloadComp extends Component {
    render() {
        return (
            <div className='downloadComp row'>
                <div className="left">
                    <div className="thisCard">
                        <div className="title">
                            <h1>Get Our <span>Mobile</span> App</h1>
                            <p>SeeDoo TV is a premier innovative and interactive platform that provides real time, Interactive and engaging content on the go.</p>
                        </div>
                        <div className="download-btn">
                            Download <span>V 1.0</span>
                        </div>
                    </div>

                    <div className="email-capture">
                        <EmailCapture></EmailCapture>
                    </div>
                </div>
                <div className="right">
                    <span>
                        <img src={TabletPhoneImage} alt="" />
                    </span>
                </div>
            </div>
        )
    }
}
