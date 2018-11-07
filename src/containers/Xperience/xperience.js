import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Route, Redirect } from 'react-router-dom';

import './xperience.css';
import SlimHeader from '../SlimHeader/slimHeader';
import TitleBar from '../TitleBar/titleBar';
import Seedoo from './seedoo/seedoo';
import Lagos from './lagos/lagos';
import XNewsList from '../../UI-Helpers/xnews/xnews';

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
                                        <Route exact path={this.props.match.path} render={() => <Redirect to={`${this.props.match.path}/news`} />} />
                                        <Route path={`${this.props.match.path}/seedoo`} component={Seedoo} />
                                        <Route path={`${this.props.match.path}/lagos`} component={Lagos} />
                                        <Route path={`${this.props.match.path}/news`} component={XNewsList} />
                                        {/*<XNewsList></XNewsList>*/}
                                    </div>
                                </div>
                                <div className="x-right">
                                    <div className="x-menu">
                                        <div className="contained">
                                            <Link to={`${this.props.match.url}/lagos`}>
                                                <span className="x-buttons" id="one">This is Lagos</span>
                                            </Link>
                                            <Link to={`${this.props.match.url}/map`}>
                                                <span className="x-buttons" id="two">Map</span>
                                            </Link>
                                        </div>
                                        <Link to={`${this.props.match.url}/seedoo`}>
                                            <span className="x-buttons" id="three">Seedoo.tv</span>
                                        </Link>
                                        <div className="contained">
                                            <Link to={`${this.props.match.url}/news`}>
                                                <span className="x-buttons" id="four">News</span>
                                            </Link>
                                            <Link to={`${this.props.match.url}/games`}>
                                                <span className="x-buttons" id="five">Games</span>
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