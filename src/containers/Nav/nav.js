import React, { Component } from 'react'
import NavCss from './nav.css';

export default class nav extends Component {
    render() {
        return (
            <div>
                <div className="alt">
                    <div className="tabs home_tabs">
                        <ul className="row">
                            <li className="card">
                                <a href="#">
                                    <span className="fa fa-file-alt"></span>
                                </a>
                                <p>Background Info</p>
                            </li>
                            <li className="card">
                                <a href="#">
                                    <span className="fa fa-bell"></span>
                                </a>
                                <p>News</p>
                            </li>
                            <li className="card">
                                <a href="#">
                                    <span className="fa fa-video"></span>
                                </a>
                                <p>Videos</p>
                            </li>
                            <li className="card">
                                <a href="#">
                                    <span className="fa fa-tv"></span>
                                </a>
                                <p>Xperience Seedoo.tv</p>
                            </li>
                            <li className="card">
                                <a href="#">
                                    <span className="fa fa-address-book"></span>
                                </a>
                                <p>Contact Us</p>
                            </li>
                            <li className="card">
                                <a href="#">
                                    <span className="fa fa-download"></span>
                                </a>
                                <p>Mobile App Download</p></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
