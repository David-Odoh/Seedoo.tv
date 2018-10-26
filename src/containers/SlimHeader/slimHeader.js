import React, { Component } from 'react';

import './slimHeader.css';
import Logo from '../../img/SeeDooTV_small.png';
import searchIcon from '../../img/search_icon_small.png';

export default class SlimHeader extends Component {
    render() {
        const styles = {
            searchIcon: {
                backgroundImage: `url(${searchIcon})`,
                backgroundPosition: '5% 50%',
                backgroundRepeat: 'no-repeat',
                color: '#aaaaaa',
                paddingLeft: '45px'
            }
        }

        return (
            <div className="slimHeader alt">
                <div className="top alt">
                    <div className="row">
                        <div className="left">
                            <div className="logo left">
                                <a href="#">
                                    <img src={Logo} />
                                </a>
                            </div>
                            <div className="help left">
                                <span className="helpCenter header-link">
                                    <a href="#">Help Center</a>
                                </span>
                            </div>
                            <div className="center left">
                                <form className="search" accept-charset="UTF-8" action="/search" method="get" role="search">
                                    <div style={{ "display": "none" }}><input name="utf8" type="hidden" value="✓" /></div>
                                    <input id="query" name="query" style={styles.searchIcon} title="Experience Lagos" placeholder="Experience Lagos" type="search" />
                                    <input name="commit" type="submit" value="Search" />
                                </form>
                            </div>
                        </div>
                        <div className="socials right">
                            <div className="search-icon-only">
                                <img src={searchIcon} alt="" />
                                <span>Search</span>
                            </div>
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
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
