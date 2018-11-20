import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';

import './newsDetails.css';
import Loading from '../../../img/loading.gif';
import SlimHeader from '../../SlimHeader/slimHeader';
import TitleBar from '../../TitleBar/titleBar';
import HomeAds from '../../../components/Home-Ad/homeAd';

class NewsDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tileTitle: '',
            tileImg: '',
            tileSum: ''
        }
    }

    componentWillMount() {
        if (this.props.location.data) {
            const { tileTitle } = this.props.location.data
            const { tileImg } = this.props.location.data
            const { tileSum } = this.props.location.data

            this.setState({
                tileTitle: tileTitle,
                tileImg: tileImg,
                tileSum: tileSum
            })
        }
    }



    render() {
        const mapStringToJSX = (body) => {
            return body
        }

        return (
            <div className="news">
                <SlimHeader></SlimHeader>
                <TitleBar barTitle="News"></TitleBar>
                <div className="news-wrapper row">
                    <aside>
                        <HomeAds></HomeAds>
                    </aside>
                    <div className="main-area">
                        <div className="newsDetails">
                            <div className="title">
                                <h1>{this.state.tileTitle}</h1>
                            </div>
                            <div className="tile">

                                <div className="title-head">
                                    <img className="card-img-top" src={this.state.tileImg} alt="Card image cap" />
                                </div>

                                <div className="tile-body">
                                    <p dangerouslySetInnerHTML={{ __html: this.state.tileSum }}></p>
                                </div>
                                <div className="tile-views-back">
                                    <span className="tile-views">Views: {this.state.tileView}</span>
                                    <div className="back"><span onClick={() => this.props.history.goBack()}>Back to News List</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        )
    }
}


export default NewsDetails;