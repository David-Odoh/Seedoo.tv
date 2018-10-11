import React, { Component } from 'react'
import './nav.css';

export default class nav extends Component {
    render() {
        return (
            <div>
                <div className="alt">
                    <div className="tabs home_tabs">
                        <ul className="row">
                            <li className="card">
                                <a>
                                    <strong>About</strong>
                                    <span>Us</span>
                                </a>
                            </li>
                            <li className="card">
                                <a>
                                    <strong>News</strong>
                                    <span>Bits</span>
                                </a>
                            </li>
                            <li className="card">
                                <a>
                                    <strong>Videos</strong>
                                    <span>Highlights</span>
                                </a>
                            </li>
                            <li className="card">
                                <a>
                                    <strong>Xperience</strong>
                                    <span>Seedoo.tv</span>
                                </a>
                            </li>
                            <li className="card">
                                <a>
                                    <strong>Contact</strong>
                                    <span>Us</span>
                                </a>
                            </li>
                            <li className="card">
                                <a>
                                    <strong>Our App</strong>
                                    <span>Download</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
