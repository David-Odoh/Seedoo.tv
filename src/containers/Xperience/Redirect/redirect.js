import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './redirect.css';

export default class Lagos extends Component {
    render() {
        return (
            <div className='redirect'>
                <div className="thisCard">
                    <div className="title">
                        <h1>Get Our <span>Mobile</span> App</h1>
                        <p>SeeDoo TV is a premier innovative and interactive platform that provides real time, Interactive and engaging content on the go.</p>
                        <p style={{ fontWeight: "600" }}>Download our app to enjoy the full Seedoo.tv Xperience</p>
                    </div>
                    <Link to="/download">
                        <div className="download-btn">
                            Download <span>V 1.0</span>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}
