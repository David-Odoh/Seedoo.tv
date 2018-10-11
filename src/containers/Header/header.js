import React, { Component } from 'react';
import './header.css';
import Logo from '../../img/SeeDooTV_logo1.png'

export default class header extends Component {
    render() {
        return (
            <div>
                <div className="header home-bg">
                    <div className="top">
                        <div className="row dark-bg">
                            <div className="left">
                                <ul className="options left dark-bg">
                                    <li className="header-link">
                                        <a href="#"><span className="fa fa-facebook"></span></a>
                                    </li>
                                    <li className="header-link">
                                        <a href="#"><span className="fa fa-twitter"></span></a>
                                    </li>
                                    <li className="header-link">
                                        <a href="#"><span className="fa fa-instagram"></span></a>
                                    </li>
                                </ul>
                            </div>

                            <div className="login right dark-bg animated slideInRight">
                                <ul>
                                    <li className="left header-link">
                                        <a href="#">Download Seedoo App!</a>
                                    </li>
                                    <li className="left green-blue">
                                        <a className="call-to-action" href="#">LOG IN</a>
                                    </li>
                                    <li className="left green-blue">
                                        <a className="call-to-action" href="#">REGISTER</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="bottom">
                        <div className="row">
                            <div className="logo left animated slideInLeft">
                                <a href="#">
                                    <img src={Logo} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hero">
                    <div className="row">
                        <div className="md-6 cols md-centered">
                            <h1>Experience the <span className="our-green">Art</span> of Mobile Entertainment</h1>

                            <form acceptCharset="UTF-8" action="#" method="get">
                                <div className="displayNone">
                                    <input name="utf8" type="hidden" value="✓" />
                                </div>
                                <div className="inputGroup editSelect">
                                    <input id="homeSearch" className="animated fadeInDown" name="query" placeholder="What would you like to find?" type="text" />
                                </div>
                                <input className="btn blue visibilityHidden" name="commit" type="submit" value="Search" />
                            </form>
                        </div>
                    </div>

                    <p className="photoCredits">
                        <span></span>
                    </p>
                </div>
            </div >
        )
    }
}
