import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
                                <Link to='/'>
                                    <a>
                                        <img src={Logo} />
                                    </a>
                                </Link>
                            </div>
                            <div className="help left">
                                <span className="helpCenter header-link">
                                    <Link to='/contact'>
                                        <a>Help Center</a>
                                    </Link>
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
                                <img src={searchIcon} alt="search" />
                                <span>Search</span>
                            </div>
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
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
