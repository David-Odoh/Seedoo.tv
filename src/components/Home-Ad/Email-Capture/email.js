import React, { Component } from 'react';

import './email.css';

export default class email extends Component {
    render() {
        return (
            <div>
                <div className="email-wrapper">
                    <a className="card email-card">
                        <div className="contentInside">
                            <i className="icon"></i>
                            <span className="description">
                                Stay up to date with current happens, entertainment and news.
                            </span>
                            <input type="text" placeholder="Enter Email" />
                            <span className="pushButton">
                                Subscribe
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}
