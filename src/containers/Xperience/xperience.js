import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Route, Redirect } from 'react-router-dom';

import './xperience.css';
import SlimHeader from '../SlimHeader/slimHeader';
import TitleBar from '../TitleBar/titleBar';
import Seedoo from './seedoo/seedoo';
import redirect from './Redirect/redirect';

import LagosIcon from '../../img/icon/lagos.png';
import MapIcon from '../../img/icon/map.png';
import SeedooIcon from '../../img/icon/seedoo.png';
import NewsIcon from '../../img/icon/news.png';
import GamesIcon from '../../img/icon/games.png';


class Xperience extends Component {
    render() {
        return (
            <div>
                <div className="xperience">
                    <SlimHeader></SlimHeader>
                    <TitleBar barTitle="Xperience"></TitleBar>
                    <div className='row'>
                        <div className="x-body">
                            <div className="x-tablet">
                                <div className="x-left">
                                    <div className="constrained">
                                        <Route exact path={this.props.match.path} render={() => <Redirect to={`${this.props.match.path}/seedoo`} />} />
                                        <Route path={`${this.props.match.path}/seedoo`} component={Seedoo} />
                                        <Route path={`${this.props.match.path}/lagos`} component={redirect} />
                                    </div>
                                </div>
                                <div className="x-right">
                                    <div className="x-menu">
                                        <div className="contained">
                                            <Link to={`${this.props.match.url}/lagos`}>
                                                <span className="x-buttons" id="one">
                                                    <img src={LagosIcon} alt="" />
                                                    This is Lagos</span>
                                            </Link>
                                            <Link to={`${this.props.match.url}/lagos`}>
                                                <span className="x-buttons" id="two">
                                                    <img src={MapIcon} alt="" />
                                                    Map
                                                    </span>
                                            </Link>
                                        </div>
                                        <Link to={`${this.props.match.url}/seedoo`}>
                                            <span className="x-buttons" id="three">
                                                <img src={SeedooIcon} alt="" />
                                                Seedoo.tv
                                                </span>
                                        </Link>
                                        <div className="contained">
                                            <Link to={`${this.props.match.url}/lagos`}>
                                                <span className="x-buttons" id="four">
                                                    <img src={NewsIcon} alt="" />
                                                    News</span>
                                            </Link>
                                            <Link to={`${this.props.match.url}/lagos`}>
                                                <span className="x-buttons" id="five">
                                                    <img src={GamesIcon} alt="" />
                                                    Games
                                                    </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Xperience;
