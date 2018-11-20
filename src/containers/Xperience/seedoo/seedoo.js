import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { Player } from 'video-react';

import './seedoo.css';
import * as TabActions from '../../../actions/homescreen';

class Seedoo extends Component {
    componentWillMount() {
        this.props.getTabVideos();
    }

    render() {
        return (
            <div className='seedoo'>
                <div className="x-display">
                    {this.props.videos.map(video => (
                        <div key={video.post.id}>
                            <Player
                                playing
                                src={"http://tv.seedoo.tv/taxi/Main_Screen/" + video.post.videourl}
                                className="video-react-big-play-button-center"
                            />
                        </div>
                    ))}
                </div>
                {/* <div className="x-bottom-ads"></div> */}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getTabVideos: () => dispatch(TabActions.fetchAllHomeScreenVids()),
    }
}

const mapStateToProps = state => {
    return {
        videos: state.TSV.tabScreenVids
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Seedoo);