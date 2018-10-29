import React, { Component } from 'react';
import './header.css';
import Logo from '../../img/SeeDooTV_logo1.png';
import { Link } from 'react-router-dom';

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
                                        <a href='https://www.facebook.com/seedootv/' target='_black'><span className="fa fa-facebook"></span></a>
                                    </li>
                                    <li className="header-link">
                                        <a href='https://twitter.com/seedootv' target='_black'><span className="fa fa-twitter"></span></a>
                                    </li>
                                    <li className="header-link">
                                        <a href='https://www.instagram.com/seedoo.tv/' target='_black'><span className="fa fa-instagram"></span></a>
                                    </li>
                                </ul>
                            </div>

                            <div className="login right dark-bg animated slideInRight">
                                <ul>
                                    <Link to='/download'>
                                        <li className="left header-link">
                                            <a>Download Seedoo App!</a>
                                        </li>
                                    </Link>
                                    <li className="left green-blue">
                                        <a className="call-to-action">LOG IN</a>
                                    </li>
                                    <li className="left green-blue">
                                        <a className="call-to-action">REGISTER</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="bottom">
                        <div className="row">
                            <div className="logo left animated slideInLeft">
                                <Link to='/'>
                                    <a>
                                        <img src={Logo} />
                                    </a>
                                </Link>
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
