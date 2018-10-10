import React, { Component } from 'react';

import './homeAd.css';
import AdSpace from './Ad-Space/ad';
import EmailCapture from './Email-Capture/email';

export default class homeAd extends Component {
    render() {
        return (
            <div className="homeAd-wrapper">
                <EmailCapture></EmailCapture>
                <AdSpace></AdSpace>
            </div>
        )
    }
}
