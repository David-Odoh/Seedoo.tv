import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Player } from 'video-react';

import './videoDetails.css';
import Loading from '../../../img/loading.gif';
import SlimHeader from '../../SlimHeader/slimHeader';
import TitleBar from '../../TitleBar/titleBar';
import HomeAds from '../../../components/Home-Ad/homeAd';

class VideoDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tileTitle: '',
            tileVid: '',
            tileImg: '',
            tileSum: '',
            tileView: ''
        }
    }

    componentWillMount() {
        if (this.props.location.data) {
            const { tileTitle } = this.props.location.data
            const { tileVid } = this.props.location.data
            const { tileImg } = this.props.location.data
            const { tileSum } = this.props.location.data
            const { tileView: tileView } = this.props.location.data

            this.setState({
                tileTitle: tileTitle,
                tileVid: tileVid,
                tileImg: tileImg,
                tileSum: tileSum,
                tileView: tileView
            })
        }
    }

    render() {
        const mapStringToJSX = (body) => {
            return body
        }

        return (
            <div className="video-details news">
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
                                    {/* <video className="card-img-top" src={this.state.tileVid}></video> */}
                                    <Player
                                        playsInline
                                        poster={this.state.tileImg}
                                        src={this.state.tileVid}
                                        className="video-react-big-play-button-center"
                                    />

                                </div>

                                <div className="tile-views-back">
                                    <span className="tile-views">Video Views: {this.state.tileView}</span>
                                    <div className="back"><span onClick={() => this.props.history.goBack()}>Back to Video List</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        )
    }
}


export default VideoDetails;