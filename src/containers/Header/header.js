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
                                        <a href="#">Perks</a>
                                    </li>
                                    <li className="header-link">
                                        <a href="#">Gist</a>
                                    </li>
                                    <li className="header-link">
                                        <a target="_blank" href="https://issuu.com/lostinlagosmagazine/docs/lil_july_2018">LIL Magazine</a>
                                    </li>
                                </ul>
                            </div>

                            <div className="login right dark-bg">
                                <ul>
                                    <li className="left header-link">
                                        <a href="#">List a Business</a>
                                    </li>
                                    <li className="left">
                                        <a className="call-to-action" href="#">LOG IN</a>
                                    </li>
                                    <li className="left">
                                        <a className="call-to-action" href="#">REGISTER</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="bottom">
                        <div className="row">
                            <div className="logo left">
                                <a href="/">
                                    <img src={Logo} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hero">
                    <div className="row">
                        <div className="md-6 cols md-centered">
                            <h1>Discover, Experience, Love Lagos</h1>

                            <form accept-charset="UTF-8" action="#" method="get">
                                <div className="displayNone">
                                    <input name="utf8" type="hidden" value="✓" />
                                </div>
                                <div className="inputGroup editSelect">
                                    <input id="homeSearch" name="query" placeholder="Search for anything e.g Pool, Indian, Lekki.." type="text" />
                                </div>
                                <input className="btn blue visibilityHidden" name="commit" type="submit" value="Search" />
                            </form>
                        </div>
                    </div>

                    <p className="photoCredits">
                        <span>Sugarcane</span>
                    </p>
                </div>
            </div>
        )
    }
}
