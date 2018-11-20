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

                            <li className="card">
                                <Link to='/about'>
                                    <strong>About</strong>
                                    <span>Us</span>
                                </Link>
                            </li>

                            <li className="card">
                                <Link to='/news'>
                                    <strong>News</strong>
                                    <span>Bits</span>
                                </Link>
                            </li>

                            <li className="card">
                                <Link to='/videos'>
                                    <strong>Videos</strong>
                                    <span>Highlights</span>
                                </Link>
                            </li>


                            <li className="card">
                                <Link to='/xperience'>
                                    <strong>Xperience</strong>
                                    <span>Seedoo.tv</span>
                                </Link>
                            </li>


                            <li className="card">
                                <Link to='/contact'>
                                    <strong>Contact</strong>
                                    <span>Us</span>
                                </Link>
                            </li>


                            <li className="card">
                                <Link to='/download'>
                                    <strong>Our App</strong>
                                    <span>Download</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
