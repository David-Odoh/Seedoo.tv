import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './email.css';

export default class email extends Component {
    render() {
        return (
            <div>
                <div className="email-wrapper">
                    <Link to="" className="card email-card">
                        <div className="contentInside">
                            <i className="icon"></i>
                            <span className="description">
                                Stay up to date with current happenings, entertainment and news.
                            </span>
                            <input type="text" placeholder="Enter Email" />
                            <span className="pushButton">
                                Subscribe
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}
