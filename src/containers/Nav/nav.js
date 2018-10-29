import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './nav.css';

export default class nav extends Component {
    render() {
        return (
            <div>
                <div className="alt">
                    <div className="tabs home_tabs">
                        <ul className="row">
                            <Link to='/about'>
                                <li className="card">
                                    <a>
                                        <strong>About</strong>
                                        <span>Us</span>
                                    </a>
                                </li>
                            </Link>
                            <Link to='/news'>
                                <li className="card">
                                    <a>
                                        <strong>News</strong>
                                        <span>Bits</span>
                                    </a>
                                </li>
                            </Link>
                            <Link to='/videos'>
                                <li className="card">
                                    <a>
                                        <strong>Videos</strong>
                                        <span>Highlights</span>
                                    </a>
                                </li>
                            </Link>
                            <Link to='/xperience'>
                                <li className="card">
                                    <a>
                                        <strong>Xperience</strong>
                                        <span>Seedoo.tv</span>
                                    </a>
                                </li>
                            </Link>
                            <Link to='/contact'>
                                <li className="card">
                                    <a>
                                        <strong>Contact</strong>
                                        <span>Us</span>
                                    </a>
                                </li>
                            </Link>
                            <Link to='/download'>
                                <li className="card">
                                    <a>
                                        <strong>Our App</strong>
                                        <span>Download</span>
                                    </a>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
