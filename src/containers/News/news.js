import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink, Route, Switch, Redirect } from 'react-router-dom';

import './news.css';
import SlimHeader from '../SlimHeader/slimHeader';
import TitleBar from '../TitleBar/titleBar';
import NewsComp from './News-List/newsList';
import NewsEnter from './News-Entertaiment/entertainment';
import NewsAfrican from './News-African/african';
import NewsHuman from './News-Human/human';
import HomeAds from '../../components/Home-Ad/homeAd';
import * as NewsActions from '../../actions/newsBit';

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCategory: 'Local News'
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
                                <div className="item-count">Items List</div>
                                <div className="category-tabs">

                                    <Link to={`${this.props.match.url}/local`}>
                                        <div className="tab one" onClick={() => this.changeCategoryTile('Local News')}>
                                            Local News
                                        </div>
                                    </Link >
                                    <Link to={`${this.props.match.url}/entertainment`}>
                                        <div className="tab two" onClick={() => { this.changeCategoryTile('Entertaiment News'); this.props.getEntertainmentNews() }}>Entertainment</div>
                                    </Link >
                                    <Link to={`${this.props.match.url}/human`}>
                                        <div className="tab three" onClick={() => { this.changeCategoryTile('Human Angle Stories'); this.props.getHumanNews() }}>Human Angle Stories</div>
                                    </Link >
                                    <Link to={`${this.props.match.url}/africa`}>
                                        <div className="tab four" onClick={() => { this.changeCategoryTile('African News'); this.props.getAfricanNews() }}>African News</div>
                                    </Link >
                                </div>
                            </div>
                            <div className="category-title"><span>{this.state.currentCategory}</span></div>
                        </div>
                        <div className="child-routes">
                            <Route exact path={this.props.match.path} render={() => <Redirect to={`${this.props.match.path}/local`} />} />
                            <Route path={`${this.props.match.path}/local`} component={NewsComp} />
                            <Route path={`${this.props.match.path}/entertainment`} component={NewsEnter} />
                            <Route path={`${this.props.match.path}/human`} component={NewsHuman} />
                            <Route path={`${this.props.match.path}/africa`} component={NewsAfrican} />
                        </div>

                    </div>
                </div>
            </div >
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getEntertainmentNews: () => dispatch(NewsActions.fetchAllEntertianmentNews()),
        getAfricanNews: () => dispatch(NewsActions.fetchAllAfricanNews()),
        getHumanNews: () => dispatch(NewsActions.fetchAllHumanNews())
    }
}

export default connect(null, mapDispatchToProps)(News);