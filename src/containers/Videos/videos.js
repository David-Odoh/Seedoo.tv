import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink, Route, Switch, Redirect } from 'react-router-dom';

import './videos.css';
import SlimHeader from '../SlimHeader/slimHeader';
import TitleBar from '../TitleBar/titleBar';
import HomeAds from '../../components/Home-Ad/homeAd';
import * as VideoActions from '../../actions/videoHighlights';
import Comedy from './Comedy/comedy';
import Music from './Music/music';
import Movies from './Movies/movies';
import Kiddies from './Kiddies/kiddies';

class Videos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCategory: 'Comedy Videos'
        };
    }

    changeCategoryTile = (cat) => {
        this.setState({
            currentCategory: cat
        });
    }

    render() {

        return (
            <div className="news">
                <SlimHeader></SlimHeader>
                <TitleBar barTitle="News"></TitleBar>
                <div className="news-wrapper row">
                    <aside>
                        <HomeAds></HomeAds>
                    </aside>
                    <div className="main-area">
                        <div className="top-strip">
                            <div className="category">
                                <div className="item-count">470 Items in Total</div>
                                <div className="category-tabs">

                                    <Link to={`${this.props.match.url}/comedy`}>
                                        <div className="tab one" onClick={() => this.changeCategoryTile('Comedy Videos')}>
                                            Comedy Videos
                                        </div>
                                    </Link >
                                    <Link to={`${this.props.match.url}/music`}>
                                        <div className="tab two" onClick={() => { this.changeCategoryTile('Music Videos'); this.props.getMusicVideos() }}>Music Videos</div>
                                    </Link >
                                    <Link to={`${this.props.match.url}/movie`}>
                                        <div className="tab three" onClick={() => { this.changeCategoryTile('Movie Videos'); this.props.getMovies() }}>Short Movies</div>
                                    </Link >
                                    <Link to={`${this.props.match.url}/kiddies`}>
                                        <div className="tab four" onClick={() => { this.changeCategoryTile('Kiddies Videos'); this.props.getKiddiesVideos() }}>Kiddies Videos</div>
                                    </Link >
                                </div>
                            </div>
                            <div className="category-title"><span>{this.state.currentCategory}</span></div>
                        </div>
                        <div className="child-routes">
                            <Route exact path={this.props.match.path} render={() => <Redirect to={`${this.props.match.path}/comedy`} />} />
                            <Route path={`${this.props.match.path}/comedy`} component={Comedy} />
                            <Route path={`${this.props.match.path}/music`} component={Music} />
                            <Route path={`${this.props.match.path}/movie`} component={Movies} />
                            <Route path={`${this.props.match.path}/kiddies`} component={Kiddies} />
                        </div>

                    </div>
                </div>
            </div >
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getMusicVideos: () => dispatch(VideoActions.fetchAllMusicVideos()),
        getMovies: () => dispatch(VideoActions.fetchAllMovieVideos()),
        getKiddiesVideos: () => dispatch(VideoActions.fetchAllKiddiesVideos())
    }
}

export default connect(null, mapDispatchToProps)(Videos);